'use client';

import React from 'react';

interface TabsProps {
  activeRound: number;
  completedRounds: number[];
  onSelectRound: (round: number) => void;
}

const TAB_CONFIG = [
  { round: 1, label: 'Game 1', sub: 'Ghép nghĩa', icon: 'fa-puzzle-piece' },
  { round: 2, label: 'Game 2', sub: 'Điền từ', icon: 'fa-edit' },
  { round: 3, label: 'Game 3', sub: 'Chọn nghĩa', icon: 'fa-lightbulb' },
  { round: 4, label: 'Game 4', sub: 'Dịch câu', icon: 'fa-language' },
  { round: 5, label: 'Game 5', sub: 'Collocations', icon: 'fa-link' },
  { round: 6, label: 'Game 6', sub: 'Trả lời câu hỏi', icon: 'fa-comments' },
];

export default function Tabs({ activeRound, completedRounds, onSelectRound }: TabsProps) {
  return (
    <div className="tabs">
      {TAB_CONFIG.map((tab) => {
        const isActive = activeRound === tab.round;
        const isCompleted = completedRounds.includes(tab.round);
        return (
          <div
            key={tab.round}
            className={`tab ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            onClick={() => onSelectRound(tab.round)}
          >
            <i className={`fas ${tab.icon}`}></i>
            {tab.label}
            <br />
            {tab.sub}
            <span className="done-badge">
              <i className="fas fa-check"></i>
            </span>
          </div>
        );
      })}
    </div>
  );
}
