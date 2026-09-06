// src/pages/ArabiyyahClass.jsx
//
// Arabiyyah Class -- a comprehensive Nahw (Arabic grammar) course,
// built on the exact same architecture as Adab Class, Tawheed Class,
// Tajweed Class, and Seerah Class: Course overview -> Unit page
// (topic list) -> Topic page, dual gating (payment + quiz),
// highlighted verse-block card system.
//
// This course's verse blocks support two types beyond 'quran' and
// 'hadith':
//   - 'example', used for real Arabic sentences parsed word by word
//     for grammar teaching, since parsing (i'rab) is the actual
//     subject matter of Nahw.
//   - 'qaidah', used for formal grammatical rules stated in both
//     Arabic and English, always given their own highlighted box
//     rather than left inline in ordinary prose, since a stated rule
//     (qaidah) is content a learner needs to find again quickly when
//     reviewing, not just read once in passing.
// Both render with their own transliteration line and a distinct
// visual style (see .arc-verse--example and .arc-verse--qaidah in
// ArabiyyahClass.css) so neither is ever confused with quoted
// Qur'an or hadith text, or with each other.
//
// Deliberately named and routed separately from the existing
// Arabiyyah discipline in this app's Q&A-style Disciplines feature --
// this uses its own DB tables (arabiyyahclass_progress /
// arabiyyahclass_purchases / arabiyyahclass_quiz_attempts) and its own
// Paystack product name ('arabiyyahclass'), so it cannot collide with
// that existing feature.
//
// Two independent locks per unit: payment (Unit 1 free, others
// N500 each or N5,000 for full access -- same pricing as the other
// four classes) and a quiz gate (must score >=25/30 on the
// previous unit's quiz to open this one).

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js'; // adjust path to match your existing client import
import { ARABIYYAHCLASS_UNITS, ARABIYYAHCLASS_TOPICS } from '../data/arabiyyahClass';
import { ARABIYYAHCLASS_UNIT_QUIZZES, ARABIYYAHCLASS_PASS_THRESHOLD } from '../data/arabiyyahClassQuizzes';
import CourseCertificate from '../components/CourseCertificate.jsx';
import './ArabiyyahClass.css';


const FREE_UNIT_IDS = ['unit-1'];
const UNIT_PRICE_NGN = 500;
const FULL_PRICE_NGN = 5000;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

