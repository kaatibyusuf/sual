// src/pages/HadeethClass.jsx
//
// Hadeeth Class -- a comprehensive course on Mustalah al-Hadith (the
// science of hadith authentication and classification), built on the
// exact same architecture as Adab Class, Tawheed Class, Tajweed
// Class, Seerah Class, and Arabiyyah Class: Course overview -> Unit
// page (topic list) -> Topic page, dual gating (payment + quiz),
// highlighted Qur'an/Hadith verse blocks, card-based UI.
//
// This course's verse blocks support a third type beyond 'quran' and
// 'hadith': type 'qaidah', used for formally stated classical rules
// (in Arabic, with transliteration and English), the same extension
// originally built for Arabiyyah Class, since Mustalah al-Hadith is
// just as terminology-dense a subject and benefits from the same
// distinct, findable treatment for stated rules versus quoted
// primary sources. Qaidah blocks render with their own
// transliteration line and distinct visual style (see
// .hdc-verse--qaidah in HadeethClass.css) so a stated rule is never
// confused with an actual quoted hadith.
//
// Deliberately named and routed separately from any existing
// hadith-related content elsewhere in this app -- this uses its own
// DB tables (hadeethclass_progress / hadeethclass_purchases /
// hadeethclass_quiz_attempts) and its own Paystack product name
// ('hadeethclass'), so it cannot collide with anything else.
//
// Two independent locks per unit: payment (Unit 1 free, others
// N500 each or N5,000 for full access -- same pricing as the other
// five classes) and a quiz gate (must score >=25/30 on the
// previous unit's quiz to open this one).

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js'; // adjust path to match your existing client import
import { HADEETHCLASS_UNITS, HADEETHCLASS_TOPICS } from '../data/hadeethClass';
import { HADEETHCLASS_UNIT_QUIZZES, HADEETHCLASS_PASS_THRESHOLD } from '../data/hadeethClassQuizzes';
import './HadeethClass.css';

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

