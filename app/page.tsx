'use client';

import { useState, useEffect } from 'react';
import Letter from './components/Letter';
import PhotoGallery from './components/PhotoGallery';
import WordSearch from './components/WordSearch';
import SurpriseBox from './components/SurpriseBox';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import { letterData } from '@/lib/letterData';
import { timerConfig, surpriseBoxConfig } from '@/lib/timerConfig';

type Phase = 'search' | 'search-fade' | 'splash' | 'splash-fade' | 'letter';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('search');
  const [letterVisible, setLetterVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!timerConfig.enabled) {
      setPhase('letter');
      setTimeout(() => setLetterVisible(true), 50);
    }
  }, []);

  const handleWordsFound = () => {
    // 1. Fade out the word search (0.6s)
    setPhase('search-fade');
    setTimeout(() => {
      // 2. Show splash message
      setPhase('splash');
      // 3. After 4s, fade out splash (1s)
      setTimeout(() => {
        setPhase('splash-fade');
        // 4. Show letter
        setTimeout(() => {
          setPhase('letter');
          setTimeout(() => setLetterVisible(true), 50);
        }, 1000);
      }, 2000);
    }, 600);
  };

  if (!mounted) return null;

  if (phase === 'search' || phase === 'search-fade') {
    return (
      <div className={phase === 'search-fade' ? 'page-fade-out' : ''}>
        <WordSearch onComplete={handleWordsFound} />
      </div>
    );
  }

  if (phase === 'splash' || phase === 'splash-fade') {
    return (
      <div className={`splash-screen ${phase === 'splash-fade' ? 'splash-fade-out' : ''}`}>
        <div className="splash-content">
          <h1 className="splash-text">
            <span className="splash-word" style={{ animationDelay: '0s' }}>Feliz</span>
            <span className="splash-word" style={{ animationDelay: '0.9s' }}>San</span>
            <span className="splash-word" style={{ animationDelay: '1.8s' }}>Valentín</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <main className={`container ${letterVisible ? 'page-fade-in' : 'page-hidden'}`}>
      <BackgroundSlideshow />
      <div className="letter-wrapper">
        <Letter data={letterData} />
      </div>
{surpriseBoxConfig.enabled && (
        <SurpriseBox config={surpriseBoxConfig} />
      )}
    </main>
  );
}
