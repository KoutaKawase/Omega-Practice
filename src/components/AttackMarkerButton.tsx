import {
  MarkerType,
  StatusIndex,
  usePracticeStore,
} from '../stores/practiceStore';

interface Props {
  index: StatusIndex;
}

export function AttackMarkerButton(props: Props) {
  const assignAttackMarker = usePracticeStore((state) => state.assignMarker);
  const [tarCount, incrementTar] = usePracticeStore((state) => [
    state.tarCount,
    state.incrementTar,
  ]);
  const statusIndex = props.index;

  function handleClick() {
    assignAttackMarker(statusIndex, `tar${tarCount}` as MarkerType);
    incrementTar();
  }

  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
        onClick={() => handleClick()}
      >
        <img
          src={`https://cdn.raidplan.io/game/ffxiv/mark/mark_tar${tarCount}.png`}
          className="h-full max-w-full scale-90"
        />
      </button>
      <span className="text-white">count: {tarCount}</span>
    </div>
  );
}
