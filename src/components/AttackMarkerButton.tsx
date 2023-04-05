import {
  MarkerType,
  StatusIndex,
  TAR_COUNT_LIMIT,
  usePracticeStore,
} from '../stores/practiceStore';
import { calclateImgSrc, existsMarkerIn } from '../utils/utils';

interface Props {
  index: StatusIndex;
}

export function AttackMarkerButton({ index: statusIndex }: Props) {
  const assignAttackMarker = usePracticeStore((state) => state.assignMarker);
  const [tarCount, incrementTar, existsMarkerOnMe] = usePracticeStore(
    (state) => [
      state.tarCount,
      state.incrementTar,
      existsMarkerIn(state.practiceStatus[statusIndex]),
    ]
  );
  const imgSrc = calclateImgSrc(tarCount, 'tar');

  function handleTarClick() {
    //自分の場所に既に何かマーカーが置かれてたらマーカーを置けないようにする あるいはカウント5になってたら何もさせない
    if (tarCount === TAR_COUNT_LIMIT || existsMarkerOnMe) return;

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
