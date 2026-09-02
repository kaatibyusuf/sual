// src/pages/SeerahClass.jsx
//
// Seerah Class -- chronological course on the life of the Prophet
// Muhammad ﷺ, built on the exact same architecture as Adab Class,
// Tawheed Class, and Tajweed Class: Course overview -> Unit page
// (topic list) -> Topic page, dual gating (payment + quiz),
// highlighted Qur'an/Hadith verse blocks, wf-style card system.
//
// Deliberately named and routed separately from the existing Seerah
// discipline in this app's Q&A-style Disciplines feature -- this
// uses its own DB tables (seerahclass_progress /
// seerahclass_purchases / seerahclass_quiz_attempts) and its own
// Paystack product name ('seerahclass'), so it cannot collide with
// that existing feature.
//
// Two independent locks per unit: payment (Unit 1 free, others
// N500 each or N5,000 for full access -- same pricing as the other
// three classes) and a quiz gate (must score >=25/30 on the
// previous unit's quiz to open this one).

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient'; // adjust path to match your existing client import
import { SEERAHCLASS_UNITS, SEERAHCLASS_TOPICS } from '../data/seerahClass';
import { SEERAHCLASS_UNIT_QUIZZES, SEERAHCLASS_PASS_THRESHOLD } from '../data/seerahClassQuizzes';
import './SeerahClass.css';

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

