'use client';

import { useEffect, useState } from 'react';
import { SurpriseBoxConfig } from '@/lib/timerConfig';

interface SurpriseBoxProps {
  config: SurpriseBoxConfig;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SurpriseBox({ config }: SurpriseBoxProps) {
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeRemaining = (): TimeRemaining | null => {
      const now = new Date().getTime();
      const target = new Date(config.targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsUnlocked(true);
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    const initial = calculateTimeRemaining();
    setTimeRemaining(initial);

    // Update every second
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, config.targetDate]);

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const handleOpenGift = () => {
    window.open(config.youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="surprise-box-container">
      <p className="surprise-message">
        {isUnlocked ? config.unlockedMessage : config.waitingMessage}
      </p>
      <button className="surprise-button" onClick={handleOpenGift}>
        {config.buttonText}
      </button>
    </div>
  );
}
