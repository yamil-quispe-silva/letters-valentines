'use client';

import { useState, useEffect } from 'react';
import Letter from './components/Letter';
import PhotoGallery from './components/PhotoGallery';
import CountdownTimer from './components/CountdownTimer';
import SurpriseBox from './components/SurpriseBox';
import { letterData } from '@/lib/letterData';
import { timerConfig, surpriseBoxConfig } from '@/lib/timerConfig';

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if timer is disabled or if target time has already passed
    if (!timerConfig.enabled) {
      setShowLetter(true);
      return;
    }

    const now = new Date().getTime();
    const target = new Date(timerConfig.targetDate).getTime();

    if (now >= target) {
      setShowLetter(true);
    }
  }, []);

  const handleTimerComplete = () => {
    setShowLetter(true);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Show countdown timer if enabled and time hasn't passed
  if (!showLetter && timerConfig.enabled) {
    return (
      <CountdownTimer
        targetDate={timerConfig.targetDate}
        message={timerConfig.message}
        onComplete={handleTimerComplete}
      />
    );
  }

  // Show the letter
  return (
    <main className="container">
      <div className="letter-wrapper">
        <Letter data={letterData} />
      </div>
      <PhotoGallery images={letterData.images} />

      {/* Surprise box appears below gallery */}
      {surpriseBoxConfig.enabled && (
        <SurpriseBox config={surpriseBoxConfig} />
      )}
    </main>
  );
}
