import { useState } from 'react';
import { usePracticeStore } from '../stores/practiceStore';

export function ResetButton() {
  const [isRunClicked, setRunClicked] = useState(false);
  console.log(isRunClicked);

  const [resetMarker, changeDebuffs, setIsRunningTimer] = usePracticeStore(
    (state) => [
      state.resetTimerAndMarker,
      state.changeDebuffs,
      state.setIsRunningTimer,
    ]
  );

  function handleResetClick() {
    setRunClicked(() => true);
    resetMarker();
    changeDebuffs();
    setIsRunningTimer(true);
  }
  return (
    <div className='mt-20'>
      <button
        className='rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        type='button'
        onClick={() => handleResetClick()}>
        {!isRunClicked ? 'RUN' : 'NEXT'}
      </button>
    </div>
  );
}
