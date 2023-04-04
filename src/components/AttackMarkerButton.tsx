import { StatusIndex, usePracticeState } from '../stores/practiceStore';

interface Props {
  index: StatusIndex;
}

export function AttackMarkerButton(props: Props) {
  const assignAttackMarker = usePracticeState((state) => state.assignMarker);
  const statusIndex = props.index;

  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
        onClick={() => assignAttackMarker(statusIndex, 'tar3')}
      >
        <img
          src="https://cdn.raidplan.io/game/ffxiv/mark/mark_tar1.png"
          className="h-full max-w-full scale-90"
        />
      </button>
    </div>
  );
}
