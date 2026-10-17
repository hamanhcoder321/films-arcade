'use client';

import React, { useState } from 'react';
import { G6_DATA as DEFAULT_G6_DATA } from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game6Props {
  onComplete: () => void;
  customData?: any[];
}

export default function Game6Answers({ onComplete, customData }: Game6Props) {
  const g6List = (customData && customData.length > 0) ? customData : DEFAULT_G6_DATA;

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [statuses, setStatuses] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const checkOne = (id: number) => {
    const item = g6List.find((d: any) => d.id === id);
    if (!item) return;

    const val = (inputs[id] || '').trim().toLowerCase();
    const isCorrect = (item.answers || []).some((a: string) => val === a.toLowerCase());

    const nextStatuses = {
      ...statuses,
      [id]: isCorrect ? ('correct' as const) : ('incorrect' as const),
    };
    setStatuses(nextStatuses);

    if (!isCorrect) {
      setRevealed((prev) => ({ ...prev, [id]: true }));
    }

    const correctCount = Object.values(nextStatuses).filter((s) => s === 'correct').length;
    if (correctCount === g6List.length) {
      onComplete();
    }
  };

  const checkAll = () => {
    const nextStatuses: Record<number, 'correct' | 'incorrect'> = {};
    const nextRevealed = { ...revealed };

    g6List.forEach((item: any) => {
      const val = (inputs[item.id] || '').trim().toLowerCase();
      const isCorrect = (item.answers || []).some((a: string) => val === a.toLowerCase());
      nextStatuses[item.id] = isCorrect ? 'correct' : 'incorrect';
      if (!isCorrect) {
        nextRevealed[item.id] = true;
      }
    });

    setStatuses(nextStatuses);
    setRevealed(nextRevealed);

    const correctCount = Object.values(nextStatuses).filter((s) => s === 'correct').length;
    if (correctCount === g6List.length) {
      onComplete();
    }
  };

  const toggleAnswer = (id: number) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showAllAnswers = () => {
    const allRev: Record<number, boolean> = {};
    g6List.forEach((item: any) => {
      allRev[item.id] = true;
    });
    setRevealed(allRev);
  };

  const resetG6 = () => {
    setInputs({});
    setStatuses({});
    setRevealed({});
  };

  const correctCount = Object.values(statuses).filter((s) => s === 'correct').length;
  const isAllComplete = g6List.length > 0 && correctCount === g6List.length;

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 6 · Trả lời câu hỏi
      </div>
      <div className="round-instructions">
        Điền cụm từ còn thiếu. Nhấn <kbd>Enter</kbd> để kiểm tra.
      </div>
      <div id="g6Score" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {correctCount} / {g6List.length}
      </div>

      <div id="g6Container">
        {g6List.map((item: any) => {
          const status = statuses[item.id];
          const isRev = revealed[item.id];

          return (
            <div key={item.id} className="fill-item">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span className="q-text">
                  ❓ {item.id}. {item.question}
                </span>
                <button className="btn btn-outline btn-sm" onClick={() => toggleAnswer(item.id)}>
                  📖 Xem đáp án
                </button>
              </div>
              <div className="vi-hint" style={{ marginTop: '6px' }}>
                💬 {item.text}
              </div>
              <div className="vi-hint">
                💡 Gợi ý tiếng Việt: <strong>{item.viHint}</strong>
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Nhập cụm từ tiếng Anh còn thiếu..."
                  className={status === 'correct' ? 'correct' : status === 'incorrect' ? 'incorrect' : ''}
                  value={inputs[item.id] || ''}
                  onChange={(e) => setInputs({ ...inputs, [item.id]: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      checkOne(item.id);
                    }
                  }}
                />
              </div>

              <div className={`fill-answer-box g6-answer-box ${isRev ? 'show' : ''}`}>
                ✅ Đáp án:{' '}
                {(item.answers || []).map((a: string, i: number) => (
                  <React.Fragment key={i}>
                    {i > 0 && ' | '}
                    <span
                      className="answer-word"
                      title="Bấm để nghe phát âm"
                      onClick={() => speakText(a)}
                    >
                      {a}
                    </span>
                  </React.Fragment>
                ))}
                <div className="g6-samples">
                  <div className="g6-samples-label">💬 3 câu trả lời mẫu:</div>
                  {(item.sampleAnswers || []).map((s: string, i: number) => (
                    <div key={i} className="g6-sample-item">
                      <div className="g6-sample-num">Mẫu {i + 1}</div>
                      <div className="g6-sample-text">
                        {s}
                        <button
                          style={{
                            marginLeft: '8px',
                            background: 'transparent',
                            border: 'none',
                            color: '#4a90e2',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                          }}
                          title="Nghe câu trả lời mẫu"
                          onClick={() => speakText(s)}
                        >
                          <i className="fas fa-volume-up"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-center">
        <button className="btn btn-success" onClick={checkAll}>
          ✅ Kiểm tra tất cả
        </button>
        <button className="btn btn-outline" onClick={showAllAnswers}>
          📖 Xem tất cả đáp án
        </button>
        <button className="btn btn-secondary" onClick={resetG6}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r6-banner">
        <div className="big">🗣️ Hoàn thành Game 6!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
      </div>
    </div>
  );
}