export default function HadeethClass({ user }) {
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
    const { data, error } = await supabase.from('hadeethclass_progress').select('topic_id').eq('user_id', user.id);
    if (!error && data) setCompletedIds(new Set(data.map((r) => r.topic_id)));
  }, [user]);

  const fetchPurchases = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('hadeethclass_purchases').select('unit_id').eq('user_id', user.id).eq('status', 'success');
    if (!error && data) {
      setHasFullAccess(data.some((r) => r.unit_id === null));
      setUnlockedUnitIds(new Set(data.filter((r) => r.unit_id !== null).map((r) => r.unit_id)));
    }
  }, [user]);

  const fetchQuizProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('hadeethclass_quiz_attempts').select('unit_id, passed').eq('user_id', user.id).eq('passed', true);
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

  const totalTopics = HADEETHCLASS_UNITS.reduce((n, u) => n + u.topics.length, 0);
  const completedCount = completedIds.size;
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const isUnitPaymentLocked = (unitId) =>
    !FREE_UNIT_IDS.includes(unitId) && !hasFullAccess && !unlockedUnitIds.has(unitId);

  const isUnitQuizLocked = (unitId) => {
    const idx = HADEETHCLASS_UNITS.findIndex((u) => u.id === unitId);
    if (idx <= 0) return false;
    const prevUnit = HADEETHCLASS_UNITS[idx - 1];
    const prevHasQuiz = Array.isArray(HADEETHCLASS_UNIT_QUIZZES[prevUnit.id]) && HADEETHCLASS_UNIT_QUIZZES[prevUnit.id].length > 0;
    if (!prevHasQuiz) return false;
    return !quizPassedUnitIds.has(prevUnit.id);
  };

  const isUnitLocked = (unitId) => isUnitPaymentLocked(unitId) || isUnitQuizLocked(unitId);

  const handleUnitClick = (unit) => {
    if (isUnitPaymentLocked(unit.id)) { setPaywallUnitId(unit.id); setPurchaseError(null); return; }
    if (isUnitQuizLocked(unit.id)) {
      const idx = HADEETHCLASS_UNITS.findIndex((u) => u.id === unit.id);
      setQuizGateUnitId(HADEETHCLASS_UNITS[idx - 1].id);
      return;
    }
    setSelectedUnitId(unit.id);
  };

  const handleResume = () => {
    for (const unit of HADEETHCLASS_UNITS) {
      if (isUnitLocked(unit.id)) continue;
      const nextTopic = unit.topics.find((t) => !completedIds.has(t));
      if (nextTopic) { setSelectedUnitId(unit.id); setActiveTopicId(nextTopic); return; }
    }
    setSelectedUnitId(HADEETHCLASS_UNITS[0].id);
  };

  const toggleComplete = async (topicId) => {
    if (!user) return;
    setSaving(true);
    const isComplete = completedIds.has(topicId);
    if (isComplete) {
      await supabase.from('hadeethclass_progress').delete().eq('user_id', user.id).eq('topic_id', topicId);
      setCompletedIds((prev) => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from('hadeethclass_progress').upsert({ user_id: user.id, topic_id: topicId }, { onConflict: 'user_id,topic_id' });
      setCompletedIds((prev) => new Set(prev).add(topicId));
    }
    setSaving(false);
  };

  const startPurchase = async (plan) => {
    if (!user) return;
    setPurchasing(true);
    setPurchaseError(null);
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'hadeethclass', plan } });
      if (error) throw error;
      const authUrl = data?.data?.authorization_url ?? data?.authorization_url;
      if (authUrl) {
        window.location.href = authUrl;
      } else {
        // Function returned 200 but no authorization_url — surface
        // whatever error message it sent back instead of failing silently.
        throw new Error(data?.error || 'No checkout link was returned. Please try again.');
      }
    } catch (err) {
      console.error('Hadeeth Class purchase failed to initialize', err);
      setPurchaseError(
        err?.message || err?.error_description || 'Could not start payment. Please try again in a moment.'
      );
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
    const questions = HADEETHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    let score = 0;
    questions.forEach((q) => { if (quizAnswers[q.id] === q.correctIndex) score += 1; });
    const passed = score >= HADEETHCLASS_PASS_THRESHOLD;
    setSavingQuiz(true);
    await supabase.from('hadeethclass_quiz_attempts').insert({
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
    const unit = HADEETHCLASS_UNITS.find((u) => u.id === paywallUnitId);
    if (!unit) return null;
    return (
      <div className="hdc-sheet-overlay" onClick={() => { setPaywallUnitId(null); setPurchaseError(null); }}>
        <div className="hdc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="hdc-sheet-header">
            <span className="hdc-sheet-title">Unlock "{unit.title}"</span>
            <button className="hdc-sheet-close" onClick={() => { setPaywallUnitId(null); setPurchaseError(null); }}>×</button>
          </div>
          <p className="hdc-sheet-text">This unit is part of the paid Hadeeth Class content.</p>
          {purchaseError && <div className="hdc-sheet-error">{purchaseError}</div>}
          <div className="hdc-sheet-options">
            <button className="hdc-sheet-option" disabled={purchasing} onClick={() => startPurchase(unit.id)}>
              <span className="hdc-sheet-option-title">Unlock This Unit</span>
              <span className="hdc-sheet-option-price">₦{UNIT_PRICE_NGN.toLocaleString()}</span>
            </button>
            <button className="hdc-sheet-option hdc-sheet-option--full" disabled={purchasing} onClick={() => startPurchase('full')}>
              <span className="hdc-sheet-option-tag">Best Value</span>
              <span className="hdc-sheet-option-title">Unlock Full Course</span>
              <span className="hdc-sheet-option-price">₦{FULL_PRICE_NGN.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizGateSheet = () => {
    if (!quizGateUnitId) return null;
    const unit = HADEETHCLASS_UNITS.find((u) => u.id === quizGateUnitId);
    if (!unit) return null;
    const unitIdx = HADEETHCLASS_UNITS.findIndex((u) => u.id === quizGateUnitId);
    return (
      <div className="hdc-sheet-overlay" onClick={() => setQuizGateUnitId(null)}>
        <div className="hdc-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="hdc-sheet-header">
            <span className="hdc-sheet-title">Quiz Required</span>
            <button className="hdc-sheet-close" onClick={() => setQuizGateUnitId(null)}>×</button>
          </div>
          <p className="hdc-sheet-text">
            Score at least {HADEETHCLASS_PASS_THRESHOLD}/{(HADEETHCLASS_UNIT_QUIZZES[quizGateUnitId] || []).length} on Unit {unitIdx + 1}: {unit.title} to unlock the next unit.
          </p>
          <button className="hdc-btn-primary" style={{ width: '100%' }} onClick={() => { setQuizGateUnitId(null); startQuiz(quizGateUnitId); }}>
            Take This Unit's Quiz
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="hdc-page">
        <div className="hdc-loading"><div className="hdc-spinner" /></div>
      </div>
    );
  }

  // -- Quiz page --------------------------------------------------
  if (quizUnitId) {
    const unit = HADEETHCLASS_UNITS.find((u) => u.id === quizUnitId);
    const questions = HADEETHCLASS_UNIT_QUIZZES[quizUnitId] || [];
    const unitIdx = HADEETHCLASS_UNITS.findIndex((u) => u.id === quizUnitId);
    const answeredCount = Object.keys(quizAnswers).length;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="hdc-page">
        <button className="hdc-back" onClick={exitQuiz}>← Back to Course</button>

        <div className="hdc-detail-header">
          <div className="hdc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="hdc-detail-title">Unit {unitIdx + 1} Quiz</div>
            <div className="hdc-detail-sub">{unit.title}: score {HADEETHCLASS_PASS_THRESHOLD}/{questions.length} to pass</div>
          </div>
        </div>

        {quizSubmitted && quizResult && (
          <div className={`hdc-status-card ${quizResult.passed ? '' : 'hdc-status-card--fail'}`}>
            <div className="hdc-status-value">{quizResult.score} / {quizResult.total}</div>
            <div className="hdc-status-note">
              {quizResult.passed ? 'Passed: next unit unlocked' : `Not yet, you need at least ${HADEETHCLASS_PASS_THRESHOLD} correct`}
            </div>
          </div>
        )}

        {questions.map((q, qi) => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className="hdc-quiz-q">
              <div className="hdc-quiz-q-text"><span className="hdc-quiz-num">{qi + 1}.</span> {q.question}</div>
              <div className="hdc-quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = 'hdc-quiz-option';
                  if (quizSubmitted) {
                    if (oi === q.correctIndex) cls += ' hdc-quiz-option--correct';
                    else if (oi === selected) cls += ' hdc-quiz-option--wrong';
                  } else if (oi === selected) cls += ' hdc-quiz-option--selected';
                  return (
                    <button key={oi} className={cls} disabled={quizSubmitted} onClick={() => selectAnswer(q.id, oi)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && <div className="hdc-quiz-explanation">{q.explanation}</div>}
            </div>
          );
        })}

        <div className="hdc-actions-row">
          {!quizSubmitted ? (
            <button className="hdc-btn-primary" disabled={!allAnswered || savingQuiz} onClick={submitQuiz}>
              {allAnswered ? 'Submit Quiz' : `Answer all questions (${answeredCount}/${questions.length})`}
            </button>
          ) : quizResult?.passed ? (
            <button className="hdc-btn-primary" onClick={exitQuiz}>Continue to Course</button>
          ) : (
            <button className="hdc-btn-secondary" onClick={() => startQuiz(quizUnitId)}>Retake Quiz</button>
          )}
        </div>
      </div>
    );
  }

  // -- Topic page ---------------------------------------------------
  if (activeTopicId) {
    const topic = HADEETHCLASS_TOPICS[activeTopicId];
    const unit = HADEETHCLASS_UNITS.find((u) => u.id === topic.unit);
    const topicIdx = unit.topics.indexOf(activeTopicId);
    const isFirst = topicIdx === 0;
    const isLast = topicIdx === unit.topics.length - 1;
    const isComplete = completedIds.has(activeTopicId);
    const hasContent = Array.isArray(topic.content) && topic.content.length > 0;

    return (
      <div className="hdc-page">
        <button className="hdc-back" onClick={() => setActiveTopicId(null)}>← Back to Unit</button>

        <div className="hdc-detail-header">
          <div className="hdc-detail-icon">{isComplete ? <span className="hdc-icon"><CheckIcon /></span> : topicIdx + 1}</div>
          <div>
            <div className="hdc-detail-title">{topic.title}</div>
            <div className="hdc-detail-sub">{topic.summary}</div>
          </div>
        </div>

        {hasContent ? (
          topic.content.map((section, i) => (
            <div key={i} className="hdc-section">
              <div className="hdc-section-title">{section.heading}</div>
              <div className="hdc-section-body">
                {section.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
              {Array.isArray(section.verses) && section.verses.map((v, vi) => (
                <div key={vi} className={`hdc-verse hdc-verse--${v.type}`}>
                  <span className="hdc-verse-tag">
                    {v.type === 'quran' ? 'Qur\'an' : v.type === 'hadith' ? 'Hadith' : 'Qaidah (Rule)'}
                  </span>
                  <p className="hdc-verse-arabic" lang="ar" dir="rtl">{v.arabic}</p>
                  {v.type === 'qaidah' && v.transliteration && (
                    <p className="hdc-verse-translit">{v.transliteration}</p>
                  )}
                  <p className="hdc-verse-english">{v.english}</p>
                  <p className="hdc-verse-source">{v.source}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="hdc-empty">Full lesson content for this topic is coming soon.</div>
        )}

        <div className="hdc-actions-row">
          <button className={isComplete ? 'hdc-btn-secondary' : 'hdc-btn-primary'} onClick={() => toggleComplete(activeTopicId)} disabled={saving}>
            {isComplete ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="hdc-nav-row">
          <button className="hdc-nav-btn" disabled={isFirst} onClick={() => setActiveTopicId(unit.topics[topicIdx - 1])}>← Previous</button>
          <button className="hdc-nav-btn" disabled={isLast} onClick={() => setActiveTopicId(unit.topics[topicIdx + 1])}>Next →</button>
        </div>

        {renderPaywallSheet()}
        {renderQuizGateSheet()}
      </div>
    );
  }

  // -- Unit page (topic list) ----------------------------------------
  if (selectedUnitId) {
    const unit = HADEETHCLASS_UNITS.find((u) => u.id === selectedUnitId);
    const unitIdx = HADEETHCLASS_UNITS.findIndex((u) => u.id === selectedUnitId);
    const hasQuiz = Array.isArray(HADEETHCLASS_UNIT_QUIZZES[unit.id]) && HADEETHCLASS_UNIT_QUIZZES[unit.id].length > 0;
    const quizPassed = quizPassedUnitIds.has(unit.id);
    const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;

    return (
      <div className="hdc-page">
        <button className="hdc-back" onClick={() => setSelectedUnitId(null)}>← Back to Course</button>

        <div className="hdc-detail-header">
          <div className="hdc-detail-icon">{unitIdx + 1}</div>
          <div>
            <div className="hdc-detail-title">{unit.title}</div>
            <div className="hdc-detail-sub">{unitCompleted}/{unit.topics.length} topics complete</div>
          </div>
        </div>

        <div className="hdc-cards">
          {unit.topics.map((topicId) => {
            const topic = HADEETHCLASS_TOPICS[topicId];
            if (!topic) return null;
            const done = completedIds.has(topicId);
            return (
              <button key={topicId} className={`hdc-card ${done ? 'hdc-card--done' : ''}`} onClick={() => setActiveTopicId(topicId)}>
                <span className={`hdc-card-icon ${done ? 'hdc-card-icon--done' : ''}`}>
                  {done ? <span className="hdc-icon"><CheckIcon /></span> : unit.topics.indexOf(topicId) + 1}
                </span>
                <span className="hdc-card-text">
                  <span className="hdc-card-label">{topic.title}</span>
                  <span className="hdc-card-desc">{topic.summary}</span>
                </span>
                <span className="hdc-card-arrow"><ChevronIcon /></span>
              </button>
            );
          })}

          {hasQuiz && (
            <button className="hdc-card" onClick={() => startQuiz(unit.id)}>
              <span className={`hdc-card-icon ${quizPassed ? 'hdc-card-icon--done' : ''}`}>
                {quizPassed ? <span className="hdc-icon"><CheckIcon /></span> : '?'}
              </span>
              <span className="hdc-card-text">
                <span className="hdc-card-label">{quizPassed ? 'Quiz Passed' : `Unit ${unitIdx + 1} Quiz`}</span>
                <span className="hdc-card-desc">
                  {quizPassed ? 'Tap to retake' : `${(HADEETHCLASS_UNIT_QUIZZES[unit.id] || []).length} questions, score ${HADEETHCLASS_PASS_THRESHOLD}+ to unlock the next unit`}
                </span>
              </span>
              <span className="hdc-card-arrow"><ChevronIcon /></span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // -- Course overview -------------------------------------------------
  return (
    <div className="hdc-page">
      <div className="hdc-hero">
        <div className="hdc-hero-title">Hadeeth Class</div>
        <div className="hdc-hero-sub">A chronological course on the life of the Prophet Muhammad ﷺ.</div>
        <div className="hdc-progress-track"><div className="hdc-progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="hdc-progress-label">{completedCount} / {totalTopics} topics complete ({percent}%)</div>
        <div className="hdc-hero-actions">
          <button className="hdc-btn-primary" onClick={handleResume}>
            {completedCount === 0 ? 'Start the Course' : 'Continue Where You Left Off'}
          </button>
          {!hasFullAccess && (
            <button className="hdc-btn-secondary" disabled={purchasing} onClick={() => startPurchase('full')}>
              {purchasing ? 'Starting checkout…' : `Unlock Full Course: ₦${FULL_PRICE_NGN.toLocaleString()}`}
            </button>
          )}
        </div>
        {purchaseError && !paywallUnitId && <div className="hdc-sheet-error" style={{ marginTop: 14, marginBottom: 0 }}>{purchaseError}</div>}
      </div>

      <div className="hdc-cards">
        {HADEETHCLASS_UNITS.map((unit, unitIdx) => {
          const paymentLocked = isUnitPaymentLocked(unit.id);
          const quizLocked = !paymentLocked && isUnitQuizLocked(unit.id);
          const locked = paymentLocked || quizLocked;
          const unitCompleted = unit.topics.filter((t) => completedIds.has(t)).length;
          const allDone = unitCompleted === unit.topics.length;

          return (
            <button
              key={unit.id}
              className={`hdc-card ${locked ? 'hdc-card--locked' : ''} ${allDone ? 'hdc-card--done' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <span className={`hdc-card-icon ${locked ? 'hdc-card-icon--locked' : ''} ${allDone ? 'hdc-card-icon--done' : ''}`}>
                {paymentLocked ? <span className="hdc-icon"><LockIcon /></span> : allDone ? <span className="hdc-icon"><CheckIcon /></span> : unitIdx + 1}
              </span>
              <span className="hdc-card-text">
                <span className="hdc-card-meta">Unit {unitIdx + 1}</span>
                <span className="hdc-card-label">{unit.title}</span>
                <span className="hdc-card-desc">
                  {paymentLocked ? `${unit.topics.length} topics, purchase to unlock` :
                   quizLocked ? 'Pass the previous unit\'s quiz to unlock' :
                   allDone ? `All ${unit.topics.length} topics complete` :
                   `${unit.topics.length} topics`}
                </span>
              </span>
              <span className="hdc-card-side">
                {paymentLocked ? (
                  <span className="hdc-card-badge hdc-card-badge--lock">₦{UNIT_PRICE_NGN}</span>
                ) : quizLocked ? (
                  <span className="hdc-card-badge hdc-card-badge--quiz">Quiz required</span>
                ) : (
                  <>
                    <span className="hdc-card-progress-pill">{unitCompleted}/{unit.topics.length}</span>
                    <span className="hdc-card-arrow"><ChevronIcon /></span>
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