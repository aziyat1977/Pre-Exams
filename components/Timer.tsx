
import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialMinutes: number;
  onTimeout: () => void;
  isPaused: boolean;
}

export const Timer: React.FC<TimerProps> = ({ initialMinutes, onTimeout, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isPaused, onTimeout]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLow = timeLeft < 300;

  return (
    <div className={`px-4 py-1.5 rounded-full border transition-all-custom flex items-center space-x-2 font-medium tracking-tight ${
      isLow 
        ? 'bg-red-50 border-red-100 text-red-600 animate-pulse' 
        : 'bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300'
    }`}>
      <div className={`w-2 h-2 rounded-full ${isLow ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
      <span className="tabular-nums">{formatTime(timeLeft)}</span>
    </div>
  );
};
