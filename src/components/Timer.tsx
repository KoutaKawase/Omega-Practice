import { useEffect, useState } from 'react';
import { usePracticeStore } from '../stores/practiceStore';

export function Timer() {
  const [isRunngingTimer, setIsRunningTimer] = usePracticeStore((state) => [
    state.isRunngingTimer,
    state.setIsRunningTimer,
  ]);
  const [practiceTimer, setPracticeTimer] = usePracticeStore((state) => [
    state.timer,
    state.setPracticeTimer,
  ]);
  const markerCount = usePracticeStore((state) => state.markerCount);

  useEffect(() => {
    let interval: number;

    if (isRunngingTimer) {
      interval = setInterval(() => setPracticeTimer(), 1000);
    }

    return () => clearInterval(interval);
  }, [isRunngingTimer]);

  return (
    <div className="mt-10">
      <div className="text-white">経過時間: {practiceTimer}秒</div>
    </div>
  );
}
