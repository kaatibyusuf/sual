// src/pages/Tawheed.jsx
//
// Tawheed Class — sequential course on Islamic monotheism, built on
// the exact same architecture as Adab Class: Course overview -> Unit
// page (topic list) -> Topic page, dual gating (payment + quiz),
// highlighted Qur'an/Hadith verse blocks, wf-style card system.
//
// Two independent locks per unit: payment (Unit 1 free, others
// ₦500 each or ₦5,000 for full access — same pricing as Adab Class)
// and a quiz gate (must score >=25/30 on the previous unit's quiz to
// open this one).
//
// FIX (payment button doing nothing): startPurchase previously
// exited silently if `user` was missing, and swallowed errors with
// only a console.error. Both cases left the user staring at a
// button that appeared to do nothing. This version surfaces a
// visible error message in the paywall sheet for both cases, and
// logs enough detail to debug the edge function response shape.

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js'; // adjust path to match your existing client import
import { TAWHEED_UNITS, TAWHEED_TOPICS } from '../data/tawheed';
import { TAWHEED_UNIT_QUIZZES, TAWHEED_PASS_THRESHOLD } from '../data/tawheedQuizzes';
import CourseCertificate from '../components/CourseCertificate.jsx';
import './Tawheed.css';

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

export default function Tawheed({ user }) {
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
  const [purchaseError, setPurchaseError] = useState(null);
  const [saving, setSaving] = useState(false);

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [savingQuiz, setSavingQuiz] = useState(false);

  const fetchProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase.from('tawheed_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('tawheed_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('tawheed_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
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

  const totalTopics = TAWHEED_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = TAWHEED_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = TAWHEED_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(TAWHEED_UNIT_QUIZZES[prevUnit.id]) && TAWHEED_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPurchaseError(null); setPaywallUnitId(unit.id); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = TAWHEED_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(TAWHEED_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of TAWHEED_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    setSelectedUnitId(TAWHEED_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('tawheed_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('tawheed_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    setPurchaseError(null);

    if (!user) {
      console.warn('[Tawheed] startPurchase blocked: no user is logged in.');
      setPurchaseError('You need to be signed in to purchase. Please log in and try again.');
      return;
    }

    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', {
        body: { product: 'tawheed', plan },
      });

      if (error) {
        console.error('[Tawheed] initialize-payment invoke error:', error);
        throw new Error(error.message || 'Failed to reach the payment server.');
      }

      console.log('[Tawheed] initialize-payment response:', data);

      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;

      if (!authUrl) {
        console.error('[Tawheed] No authorization_url found in response:', data);
        throw new Error('Payment server did not return a checkout link. Please try again shortly.');
      }

      window.location.href = authUrl;
    } catch (err) {
      console.error('[Tawheed] purchase failed to initialize:', err);
      setPurchaseError(err.message || 'Something went wrong starting the payment. Please try again.');
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
    const questions = TAWHEED_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= TAWHEED_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('tawheed_quiz_attempts').insert({
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
    const unit = TAWHEED_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="tw-sheet-overlay" onClick={() => { setPaywallUnitId(null); setPurchaseError(null); }}>
        <div className="tw-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="tw-sheet-header">
            <span className="tw-sheet-title">Unlock "{unit.title}"</span>
            <button className="tw-sheet-close" onClick={() => { setPaywallUnitId(null); setPurchaseError(null); }}>×</button>
          </div>
          <p className="tw-sheet-text">This unit is part of the paid Tawheed Class content.</p>

          {purchaseError && (
            <div className="tw-sheet-error" role="alert">
              {purchaseError}
            </div>
          )}

          <div className="tw-sheet-options">
            <button className="tw-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="tw-sheet-option-title">{purchasing ? 'Starting checkout…' : 'Unlock This Unit'}</span>
              <span className="tw-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="tw-sheet-option tw-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="tw-sheet-option-tag">Best Value</span>
              <span className="tw-sheet-option-title">{purchasing ? 'Starting checkout…' : 'Unlock Full Course'}</span>
              <span className="tw-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = TAWHEED_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = TAWHEED_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="tw-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="tw-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="tw-sheet-header">
            <span className="tw-sheet-title">Quiz Required</span>
            <button className="tw-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="tw-sheet-text">
            Score at least {TAWHEED_PASS_THRESHOLD}/{(TAWHEED_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="tw-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="tw-page">
        <div className="tw-loading"><div className="tw-spinner" /></div>
      </div>
    );
  }

  // ── Quiz page ───────────────────────────────────────────────
  if (quizUnitId) {
    const unit = TAWHEED_UNITS.find((u) => u.id === quizUnitId);
    const questions = TAWHEED_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = TAWHEED_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="tw-page">
        <button className="tw-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="tw-detail-header">
          <div className="tw-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="tw-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="tw-detail-sub">{unit.title} — score {TAWHEED_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`tw-status-card ${quizResult.passed ? '' : 'tw-status-card--fail'}`}>
            <div className="tw-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="tw-status-note">
              {quizResult.passed ? 'Passed — next unit unlocked' : `Not yet — you need at least ${TAWHEED_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="tw-quiz-q">
              <div className="tw-quiz-q-text"><span className="tw-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="tw-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'tw-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' tw-quiz-option--correct';
                    else if (oi === selected) cls += ' tw-quiz-option--wrong';
                  } else if (oi === selected) cls += ' tw-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="tw-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="tw-actions-row">
          {!quizSubmitted ? (
            <button className="tw-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="tw-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="tw-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // ── Topic page ──────────────────────────────────────────────
  if (activeTopicId) {
    const topic = TAWHEED_TOPICS[activeTopicId];
    const unit = TAWHEED_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="tw-page">
        <button className="tw-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="tw-detail-header">
          <div className="tw-detail-icon">{isComplete ? <span className="tw-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="tw-detail-title">{topic.title}</div>
            <div className="tw-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="tw-section">
              <div className="tw-section-title">{section.heading}</div>
              <div className="tw-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
              {Array.isArray(section.verses) && section.verses.map((v, vi) => (
                <div key={vi} className={`tw-verse tw-verse--${v.type}`}>
                  <span className="tw-verse-tag">{v.type === 'quran' ? 'Qur\'an' : 'Hadith'}</span>
                  <p className="tw-verse-arabic" lang="ar" dir="rtl">{v.arabic}</p>
                  <p className="tw-verse-english">{v.english}</p>
                  <p className="tw-verse-source">{v.source}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="tw-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="tw-actions-row">
          <button className={isComplete ? 'tw-btn-secondary' : 'tw-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="tw-nav-row">
          <button className="tw-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="tw-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // ── Unit page (topic list) ──────────────────────────────────
  if (selectedUnitId) {
    const unit = TAWHEED_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = TAWHEED_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(TAWHEED_UNIT_QUIZZES[unit.id]) && TAWHEED_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="tw-page">
        <button className="tw-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="tw-detail-header">
          <div className="tw-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="tw-detail-title">{unit.title}</div>
            <div className="tw-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="tw-cards">
          {unit.topics.map((topicId) => {
            const topic = TAWHEED_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`tw-card ${done ? 'tw-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`tw-card-icon ${done ? 'tw-card-icon--done' : ''}`}>
                  {done ? <span className="tw-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="tw-card-text">
                  <span className="tw-card-label">{topic.title}</span>
                  <span className="tw-card-desc">{topic.summary}</span>
                </span>
                <span className="tw-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="tw-card" onClick={() => startQuiz(unit.id)}>
              <span className={`tw-card-icon ${quizPassed ? 'tw-card-icon--done' : ''}`}>
                {quizPassed ? <span className="tw-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="tw-card-text">
                <span className="tw-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="tw-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(TAWHEED_UNIT_QUIZZES[unit.id] || []).length} questions — score ${TAWHEED_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="tw-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Course overview ─────────────────────────────────────────
  return (
    <div className="tw-page">
      <div className="tw-hero">
        <div className="tw-hero-title">Tawheed Class</div>
        <div className="tw-hero-sub">A sequential course on Islamic monotheism, culminating in a study of Usul Thalaathah.</div>
        <div className="tw-progress-track"><div className="tw-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="tw-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="tw-hero-actions">
          <button className="tw-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button
              className="tw-btn-secondary"
              disabled={purchasing}
              onClick={() => startPurchase('full')}
            >
              {purchasing ? 'Starting checkout…' : `Unlock Full Course — ₦${FULL_PRICE_NGN.toLocaleString()}`}
            </button>
          )}
        </div>
        {purchaseError && !paywallUnitId && (
          <div className="tw-sheet-error" role="alert" style={{ marginTop: '12px' }}>
            {purchaseError}
          </div>
        )}
      </div>

      <CourseCertificate
        courseId="tawheed"
        quizAttemptsTable="tawheed_quiz_attempts"
        units={TAWHEED_UNITS}
        courseLabel="Tawheed Class"
        courseArabic="تَوْحِيد"
        courseStats="" // TODO: fill in once you confirm the real unit/topic/quiz counts
      />

      <div className="tw-cards">
        {TAWHEED_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`tw-card ${locked ? 'tw-card--locked' : ''} ${allDone ? 'tw-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`tw-card-icon ${locked ? 'tw-card-icon--locked' : ''} ${allDone ? 'tw-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="tw-icon"><LockIcon /></span> : allDone ? <span className="tw-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="tw-card-text">
                <span className="tw-card-meta">Unit {unitIdx + 1}</span>
                <span className="tw-card-label">{unit.title}</span>
                <span className="tw-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics — purchase to unlock` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="tw-card-side">
                {paymentLocked ? (
                  <span className="tw-card-badge tw-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="tw-card-badge tw-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="tw-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="tw-card-arrow"><ChevronIcon /></span>
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