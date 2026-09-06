// src/pages/TajweedClass.jsx
//
// Tajweed Class -- sequential course on Qur'anic recitation, built on
// the exact same architecture as Adab Class and Tawheed Class:
// Course overview -> Unit page (topic list) -> Topic page, dual
// gating (payment + quiz), highlighted Qur'an/Hadith verse blocks,
// wf-style card system.
//
// Deliberately named and routed separately from any existing
// Tajweed page/product in this app -- this uses its own DB tables
// (tajweedclass_progress / tajweedclass_purchases /
// tajweedclass_quiz_attempts) and its own Paystack product name
// ('tajweedclass'), so it cannot collide with an existing 'tajweed'
// product elsewhere in the payment system.
//
// Two independent locks per unit: payment (Unit 1 free, others
// N500 each or N5,000 for full access -- same pricing as Adab Class
// and Tawheed Class) and a quiz gate (must score >=25/30 on the
// previous unit's quiz to open this one).

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js'; // adjust path to match your existing client import
import { TAJWEEDCLASS_UNITS, TAJWEEDCLASS_TOPICS } from '../data/tajweedClass';
import { TAJWEEDCLASS_UNIT_QUIZZES, TAJWEEDCLASS_PASS_THRESHOLD } from '../data/tajweedClassQuizzes';
import CourseCertificate from '../components/CourseCertificate.jsx';
import './TajweedClass.css';

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

