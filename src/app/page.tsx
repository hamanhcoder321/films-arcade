'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Tabs from '@/components/Tabs';
import Game1Matching from '@/components/Game1Matching';
import Game2Fill from '@/components/Game2Fill';
import Game3MCQ from '@/components/Game3MCQ';
import Game4Translate from '@/components/Game4Translate';
import Game5Collocations from '@/components/Game5Collocations';
import Game6Answers from '@/components/Game6Answers';

export default function ArcadePage() {
  const [activeRound, setActiveRound] = useState<number>(1);
  const [completedRounds, setCompletedRounds] = useState<number[]>([]);
  const [gameData, setGameData] = useState<any>({
    game1: null,
    game2: null,
    game3: null,
    game4: null,
    game5: null,
    game6: null,
  });

  useEffect(() => {
    fetch('/api/games')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setGameData(data);
        }
      })
      .catch((err) => {
        console.warn('Using offline / static fallback vocabulary data:', err);
      });
  }, []);

  const markComplete = (round: number) => {
    setCompletedRounds((prev) => (prev.includes(round) ? prev : [...prev, round]));
  };

  const handleNextRound = (nextRound: number) => {
    setActiveRound(nextRound);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="wrap">
        <Tabs
          activeRound={activeRound}
          completedRounds={completedRounds}
          onSelectRound={setActiveRound}
        />

        <section className={`round ${activeRound === 1 ? 'active' : ''}`} id="round1">
          <Game1Matching
            customData={gameData.game1}
            onComplete={() => markComplete(1)}
            onNextRound={handleNextRound}
          />
        </section>

        <section className={`round ${activeRound === 2 ? 'active' : ''}`} id="round2">
          <Game2Fill
            customData={gameData.game2}
            onComplete={() => markComplete(2)}
            onNextRound={handleNextRound}
          />
        </section>

        <section className={`round ${activeRound === 3 ? 'active' : ''}`} id="round3">
          <Game3MCQ
            customData={gameData.game3}
            onComplete={() => markComplete(3)}
            onNextRound={handleNextRound}
          />
        </section>

        <section className={`round ${activeRound === 4 ? 'active' : ''}`} id="round4">
          <Game4Translate
            customData={gameData.game4}
            onComplete={() => markComplete(4)}
            onNextRound={handleNextRound}
          />
        </section>

        <section className={`round ${activeRound === 5 ? 'active' : ''}`} id="round5">
          <Game5Collocations
            customData={gameData.game5}
            onComplete={() => markComplete(5)}
            onNextRound={handleNextRound}
          />
        </section>

        <section className={`round ${activeRound === 6 ? 'active' : ''}`} id="round6">
          <Game6Answers
            customData={gameData.game6}
            onComplete={() => markComplete(6)}
          />
        </section>
      </main>
    </>
  );
}
