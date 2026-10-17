'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  MATCH_PAIRS as DEFAULT_MATCH_PAIRS,
  MATCH_EXAMPLES as DEFAULT_MATCH_EXAMPLES,
  MATCH_EXAMPLE_VI as DEFAULT_MATCH_EXAMPLE_VI,
  CATEGORY_GROUPS as DEFAULT_CATEGORY_GROUPS,
  PAIR_COLORS,
} from '@/data/vocabulary';
import { speakText } from '@/utils/speech';

interface Game1Props {
  onComplete: () => void;
  onNextRound: (round: number) => void;
  customData?: {
    categories: { id: number; name: string }[];
    items: {
      id: number;
      category_id: number;
      left_text: string;
      right_text: string;
      example_en: string;
      example_vi: string;
    }[];
  };
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Game1Matching({ onComplete, onNextRound, customData }: Game1Props) {
  // Process dynamic or default data
  const { matchPairs, matchExamples, matchExampleVi, categoryGroups, idToIndexMap } = useMemo(() => {
    if (customData && customData.items && customData.items.length > 0) {
      const pairs = customData.items.map((i) => ({
        id: i.id,
        left: i.left_text,
        right: i.right_text,
      }));
      const idMap: Record<number, { left: string; right: string }> = {};
      pairs.forEach((p) => {
        idMap[p.id] = p;
      });

      const examplesEn: Record<number, string> = {};
      const examplesVi: Record<number, string> = {};
      customData.items.forEach((i) => {
        examplesEn[i.id] = i.example_en;
        examplesVi[i.id] = i.example_vi;
      });

      const catGroups = customData.categories.map((c) => ({
        name: c.name,
        ids: customData.items.filter((item) => item.category_id === c.id).map((item) => item.id),
      })).filter(g => g.ids.length > 0);

      return {
        matchPairs: idMap,
        matchExamples: examplesEn,
        matchExampleVi: examplesVi,
        categoryGroups: catGroups,
        idToIndexMap: pairs,
      };
    }

    const idMap: Record<number, { left: string; right: string }> = {};
    DEFAULT_MATCH_PAIRS.forEach((p) => {
      idMap[p.id] = p;
    });

    return {
      matchPairs: idMap,
      matchExamples: DEFAULT_MATCH_EXAMPLES,
      matchExampleVi: DEFAULT_MATCH_EXAMPLE_VI,
      categoryGroups: DEFAULT_CATEGORY_GROUPS,
      idToIndexMap: DEFAULT_MATCH_PAIRS,
    };
  }, [customData]);

  const totalPairsCount = idToIndexMap.length;

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set());
  const [pairColorMap, setPairColorMap] = useState<Record<number, number>>({});
  const [nextColorIdx, setNextColorIdx] = useState<number>(0);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [wrongPair, setWrongPair] = useState<{ left: number | null; right: number | null }>({
    left: null,
    right: null,
  });

  const [categoryOrders, setCategoryOrders] = useState<{
    leftOrders: number[][];
    rightOrders: number[][];
  }>({ leftOrders: [], rightOrders: [] });

  const initOrders = useCallback(() => {
    const leftOrders = categoryGroups.map((g) => shuffleArray(g.ids));
    const rightOrders = categoryGroups.map((g) => shuffleArray(g.ids));
    setCategoryOrders({ leftOrders, rightOrders });
  }, [categoryGroups]);

  useEffect(() => {
    initOrders();
    setMatchedIds(new Set());
    setPairColorMap({});
    setNextColorIdx(0);
    setCurrentCategoryIndex(0);
  }, [initOrders]);

  const resetMatching = () => {
    setMatchedIds(new Set());
    setPairColorMap({});
    setNextColorIdx(0);
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongPair({ left: null, right: null });
    setCurrentCategoryIndex(0);
    initOrders();
  };

  const handleLeftClick = (id: number) => {
    if (matchedIds.has(id)) {
      speakText(matchPairs[id]?.left || '');
      return;
    }
    if (wrongPair.left !== null || wrongPair.right !== null) return;

    if (selectedLeft === id) {
      setSelectedLeft(null);
      return;
    }

    if (selectedRight !== null) {
      checkPair(id, selectedRight);
    } else {
      setSelectedLeft(id);
    }
  };

  const handleRightClick = (id: number) => {
    if (matchedIds.has(id)) return;
    if (wrongPair.left !== null || wrongPair.right !== null) return;

    if (selectedRight === id) {
      setSelectedRight(null);
      return;
    }

    if (selectedLeft !== null) {
      checkPair(selectedLeft, id);
    } else {
      setSelectedRight(id);
    }
  };

