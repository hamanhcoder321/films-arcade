'use client';

import React, { useState } from 'react';
import { MCQ_DATA as DEFAULT_MCQ_DATA } from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game3Props {
  onComplete: () => void;
  onNextRound: (round: number) => void;
  customData?: any[];
}

export default function Game3MCQ({ onComplete, onNextRound, customData }: Game3Props) {
  const mcqList = (customData && customData.length > 0) ? customData : DEFAULT_MCQ_DATA;
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (userAnswers[qIdx] !== undefined) return;

    const nextAnswers = { ...userAnswers, [qIdx]: optIdx };
    setUserAnswers(nextAnswers);

    const correctCount = mcqList.filter((item: any, idx: number) => nextAnswers[idx] === item.correct).length;
    if (correctCount === mcqList.length) {
      onComplete();
    }
  };

  const resetMCQ = () => {
    setUserAnswers({});
  };

  const correctCount = mcqList.filter((item: any, idx: number) => userAnswers[idx] === item.correct).length;
  const isAllComplete = mcqList.length > 0 && correctCount === mcqList.length;

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 3 · Chọn nghĩa đúng
      </div>
      <div className="round-instructions">
        Chọn nghĩa tiếng Việt <b>đúng nhất</b> cho cụm từ tiếng Anh.
      </div>
      <div id="mcqScore" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {correctCount} / {mcqList.length}
      </div>

      <div id="mcqContainer">
        {mcqList.map((item: any, qIdx: number) => {
          const selected = userAnswers[qIdx];
          const isAnswered = selected !== undefined;

          return (
            <div key={item.id || qIdx} className="mcq-question">
              <div
                className="mcq-qtext"
                title="Bấm để nghe phát âm"
                onClick={() => speakText(item.q)}
              >
                <span>{qIdx + 1}.</span>
                <span className="highlight-text">{item.q}</span>
                <i className="fas fa-volume-up" style={{ fontSize: '0.8rem', color: '#4a90e2', marginLeft: '4px' }}></i>
              </div>
              <div className="mcq-options">
                {(item.options || []).map((opt: string, optIdx: number) => {
                  const isCorrect = optIdx === item.correct;
                  const isUserChoice = selected === optIdx;

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
                      key={optIdx}
                      className={optClass}
                      onClick={() => handleSelect(qIdx, optIdx)}
                    >
                      {String.fromCharCode(65 + optIdx)}. {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-center">
        <button className="btn btn-secondary" onClick={resetMCQ}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r3-banner">
        <div className="big">💡 Hoàn thành Game 3!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
        <button className="next-round-btn" onClick={() => onNextRound(4)}>
          Sang Game 4 <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
