'use client';

import React, { useState } from 'react';
import { COLLOCATION_DATA as DEFAULT_COLLOCATION_DATA } from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game5Props {
  onComplete: () => void;
  onNextRound: (round: number) => void;
  customData?: any[];
}

export default function Game5Collocations({ onComplete, onNextRound, customData }: Game5Props) {
  const collList = (customData && customData.length > 0) ? customData : DEFAULT_COLLOCATION_DATA;
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const handleSelect = (qIdx: number, val: number) => {
    if (userAnswers[qIdx] !== undefined) return;

    const nextAnswers = { ...userAnswers, [qIdx]: val };
    setUserAnswers(nextAnswers);

    const correctCount = collList.filter((item: any, idx: number) => nextAnswers[idx] === item.correct).length;
    if (correctCount === collList.length) {
      onComplete();
    }
  };

  const resetCollocations = () => {
    setUserAnswers({});
  };

  const correctCount = collList.filter((item: any, idx: number) => userAnswers[idx] === item.correct).length;
  const isAllComplete = collList.length > 0 && correctCount === collList.length;

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 5 · Collocations
      </div>
      <div className="round-instructions">
        Chọn từ/cụm từ kết hợp <b>đúng nhất</b>.
      </div>
      <div id="collScore" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {correctCount} / {collList.length}
      </div>

      <div id="collContainer">
        {collList.map((item: any, qIdx: number) => {
          const selected = userAnswers[qIdx];
          const isAnswered = selected !== undefined;

          return (
            <div key={item.id || qIdx} className="mcq-question">
              <div className="mcq-qtext">
                {qIdx + 1}. {item.q}
              </div>
              <div className="mcq-options">
                {(item.options || []).map((opt: string, oi: number) => {
                  const isCorrect = oi === item.correct;
                  const isUserChoice = selected === oi;

                  let optClass = 'mcq-opt';
                  if (isAnswered) {
                    optClass += ' disabled';
                    if (isCorrect) {
                      optClass += ' correct-mcq';
                    } else if (isUserChoice) {
                      optClass += ' wrong-mcq';
                    }
                  }

                  return (
                    <div
                      key={oi}
                      className={optClass}
                      onClick={() => handleSelect(qIdx, oi)}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </div>
                  );
                })}
              </div>

              <div className={`coll-explain ${isAnswered ? 'show' : ''}`}>
                <div style={{ marginBottom: '6px', fontWeight: 600 }}>📖 Nghĩa các lựa chọn:</div>
                {(item.options_detail || []).map((opt: any, idx: number) => {
                  const isCorrectOpt = idx === item.correct;
                  return (
                    <div
                      key={idx}
                      className="word-item"
                      title="Bấm để nghe phát âm"
                      onClick={() => speakText(opt.word)}
                    >
                      <span className="word-en">{opt.word}</span>
                      <span className="word-meaning">{opt.meaning}</span>
                      {isCorrectOpt && <span className="correct-badge">✔ đúng</span>}
                      <i className="fas fa-volume-up" style={{ fontSize: '0.75rem', color: '#888', marginLeft: 'auto' }}></i>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-center">
        <button className="btn btn-secondary" onClick={resetCollocations}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r5-banner">
        <div className="big">🔗 Hoàn thành Game 5!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
        <button className="next-round-btn" onClick={() => onNextRound(6)}>
          Xem gợi ý trả lời <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
