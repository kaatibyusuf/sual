// src/pages/Adab.jsx
//
// Adab Class — sequential course on Islamic manners and etiquette.
// Navigation: Course overview -> Unit page (topic list) -> Topic
// page, all using the same card system as Women's Fiqh, for visual
// consistency with the rest of the app.
//
// Two independent locks per unit: payment (Unit 1 free, others
// ₦500 each or ₦5,000 for full access) and a quiz gate (must score
// >=25/30 on the previous unit's quiz to open this one).

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js'; // adjust path to match your existing client import
import { ADAB_UNITS, ADAB_TOPICS } from '../data/adab';
import { ADAB_UNIT_QUIZZES, ADAB_PASS_THRESHOLD } from '../data/adabQuizzes';
import './Adab.css';

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

export default function Adab({ user }) {
  const [loading, setLoading] = useState(true);
  const [completedIds, setCompletedIds] = useState(new Set());
  const [hasFullAccess, setHasFullAccess] = useState(false);
  const [unlockedUnitIds, setUnlockedUnitIds] = useState(new Set());
  const [quizPassedUnitIds, setQuizPassedUnitIds] = useState(new Set());

  // Drill-down navigation state
  const [selectedUnitId, setSelectedUnitId] = useState(null); // unit page
  const [activeTopicId, setActiveTopicId] = useState(null);   // topic page
  const [quizUnitId, setQuizUnitId] = useState(null);          // quiz page

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
    const { data, error } = await supabase.from('adab_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('adab_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('adab_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
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

  const totalTopics = ADAB_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = ADAB_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = ADAB_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(ADAB_UNIT_QUIZZES[prevUnit.id]) && ADAB_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPaywallUnitId(unit.id); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = ADAB_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(ADAB_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of ADAB_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    // everything visible is complete — just open the first unit
    setSelectedUnitId(ADAB_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('adab_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('adab_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    if (!user) return;
    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'adab', plan } });
      if (error) throw error;
      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;
      if (authUrl) window.location.href = authUrl;
    } catch (err) {
      console.error('Adab purchase failed to initialize', err);
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
    const questions = ADAB_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= ADAB_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('adab_quiz_attempts').insert({
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

  // ── Bottom sheets ──────────────────────────────────────────
  const renderPaywallSheet = () => {
    if (!paywallUnitId) return null;
    const unit = ADAB_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="adab-sheet-overlay" onClick={() => setPaywallUnitId(null)}>
        <div className="adab-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="adab-sheet-header">
            <span className="adab-sheet-title">Unlock "{unit.title}"</span>
            <button className="adab-sheet-close" onClick={() => setPaywallUnitId(null)}>×</button>
          </div>
          <p className="adab-sheet-text">This unit is part of the paid Adab Class content.</p>
          <div className="adab-sheet-options">
            <button className="adab-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="adab-sheet-option-title">Unlock This Unit</span>
              <span className="adab-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="adab-sheet-option adab-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="adab-sheet-option-tag">Best Value</span>
              <span className="adab-sheet-option-title">Unlock Full Course</span>
              <span className="adab-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = ADAB_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = ADAB_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="adab-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="adab-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="adab-sheet-header">
            <span className="adab-sheet-title">Quiz Required</span>
            <button className="adab-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="adab-sheet-text">
            Score at least {ADAB_PASS_THRESHOLD}/{(ADAB_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="adab-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="adab-page">
        <div className="adab-loading"><div className="adab-spinner" /></div>
      </div>
    );
  }

  // ── Quiz page ───────────────────────────────────────────────
  if (quizUnitId) {
    const unit = ADAB_UNITS.find((u) => u.id === quizUnitId);
    const questions = ADAB_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = ADAB_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="adab-page">
        <button className="adab-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="adab-detail-header">
          <div className="adab-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="adab-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="adab-detail-sub">{unit.title} — score {ADAB_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`adab-status-card ${quizResult.passed ? '' : 'adab-status-card--fail'}`}>
            <div className="adab-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="adab-status-note">
              {quizResult.passed ? 'Passed — next unit unlocked' : `Not yet — you need at least ${ADAB_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="adab-quiz-q">
              <div className="adab-quiz-q-text"><span className="adab-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="adab-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'adab-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' adab-quiz-option--correct';
                    else if (oi === selected) cls += ' adab-quiz-option--wrong';
                  } else if (oi === selected) cls += ' adab-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="adab-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="adab-actions-row">
          {!quizSubmitted ? (
            <button className="adab-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="adab-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="adab-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // ── Topic page ──────────────────────────────────────────────
  if (activeTopicId) {
    const topic = ADAB_TOPICS[activeTopicId];
    const unit = ADAB_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="adab-page">
        <button className="adab-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="adab-detail-header">
          <div className={`adab-detail-icon`}>{isComplete ? <span className="adab-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="adab-detail-title">{topic.title}</div>
            <div className="adab-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="adab-section">
              <div className="adab-section-title">{section.heading}</div>
              <div className="adab-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
            </div>
          ))
        ) : (
          <div className="adab-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="adab-actions-row">
          <button className={isComplete ? 'adab-btn-secondary' : 'adab-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="adab-nav-row">
          <button className="adab-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="adab-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // ── Unit page (topic list) ──────────────────────────────────
  if (selectedUnitId) {
    const unit = ADAB_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = ADAB_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(ADAB_UNIT_QUIZZES[unit.id]) && ADAB_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="adab-page">
        <button className="adab-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="adab-detail-header">
          <div className="adab-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="adab-detail-title">{unit.title}</div>
            <div className="adab-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="adab-cards">
          {unit.topics.map((topicId) => {
            const topic = ADAB_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`adab-card ${done ? 'adab-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`adab-card-icon ${done ? 'adab-card-icon--done' : ''}`}>
                  {done ? <span className="adab-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="adab-card-text">
                  <span className="adab-card-label">{topic.title}</span>
                  <span className="adab-card-desc">{topic.summary}</span>
                </span>
                <span className="adab-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="adab-card" onClick={() => startQuiz(unit.id)}>
              <span className={`adab-card-icon ${quizPassed ? 'adab-card-icon--done' : ''}`}>
                {quizPassed ? <span className="adab-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="adab-card-text">
                <span className="adab-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="adab-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(ADAB_UNIT_QUIZZES[unit.id] || []).length} questions — score ${ADAB_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="adab-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Course overview ─────────────────────────────────────────
  return (
    <div className="adab-page">
      <div className="adab-hero">
        <div className="adab-hero-title">Adab Class</div>
        <div className="adab-hero-sub">A sequential course on Islamic manners and etiquette.</div>
        <div className="adab-progress-track"><div className="adab-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="adab-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="adab-hero-actions">
          <button className="adab-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button className="adab-btn-secondary" disabled={purchasing} onClick={() => startPurchase('full')}>
              Unlock Full Course — ₦{FULL_PRICE_NGN.toLocaleString()}
            </button>
          )}
        </div>
      </div>

      <div className="adab-cards">
        {ADAB_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`adab-card ${locked ? 'adab-card--locked' : ''} ${allDone ? 'adab-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`adab-card-icon ${locked ? 'adab-card-icon--locked' : ''} ${allDone ? 'adab-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="adab-icon"><LockIcon /></span> : allDone ? <span className="adab-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="adab-card-text">
                <span className="adab-card-meta">Unit {unitIdx + 1}</span>
                <span className="adab-card-label">{unit.title}</span>
                <span className="adab-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="adab-card-side">
                {paymentLocked ? (
                  <span className="adab-card-badge adab-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="adab-card-badge adab-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="adab-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="adab-card-arrow"><ChevronIcon /></span>
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