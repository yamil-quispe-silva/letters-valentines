'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  message: string;
  onComplete: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export default function CountdownTimer({ targetDate, message, onComplete }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemaining => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
      }

      return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    const initial = calculateTimeRemaining();
    setTimeRemaining(initial);

    if (initial.total <= 0) {
      onComplete();
      return;
    }

    // Update every second
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.total <= 0) {
        clearInterval(interval);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  // Avoid hydration mismatch by not rendering time until mounted
  if (!mounted || !timeRemaining) {
    return (
      <div className="countdown-container">
        <div className="countdown-content">
          <h1 className="countdown-message">{message}</h1>
        </div>
      </div>
    );
  }

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <div className="countdown-content">
        <h1 className="countdown-message">{message}</h1>

        <div className="countdown-timer">
          <div className="time-unit">
            <div className="time-value">{formatNumber(timeRemaining.days)}</div>
            <div className="time-label">días</div>
          </div>

          <div className="time-separator">:</div>

          <div className="time-unit">
            <div className="time-value">{formatNumber(timeRemaining.hours)}</div>
            <div className="time-label">horas</div>
          </div>

          <div className="time-separator">:</div>

          <div className="time-unit">
            <div className="time-value">{formatNumber(timeRemaining.minutes)}</div>
            <div className="time-label">minutos</div>
          </div>

          <div className="time-separator">:</div>

          <div className="time-unit">
            <div className="time-value">{formatNumber(timeRemaining.seconds)}</div>
            <div className="time-label">segundos</div>
          </div>
        </div>

        <p className="countdown-subtitle">
          Feliz San Valentin 💝
        </p>
      </div>
    </div>
  );
}
