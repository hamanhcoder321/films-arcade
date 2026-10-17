'use client';

import React, { useState } from 'react';
import { FILL_DATA as DEFAULT_FILL_DATA, FILL_ALTERNATIVES as DEFAULT_FILL_ALTERNATIVES, FillItem } from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game2Props {
  onComplete: () => void;
  onNextRound: (round: number) => void;
  customData?: any[];
}

export default function Game2Fill({ onComplete, onNextRound, customData }: Game2Props) {
  const fillList = (customData && customData.length > 0) ? customData : DEFAULT_FILL_DATA;

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [statuses, setStatuses] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const getAllAnswers = (id: number): string[] => {
    const item = fillList.find((d: any) => d.id === id);
    if (!item) return [];
    let answers = [...(item.answers || [])];
    if (item.alternatives) {
      answers = answers.concat(item.alternatives);
    } else if (DEFAULT_FILL_ALTERNATIVES[id]) {
      answers = answers.concat(DEFAULT_FILL_ALTERNATIVES[id]);
    }
    return answers.filter((v, i, a) => a.indexOf(v) === i);
  };

  const checkOne = (id: number) => {
    const allAnswers = getAllAnswers(id);
    const val = (inputs[id] || '').trim().toLowerCase();
    const isCorrect = allAnswers.some((a) => val === a.toLowerCase());

    const newStatuses = {
      ...statuses,
      [id]: isCorrect ? ('correct' as const) : ('incorrect' as const),
    };
    setStatuses(newStatuses);

    if (!isCorrect) {
      setRevealed((prev) => ({ ...prev, [id]: true }));
    }

    const correctCount = Object.values(newStatuses).filter((s) => s === 'correct').length;
    if (correctCount === fillList.length) {
      onComplete();
    }
  };

  const checkAll = () => {
    const newStatuses: Record<number, 'correct' | 'incorrect'> = {};
    const newRevealed = { ...revealed };

    fillList.forEach((item: any) => {
      const allAnswers = getAllAnswers(item.id);
      const val = (inputs[item.id] || '').trim().toLowerCase();
      const isCorrect = allAnswers.some((a) => val === a.toLowerCase());
      newStatuses[item.id] = isCorrect ? 'correct' : 'incorrect';
      if (!isCorrect) {
        newRevealed[item.id] = true;
      }
    });

    setStatuses(newStatuses);
    setRevealed(newRevealed);

    const correctCount = Object.values(newStatuses).filter((s) => s === 'correct').length;
    if (correctCount === fillList.length) {
      onComplete();
    }
  };

  const toggleAnswer = (id: number) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showAllAnswers = () => {
    const allRev: Record<number, boolean> = {};
    fillList.forEach((item: any) => {
      allRev[item.id] = true;
    });
    setRevealed(allRev);
  };

  const resetFill = () => {
    setInputs({});
    setStatuses({});
    setRevealed({});
  };

  const correctCount = Object.values(statuses).filter((s) => s === 'correct').length;
  const isAllComplete = fillList.length > 0 && correctCount === fillList.length;

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 2 · Điền cụm từ
      </div>
      <div className="round-instructions">
        Điền <b>cụm từ tiếng Anh</b> vào chỗ trống. Nhấn <kbd>Enter</kbd> để kiểm tra.
      </div>
      <div id="fillScore" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {correctCount} / {fillList.length}
      </div>

      <div id="fillContainer">
        {fillList.map((item: any) => {
          const allAnswers = getAllAnswers(item.id);
          const status = statuses[item.id];
          const isRev = revealed[item.id];

          return (
            <div key={item.id} className="fill-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '8px' }}>
                <span className="q-text">
                  {item.id}. {item.text}
                </span>
                <button className="btn btn-outline btn-sm" onClick={() => toggleAnswer(item.id)}>
                  📖 Xem đáp án
                </button>
              </div>
              <div className="vi-hint">
                💡 Gợi ý tiếng Việt: <strong>{item.viHint}</strong>
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Nhập cụm từ tiếng Anh..."
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
              <div className={`fill-answer-box ${isRev ? 'show' : ''}`}>
                ✅ Đáp án:{' '}
                {allAnswers.map((a, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && ' | '}
                    <span
                      className="answer-word"
                      onClick={() => speakText(a)}
                    >
                      {a}
                    </span>
                  </React.Fragment>
                ))}
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
        <button className="btn btn-secondary" onClick={resetFill}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r2-banner">
        <div className="big">✍️ Hoàn thành Game 2!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
        <button className="next-round-btn" onClick={() => onNextRound(3)}>
          Sang Game 3 <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