export default function ArabiyyahClass({ user }) {
  const [loading, setLoading] = useState(true);
  const [completedIds, setCompletedIds] = useState(new Set());
  const [hasFullAccess, setHasFullAccess] = useState(false);
  const [unlockedUnitIds, setUnlockedUnitIds] = useState(new Set());
  const [quizPassedUnitIds, setQuizPassedUnitIds] = useState(new Set());

  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [quizUnitId, setQuizUnitId] = useState(null);

  const [paywallUnitId, setPaywallUnitId] = useState(null);
  const [quizGateUnitId, setQuizGateUnitId] = useState(null);
  const [purchasing, setPurchasing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [savingQuiz, setSavingQuiz] = useState(false);

  const fetchProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase.from('arabiyyahclass_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('arabiyyahclass_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('arabiyyahclass_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
    if (!error && data) setQuizPassedUnitIds(new Set(data.map((r) => r.unit_id)));
  }, [user]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await Promise.all([fetchProgress(), fetchPurchases(), fetchQuizProgress()]);
      setLoading(false);
    })();
  }, [fetchProgress, fetchPurchases, fetchQuizProgress]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') !== 'success') return;
    let attempts = 0;
    const interval = setInterval(async () => {
      attempts += 1;
      await fetchPurchases();
      if (attempts >= 6) clearInterval(interval);
    }, 2000);
    const url = new URL(window.location.href);
    url.searchParams.delete('payment');
    window.history.replaceState({}, '', url.toString());
    return () => clearInterval(interval);
  }, [fetchPurchases]);

  const totalTopics = ARABIYYAHCLASS_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = ARABIYYAHCLASS_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = ARABIYYAHCLASS_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(ARABIYYAHCLASS_UNIT_QUIZZES[prevUnit.id]) && ARABIYYAHCLASS_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPaywallUnitId(unit.id); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = ARABIYYAHCLASS_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(ARABIYYAHCLASS_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of ARABIYYAHCLASS_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    setSelectedUnitId(ARABIYYAHCLASS_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('arabiyyahclass_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('arabiyyahclass_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    if (!user) return;
    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'arabiyyahclass', plan } });
      if (error) throw error;
      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;
      if (authUrl) window.location.href = authUrl;
    } catch (err) {
      console.error('Arabiyyah Class purchase failed to initialize', err);
    } finally {
      setPurchasing(false);
    }
  };

  const startQuiz = (unitId) => {
    setSelectedUnitId(unitId);
    setActiveTopicId(null);
    setQuizUnitId(unitId);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizResult(null);
  };

  const selectAnswer = (qId, oi) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: oi }));
  };

  const submitQuiz = async () => {
    if (!user || !quizUnitId) return;
    const questions = ARABIYYAHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= ARABIYYAHCLASS_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('arabiyyahclass_quiz_attempts').insert({
      user_id: user.id, unit_id: quizUnitId, score, total: questions.length, passed,
    });
    if (passed) setQuizPassedUnitIds((prev) => new Set(prev).add(quizUnitId));
    setSavingQuiz(false);
    setQuizSubmitted(true);
    setQuizResult({ score, total: questions.length, passed });
  };

  const exitQuiz = () => {
    setQuizUnitId(null); setQuizAnswers({}); setQuizSubmitted(false); setQuizResult(null);
    setSelectedUnitId(null);
  };

  // -- Bottom sheets --------------------------------------------
  const renderPaywallSheet = () => {
    if (!paywallUnitId) return null;
    const unit = ARABIYYAHCLASS_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="arc-sheet-overlay" onClick={() => setPaywallUnitId(null)}>
        <div className="arc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="arc-sheet-header">
            <span className="arc-sheet-title">Unlock "{unit.title}"</span>
            <button className="arc-sheet-close" onClick={() => setPaywallUnitId(null)}>×</button>
          </div>
          <p className="arc-sheet-text">This unit is part of the paid Arabiyyah Class content.</p>
          <div className="arc-sheet-options">
            <button className="arc-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="arc-sheet-option-title">Unlock This Unit</span>
              <span className="arc-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="arc-sheet-option arc-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="arc-sheet-option-tag">Best Value</span>
              <span className="arc-sheet-option-title">Unlock Full Course</span>
              <span className="arc-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = ARABIYYAHCLASS_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = ARABIYYAHCLASS_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="arc-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="arc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="arc-sheet-header">
            <span className="arc-sheet-title">Quiz Required</span>
            <button className="arc-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="arc-sheet-text">
            Score at least {ARABIYYAHCLASS_PASS_THRESHOLD}/{(ARABIYYAHCLASS_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="arc-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="arc-page">
        <div className="arc-loading"><div className="arc-spinner" /></div>
      </div>
    );
  }

  // -- Quiz page --------------------------------------------------
  if (quizUnitId) {
    const unit = ARABIYYAHCLASS_UNITS.find((u) => u.id === quizUnitId);
    const questions = ARABIYYAHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = ARABIYYAHCLASS_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="arc-page">
        <button className="arc-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="arc-detail-header">
          <div className="arc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="arc-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="arc-detail-sub">{unit.title}: score {ARABIYYAHCLASS_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`arc-status-card ${quizResult.passed ? '' : 'arc-status-card--fail'}`}>
            <div className="arc-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="arc-status-note">
              {quizResult.passed ? 'Passed: next unit unlocked' : `Not yet, you need at least ${ARABIYYAHCLASS_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="arc-quiz-q">
              <div className="arc-quiz-q-text"><span className="arc-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="arc-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'arc-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' arc-quiz-option--correct';
                    else if (oi === selected) cls += ' arc-quiz-option--wrong';
                  } else if (oi === selected) cls += ' arc-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="arc-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="arc-actions-row">
          {!quizSubmitted ? (
            <button className="arc-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="arc-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="arc-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // -- Topic page ---------------------------------------------------
  if (activeTopicId) {
    const topic = ARABIYYAHCLASS_TOPICS[activeTopicId];
    const unit = ARABIYYAHCLASS_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="arc-page">
        <button className="arc-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="arc-detail-header">
          <div className="arc-detail-icon">{isComplete ? <span className="arc-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="arc-detail-title">{topic.title}</div>
            <div className="arc-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="arc-section">
              <div className="arc-section-title">{section.heading}</div>
              <div className="arc-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
              {Array.isArray(section.verses) && section.verses.map((v, vi) => (
                <div key={vi} className={`arc-verse arc-verse--${v.type}`}>
                  <span className="arc-verse-tag">
                    {v.type === 'quran' ? 'Qur\'an' : v.type === 'hadith' ? 'Hadith' : v.type === 'qaidah' ? 'Qaidah — Rule' : 'Example'}
                  </span>
                  <p className="arc-verse-arabic" lang="ar" dir="rtl">{v.arabic}</p>
                  {(v.type === 'example' || v.type === 'qaidah') && v.transliteration && (
                    <p className="arc-verse-translit">{v.transliteration}</p>
                  )}
                  <p className="arc-verse-english">{v.english}</p>
                  <p className="arc-verse-source">{v.source}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="arc-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="arc-actions-row">
          <button className={isComplete ? 'arc-btn-secondary' : 'arc-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="arc-nav-row">
          <button className="arc-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="arc-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // -- Unit page (topic list) ----------------------------------------
  if (selectedUnitId) {
    const unit = ARABIYYAHCLASS_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = ARABIYYAHCLASS_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(ARABIYYAHCLASS_UNIT_QUIZZES[unit.id]) && ARABIYYAHCLASS_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="arc-page">
        <button className="arc-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="arc-detail-header">
          <div className="arc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="arc-detail-title">{unit.title}</div>
            <div className="arc-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="arc-cards">
          {unit.topics.map((topicId) => {
            const topic = ARABIYYAHCLASS_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`arc-card ${done ? 'arc-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`arc-card-icon ${done ? 'arc-card-icon--done' : ''}`}>
                  {done ? <span className="arc-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="arc-card-text">
                  <span className="arc-card-label">{topic.title}</span>
                  <span className="arc-card-desc">{topic.summary}</span>
                </span>
                <span className="arc-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="arc-card" onClick={() => startQuiz(unit.id)}>
              <span className={`arc-card-icon ${quizPassed ? 'arc-card-icon--done' : ''}`}>
                {quizPassed ? <span className="arc-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="arc-card-text">
                <span className="arc-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="arc-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(ARABIYYAHCLASS_UNIT_QUIZZES[unit.id] || []).length} questions, score ${ARABIYYAHCLASS_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="arc-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // -- Course overview -------------------------------------------------
  return (
    <div className="arc-page">
      <div className="arc-hero">
        <div className="arc-hero-title">Arabiyyah Class</div>
        <div className="arc-hero-sub">A chronological course on the life of the Prophet Muhammad ﷺ.</div>
        <div className="arc-progress-track"><div className="arc-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="arc-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="arc-hero-actions">
          <button className="arc-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button className="arc-btn-secondary" disabled={purchasing} onClick={() => startPurchase('full')}>
              Unlock Full Course: ₦{FULL_PRICE_NGN.toLocaleString()}
            </button>
          )}
        </div>
      </div>

      <CourseCertificate
        courseId="arabiyyahclass"
        quizAttemptsTable="arabiyyahclass_quiz_attempts"
        units={ARABIYYAHCLASS_UNITS}
        courseLabel="Arabiyyah Class"
        courseArabic="عَرَبِيَّة"
        courseStats="14 units · 60 topics · 420 quiz questions"
      />

      <div className="arc-cards">
        {ARABIYYAHCLASS_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`arc-card ${locked ? 'arc-card--locked' : ''} ${allDone ? 'arc-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`arc-card-icon ${locked ? 'arc-card-icon--locked' : ''} ${allDone ? 'arc-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="arc-icon"><LockIcon /></span> : allDone ? <span className="arc-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="arc-card-text">
                <span className="arc-card-meta">Unit {unitIdx + 1}</span>
                <span className="arc-card-label">{unit.title}</span>
                <span className="arc-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics, purchase to unlock` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="arc-card-side">
                {paymentLocked ? (
                  <span className="arc-card-badge arc-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="arc-card-badge arc-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="arc-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="arc-card-arrow"><ChevronIcon /></span>
                  </>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {renderPaywallSheet()}
      {renderQuizGateSheet()}
    </div>
  );
}