export default function TajweedClass({ user }) {
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
    const { data, error } = await supabase.from('tajweedclass_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('tajweedclass_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('tajweedclass_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
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

  const totalTopics = TAJWEEDCLASS_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = TAJWEEDCLASS_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = TAJWEEDCLASS_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(TAJWEEDCLASS_UNIT_QUIZZES[prevUnit.id]) && TAJWEEDCLASS_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPaywallUnitId(unit.id); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = TAJWEEDCLASS_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(TAJWEEDCLASS_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of TAJWEEDCLASS_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    setSelectedUnitId(TAJWEEDCLASS_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('tajweedclass_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('tajweedclass_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    if (!user) return;
    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'tajweedclass', plan } });
      if (error) throw error;
      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;
      if (authUrl) window.location.href = authUrl;
    } catch (err) {
      console.error('Tajweed Class purchase failed to initialize', err);
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
    const questions = TAJWEEDCLASS_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= TAJWEEDCLASS_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('tajweedclass_quiz_attempts').insert({
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
    const unit = TAJWEEDCLASS_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="tc-sheet-overlay" onClick={() => setPaywallUnitId(null)}>
        <div className="tc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="tc-sheet-header">
            <span className="tc-sheet-title">Unlock "{unit.title}"</span>
            <button className="tc-sheet-close" onClick={() => setPaywallUnitId(null)}>×</button>
          </div>
          <p className="tc-sheet-text">This unit is part of the paid Tajweed Class content.</p>
          <div className="tc-sheet-options">
            <button className="tc-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="tc-sheet-option-title">Unlock This Unit</span>
              <span className="tc-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="tc-sheet-option tc-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="tc-sheet-option-tag">Best Value</span>
              <span className="tc-sheet-option-title">Unlock Full Course</span>
              <span className="tc-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = TAJWEEDCLASS_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = TAJWEEDCLASS_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="tc-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="tc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="tc-sheet-header">
            <span className="tc-sheet-title">Quiz Required</span>
            <button className="tc-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="tc-sheet-text">
            Score at least {TAJWEEDCLASS_PASS_THRESHOLD}/{(TAJWEEDCLASS_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="tc-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="tc-page">
        <div className="tc-loading"><div className="tc-spinner" /></div>
      </div>
    );
  }

  // -- Quiz page --------------------------------------------------
  if (quizUnitId) {
    const unit = TAJWEEDCLASS_UNITS.find((u) => u.id === quizUnitId);
    const questions = TAJWEEDCLASS_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = TAJWEEDCLASS_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="tc-page">
        <button className="tc-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="tc-detail-header">
          <div className="tc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="tc-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="tc-detail-sub">{unit.title}: score {TAJWEEDCLASS_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`tc-status-card ${quizResult.passed ? '' : 'tc-status-card--fail'}`}>
            <div className="tc-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="tc-status-note">
              {quizResult.passed ? 'Passed: next unit unlocked' : `Not yet, you need at least ${TAJWEEDCLASS_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="tc-quiz-q">
              <div className="tc-quiz-q-text"><span className="tc-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="tc-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'tc-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' tc-quiz-option--correct';
                    else if (oi === selected) cls += ' tc-quiz-option--wrong';
                  } else if (oi === selected) cls += ' tc-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="tc-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="tc-actions-row">
          {!quizSubmitted ? (
            <button className="tc-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="tc-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="tc-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // -- Topic page ---------------------------------------------------
  if (activeTopicId) {
    const topic = TAJWEEDCLASS_TOPICS[activeTopicId];
    const unit = TAJWEEDCLASS_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="tc-page">
        <button className="tc-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="tc-detail-header">
          <div className="tc-detail-icon">{isComplete ? <span className="tc-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="tc-detail-title">{topic.title}</div>
            <div className="tc-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="tc-section">
              <div className="tc-section-title">{section.heading}</div>
              <div className="tc-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
              {Array.isArray(section.verses) && section.verses.map((v, vi) => (
                <div key={vi} className={`tc-verse tc-verse--${v.type}`}>
                  <span className="tc-verse-tag">{v.type === 'quran' ? 'Qur\'an' : 'Hadith'}</span>
                  <p className="tc-verse-arabic" lang="ar" dir="rtl">{v.arabic}</p>
                  <p className="tc-verse-english">{v.english}</p>
                  <p className="tc-verse-source">{v.source}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="tc-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="tc-actions-row">
          <button className={isComplete ? 'tc-btn-secondary' : 'tc-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="tc-nav-row">
          <button className="tc-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="tc-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // -- Unit page (topic list) ----------------------------------------
  if (selectedUnitId) {
    const unit = TAJWEEDCLASS_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = TAJWEEDCLASS_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(TAJWEEDCLASS_UNIT_QUIZZES[unit.id]) && TAJWEEDCLASS_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="tc-page">
        <button className="tc-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="tc-detail-header">
          <div className="tc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="tc-detail-title">{unit.title}</div>
            <div className="tc-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="tc-cards">
          {unit.topics.map((topicId) => {
            const topic = TAJWEEDCLASS_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`tc-card ${done ? 'tc-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`tc-card-icon ${done ? 'tc-card-icon--done' : ''}`}>
                  {done ? <span className="tc-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="tc-card-text">
                  <span className="tc-card-label">{topic.title}</span>
                  <span className="tc-card-desc">{topic.summary}</span>
                </span>
                <span className="tc-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="tc-card" onClick={() => startQuiz(unit.id)}>
              <span className={`tc-card-icon ${quizPassed ? 'tc-card-icon--done' : ''}`}>
                {quizPassed ? <span className="tc-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="tc-card-text">
                <span className="tc-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="tc-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(TAJWEEDCLASS_UNIT_QUIZZES[unit.id] || []).length} questions, score ${TAJWEEDCLASS_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="tc-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // -- Course overview -------------------------------------------------
  return (
    <div className="tc-page">
      <div className="tc-hero">
        <div className="tc-hero-title">Tajweed Class</div>
        <div className="tc-hero-sub">A sequential course on the science of correct Qur'anic recitation.</div>
        <div className="tc-progress-track"><div className="tc-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="tc-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="tc-hero-actions">
          <button className="tc-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button className="tc-btn-secondary" disabled={purchasing} onClick={() => startPurchase('full')}>
              Unlock Full Course: ₦{FULL_PRICE_NGN.toLocaleString()}
            </button>
          )}
        </div>
      </div>

      <CourseCertificate
        courseId="tajweedclass"
        quizAttemptsTable="tajweedclass_quiz_attempts"
        units={TAJWEEDCLASS_UNITS}
        courseLabel="Tajweed Class"
        courseArabic="تَجْوِيد"
        courseStats="12 units · 54 topics · 360 quiz questions"
      />

      <div className="tc-cards">
        {TAJWEEDCLASS_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`tc-card ${locked ? 'tc-card--locked' : ''} ${allDone ? 'tc-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`tc-card-icon ${locked ? 'tc-card-icon--locked' : ''} ${allDone ? 'tc-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="tc-icon"><LockIcon /></span> : allDone ? <span className="tc-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="tc-card-text">
                <span className="tc-card-meta">Unit {unitIdx + 1}</span>
                <span className="tc-card-label">{unit.title}</span>
                <span className="tc-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics, purchase to unlock` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="tc-card-side">
                {paymentLocked ? (
                  <span className="tc-card-badge tc-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="tc-card-badge tc-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="tc-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="tc-card-arrow"><ChevronIcon /></span>
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