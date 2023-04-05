import {
  MarkerType,
  StatusIndex,
  TAR_COUNT_LIMIT,
  usePracticeStore,
} from '../stores/practiceStore';
import { calclateImgSrc } from '../utils/utils';

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
  const imgSrc = calclateImgSrc(tarCount, 'tar');

  function handleTarClick() {
    if (tarCount === TAR_COUNT_LIMIT) return;

    assignAttackMarker(statusIndex, `tar${tarCount}` as MarkerType);
    incrementTar();
  }

  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
        onClick={() => handleTarClick()}
      >
        <img src={imgSrc} className="h-full max-w-full scale-90" />
      </button>
    </div>
  );
}
