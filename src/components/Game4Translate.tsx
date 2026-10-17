'use client';

import React, { useState } from 'react';
import { TRANS_DATA as DEFAULT_TRANS_DATA } from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game4Props {
  onComplete: () => void;
  onNextRound: (round: number) => void;
  customData?: any[];
}

export default function Game4Translate({ onComplete, onNextRound, customData }: Game4Props) {
  const transList = (customData && customData.length > 0) ? customData : DEFAULT_TRANS_DATA;

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<
    Record<number, { show: boolean; isCorrect: boolean }>
  >({});
  const [answeredCorrectly, setAnsweredCorrectly] = useState<Set<number>>(new Set());

  const normalize = (s: string) =>
    s.replace(/\s+/g, ' ').trim().toLowerCase().replace(/[.]+$/, '');

  const checkTranslation = (id: number) => {
    const item = transList.find((d: any) => d.id === id);
    if (!item) return;

    const user = inputs[id] || '';
    const isCorrect = (item.answers || []).some((a: string) => normalize(user) === normalize(a));

    setFeedback((prev) => ({
      ...prev,
      [id]: { show: true, isCorrect },
    }));

    if (isCorrect) {
      setAnsweredCorrectly((prev) => {
        const next = new Set(prev);
        next.add(id);
        if (next.size === transList.length) {
          onComplete();
        }
        return next;
      });
    }
  };

  const resetTranslate = () => {
    setInputs({});
    setFeedback({});
    setAnsweredCorrectly(new Set());
  };

  const correctCount = answeredCorrectly.size;
  const isAllComplete = transList.length > 0 && correctCount === transList.length;

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 4 · Dịch câu
      </div>
      <div className="round-instructions">
        Dịch câu tiếng Việt sang tiếng Anh. Nhấn <kbd>Enter</kbd> để kiểm tra.
      </div>
      <div id="transScore" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {correctCount} / {transList.length}
      </div>

      <div id="transContainer">
        {transList.map((item: any) => {
          const fb = feedback[item.id];
          const isShow = fb?.show;
          const isCorrect = fb?.isCorrect;

          let inputClass = '';
          if (isShow) {
            inputClass = isCorrect ? 'correct' : 'incorrect';
          }

          return (
            <div key={item.id} className="trans-item">
              <div className="trans-viet">
                {item.id}. {item.vi}
              </div>
              <div className="trans-hint">
                <i className="fas fa-key" style={{ marginRight: '6px' }}></i>
                Gợi ý: {item.hint}
              </div>
              <div className="trans-input-row">
                <input
                  type="text"
                  placeholder="Type your English translation here..."
                  className={inputClass}
                  value={inputs[item.id] || ''}
                  onChange={(e) => setInputs({ ...inputs, [item.id]: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      checkTranslation(item.id);
                    }
                  }}
                />
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => checkTranslation(item.id)}
                >
                  Kiểm tra
                </button>
              </div>

              <div className={`trans-feedback ${isShow ? 'show' : ''}`}>
                {isCorrect ? (
                  <div className="correct-answer">✅ Đúng! Câu của bạn khớp với đáp án.</div>
                ) : (
                  <>
                    <div style={{ color: 'var(--red)' }}>✗ Chưa khớp hoàn toàn. Gợi ý đáp án:</div>
                    <div style={{ marginTop: '4px' }}>
                      {(item.answers || []).map((a: string, i: number) => (
                        <React.Fragment key={i}>
                          {i > 0 && '  |  '}
                          <span
                            className="answer-word"
                            title="Bấm để nghe phát âm"
                            onClick={() => speakText(a)}
                          >
                            {a}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="vi-meaning">🇻🇳 {item.vi}</div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-center">
        <button className="btn btn-secondary" onClick={resetTranslate}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r4-banner">
        <div className="big">📝 Hoàn thành Game 4!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
        <button className="next-round-btn" onClick={() => onNextRound(5)}>
          Sang Game 5 <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