export default function SeerahClass({ user }) {
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
    const { data, error } = await supabase.from('seerahclass_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('seerahclass_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('seerahclass_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
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

  const totalTopics = SEERAHCLASS_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = SEERAHCLASS_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = SEERAHCLASS_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(SEERAHCLASS_UNIT_QUIZZES[prevUnit.id]) && SEERAHCLASS_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPaywallUnitId(unit.id); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = SEERAHCLASS_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(SEERAHCLASS_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of SEERAHCLASS_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    setSelectedUnitId(SEERAHCLASS_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('seerahclass_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('seerahclass_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    if (!user) return;
    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'seerahclass', plan } });
      if (error) throw error;
      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;
      if (authUrl) window.location.href = authUrl;
    } catch (err) {
      console.error('Seerah Class purchase failed to initialize', err);
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
    const questions = SEERAHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= SEERAHCLASS_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('seerahclass_quiz_attempts').insert({
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
    const unit = SEERAHCLASS_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="sc-sheet-overlay" onClick={() => setPaywallUnitId(null)}>
        <div className="sc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="sc-sheet-header">
            <span className="sc-sheet-title">Unlock "{unit.title}"</span>
            <button className="sc-sheet-close" onClick={() => setPaywallUnitId(null)}>×</button>
          </div>
          <p className="sc-sheet-text">This unit is part of the paid Seerah Class content.</p>
          <div className="sc-sheet-options">
            <button className="sc-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="sc-sheet-option-title">Unlock This Unit</span>
              <span className="sc-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="sc-sheet-option sc-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="sc-sheet-option-tag">Best Value</span>
              <span className="sc-sheet-option-title">Unlock Full Course</span>
              <span className="sc-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = SEERAHCLASS_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = SEERAHCLASS_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="sc-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="sc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="sc-sheet-header">
            <span className="sc-sheet-title">Quiz Required</span>
            <button className="sc-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="sc-sheet-text">
            Score at least {SEERAHCLASS_PASS_THRESHOLD}/{(SEERAHCLASS_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="sc-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="sc-page">
        <div className="sc-loading"><div className="sc-spinner" /></div>
      </div>
    );
  }

  // -- Quiz page --------------------------------------------------
  if (quizUnitId) {
    const unit = SEERAHCLASS_UNITS.find((u) => u.id === quizUnitId);
    const questions = SEERAHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = SEERAHCLASS_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="sc-page">
        <button className="sc-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="sc-detail-header">
          <div className="sc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="sc-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="sc-detail-sub">{unit.title}: score {SEERAHCLASS_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`sc-status-card ${quizResult.passed ? '' : 'sc-status-card--fail'}`}>
            <div className="sc-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="sc-status-note">
              {quizResult.passed ? 'Passed: next unit unlocked' : `Not yet, you need at least ${SEERAHCLASS_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="sc-quiz-q">
              <div className="sc-quiz-q-text"><span className="sc-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="sc-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'sc-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' sc-quiz-option--correct';
                    else if (oi === selected) cls += ' sc-quiz-option--wrong';
                  } else if (oi === selected) cls += ' sc-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="sc-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="sc-actions-row">
          {!quizSubmitted ? (
            <button className="sc-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="sc-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="sc-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // -- Topic page ---------------------------------------------------
  if (activeTopicId) {
    const topic = SEERAHCLASS_TOPICS[activeTopicId];
    const unit = SEERAHCLASS_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="sc-page">
        <button className="sc-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="sc-detail-header">
          <div className="sc-detail-icon">{isComplete ? <span className="sc-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="sc-detail-title">{topic.title}</div>
            <div className="sc-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="sc-section">
              <div className="sc-section-title">{section.heading}</div>
              <div className="sc-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
              {Array.isArray(section.verses) && section.verses.map((v, vi) => (
                <div key={vi} className={`sc-verse sc-verse--${v.type}`}>
                  <span className="sc-verse-tag">{v.type === 'quran' ? 'Qur\'an' : 'Hadith'}</span>
                  <p className="sc-verse-arabic" lang="ar" dir="rtl">{v.arabic}</p>
                  <p className="sc-verse-english">{v.english}</p>
                  <p className="sc-verse-source">{v.source}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="sc-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="sc-actions-row">
          <button className={isComplete ? 'sc-btn-secondary' : 'sc-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="sc-nav-row">
          <button className="sc-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="sc-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // -- Unit page (topic list) ----------------------------------------
  if (selectedUnitId) {
    const unit = SEERAHCLASS_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = SEERAHCLASS_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(SEERAHCLASS_UNIT_QUIZZES[unit.id]) && SEERAHCLASS_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="sc-page">
        <button className="sc-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="sc-detail-header">
          <div className="sc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="sc-detail-title">{unit.title}</div>
            <div className="sc-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="sc-cards">
          {unit.topics.map((topicId) => {
            const topic = SEERAHCLASS_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`sc-card ${done ? 'sc-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`sc-card-icon ${done ? 'sc-card-icon--done' : ''}`}>
                  {done ? <span className="sc-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="sc-card-text">
                  <span className="sc-card-label">{topic.title}</span>
                  <span className="sc-card-desc">{topic.summary}</span>
                </span>
                <span className="sc-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="sc-card" onClick={() => startQuiz(unit.id)}>
              <span className={`sc-card-icon ${quizPassed ? 'sc-card-icon--done' : ''}`}>
                {quizPassed ? <span className="sc-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="sc-card-text">
                <span className="sc-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="sc-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(SEERAHCLASS_UNIT_QUIZZES[unit.id] || []).length} questions, score ${SEERAHCLASS_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="sc-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // -- Course overview -------------------------------------------------
  return (
    <div className="sc-page">
      <div className="sc-hero">
        <div className="sc-hero-title">Seerah Class</div>
        <div className="sc-hero-sub">A chronological course on the life of the Prophet Muhammad ﷺ.</div>
        <div className="sc-progress-track"><div className="sc-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="sc-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="sc-hero-actions">
          <button className="sc-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button className="sc-btn-secondary" disabled={purchasing} onClick={() => startPurchase('full')}>
              Unlock Full Course: ₦{FULL_PRICE_NGN.toLocaleString()}
            </button>
          )}
        </div>
      </div>

      <div className="sc-cards">
        {SEERAHCLASS_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`sc-card ${locked ? 'sc-card--locked' : ''} ${allDone ? 'sc-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`sc-card-icon ${locked ? 'sc-card-icon--locked' : ''} ${allDone ? 'sc-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="sc-icon"><LockIcon /></span> : allDone ? <span className="sc-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="sc-card-text">
                <span className="sc-card-meta">Unit {unitIdx + 1}</span>
                <span className="sc-card-label">{unit.title}</span>
                <span className="sc-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics, purchase to unlock` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="sc-card-side">
                {paymentLocked ? (
                  <span className="sc-card-badge sc-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="sc-card-badge sc-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="sc-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="sc-card-arrow"><ChevronIcon /></span>
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