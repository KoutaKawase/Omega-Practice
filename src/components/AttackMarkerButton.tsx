import { useState } from 'react';
import { StatusIndex, usePracticeStore } from '../stores/practiceStore';
import { useMarkerCountStore } from '../stores/markerCountStore';

interface Props {
  index: StatusIndex;
}

export function AttackMarkerButton(props: Props) {
  const assignAttackMarker = usePracticeStore((state) => state.assignMarker);
  const [incrementAttack, count] = useMarkerCountStore((state) => [
    state.incrementAttack,
    state.tar,
  ]);
  const statusIndex = props.index;

  function handleClick() {
    assignAttackMarker(statusIndex, 'tar1');
    incrementAttack();
  }

  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
        onClick={() => handleClick()}
      >
        <img
          src={`https://cdn.raidplan.io/game/ffxiv/mark/mark_tar1.png`}
          className="h-full max-w-full scale-90"
        />
      </button>
    </div>
  );
}