  const checkPair = (leftId: number, rightId: number) => {
    if (leftId === rightId) {
      setMatchedIds((prev) => {
        const next = new Set(prev);
        next.add(leftId);
        if (next.size === totalPairsCount) {
          onComplete();
        }
        return next;
      });
      setPairColorMap((prev) => ({ ...prev, [leftId]: nextColorIdx }));
      setNextColorIdx((prev) => prev + 1);
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      setWrongPair({ left: leftId, right: rightId });
      setTimeout(() => {
        setWrongPair({ left: null, right: null });
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 400);
    }
  };

  const currentGroup = categoryGroups[currentCategoryIndex];
  const currentLeftIds = categoryOrders.leftOrders[currentCategoryIndex] || currentGroup?.ids || [];
  const currentRightIds = categoryOrders.rightOrders[currentCategoryIndex] || currentGroup?.ids || [];

  const totalInGroup = currentGroup ? currentGroup.ids.length : 0;
  const doneInGroup = currentGroup
    ? currentGroup.ids.filter((id) => matchedIds.has(id)).length
    : 0;
  const isCurrentGroupDone = totalInGroup > 0 && doneInGroup === totalInGroup;

  const matchScore = matchedIds.size;
  const isAllComplete = totalPairsCount > 0 && matchScore === totalPairsCount;

  const nextCategory = () => {
    if (currentCategoryIndex < categoryGroups.length - 1) {
      setCurrentCategoryIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="round-card">
      <div className="round-title">
        <span className="dot"></span> Game 1 · Ghép cụm từ với nghĩa
      </div>
      <div className="round-instructions">
        Bấm chọn thẻ bên trái (cụm từ tiếng Anh), rồi bấm thẻ bên phải (nghĩa tiếng Việt) để ghép
        cặp. Khi ghép đúng, hai thẻ sẽ có <b>cùng màu nền và cùng số thứ tự</b>.
      </div>
      <div id="matchScore" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
        ✅ Đúng: {matchScore} / {totalPairsCount}
      </div>

      <div className="category-nav" id="categoryNav">
        {categoryGroups.map((g, idx) => {
          const isDone = g.ids.length > 0 && g.ids.every((id) => matchedIds.has(id));
          const isActive = idx === currentCategoryIndex;
          return (
            <span
              key={idx}
              className={`cat-dot ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              onClick={() => setCurrentCategoryIndex(idx)}
            >
              {idx + 1}. {g.name}
            </span>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="category-progress" id="categoryProgress">
          Phần {currentCategoryIndex + 1} / {categoryGroups.length} ({doneInGroup}/{totalInGroup} cặp)
        </div>
        {isCurrentGroupDone && currentCategoryIndex < categoryGroups.length - 1 && (
          <button className="category-next-btn" style={{ display: 'inline-block' }} onClick={nextCategory}>
            Tiếp tục →
          </button>
        )}
      </div>

      <div className="match-wrapper">
        <div className="match-col">
          <h4>🇬🇧 Từ vựng</h4>
          <div id="matchLeft">
            {currentLeftIds.map((id) => {
              const pair = matchPairs[id];
              if (!pair) return null;
              const isMatched = matchedIds.has(id);
              const colorIdx = pairColorMap[id];
              const bgColor =
                isMatched && colorIdx !== undefined
                  ? PAIR_COLORS[colorIdx % PAIR_COLORS.length]
                  : undefined;
              const isSelected = selectedLeft === id;
              const isWrong = wrongPair.left === id;

              return (
                <div
                  key={`left-${id}`}
                  className={`match-item ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${
                    isWrong ? 'wrong' : ''
                  }`}
                  style={{ backgroundColor: bgColor }}
                  onClick={() => handleLeftClick(id)}
                >
                  <span>{pair.left}</span>
                  {isMatched && colorIdx !== undefined && (
                    <span className="pair-badge">#{colorIdx + 1}</span>
                  )}
                  {isMatched && matchExamples[id] && (
                    <div className="match-example">
                      <b>Example:</b> {matchExamples[id]}
                      <br />
                      <span style={{ fontStyle: 'italic', color: '#607080' }}>
                        <b>VN:</b> {matchExampleVi[id] || ''}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="match-col">
          <h4>🇻🇳 Nghĩa</h4>
          <div id="matchRight">
            {currentRightIds.map((id) => {
              const pair = matchPairs[id];
              if (!pair) return null;
              const isMatched = matchedIds.has(id);
              const colorIdx = pairColorMap[id];
              const bgColor =
                isMatched && colorIdx !== undefined
                  ? PAIR_COLORS[colorIdx % PAIR_COLORS.length]
                  : undefined;
              const isSelected = selectedRight === id;
              const isWrong = wrongPair.right === id;

              return (
                <div
                  key={`right-${id}`}
                  className={`match-item ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${
                    isWrong ? 'wrong' : ''
                  }`}
                  style={{ backgroundColor: bgColor }}
                  onClick={() => handleRightClick(id)}
                >
                  <span>{pair.right}</span>
                  {isMatched && colorIdx !== undefined && (
                    <span className="pair-badge">#{colorIdx + 1}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-center">
        <button className="btn btn-secondary" onClick={resetMatching}>
          🔄 Làm lại
        </button>
      </div>

      <div className={`complete-banner ${isAllComplete ? 'show' : ''}`} id="r1-banner">
        <div className="big">🎉 Hoàn thành Game 1!</div>
        <div className="small">
          Điểm: <b>100</b>/100
        </div>
        <button className="next-round-btn" onClick={() => onNextRound(2)}>
          Sang Game 2 <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
