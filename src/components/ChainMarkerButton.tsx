import {
  LINK_COUNT_LIMIT,
  MarkerType,
  StatusIndex,
  usePracticeStore,
} from '../stores/practiceStore';
import { calclateImgSrc, existsMarkerIn } from '../utils/utils';

interface Props {
  index: StatusIndex;
}

export function ChainMarkerButton({ index: statusIndex }: Props) {
  const assignAttackMarker = usePracticeStore((state) => state.assignMarker);
  const [linkCount, incrementLink, existsMarkerOnMe] = usePracticeStore(
    (state) => [
      state.linkCount,
      state.incrementLink,
      existsMarkerIn(state.practiceStatus[statusIndex]),
    ]
  );
  const imgSrc = calclateImgSrc(linkCount, 'link');

  function handleLinkClick() {
    //自分の場所に既に何かマーカーが置かれてたらマーカーを置けないようにする あるいはカウント3になってたらなにもさせない
    if (linkCount === LINK_COUNT_LIMIT || existsMarkerOnMe) return;

    assignAttackMarker(statusIndex, `link${linkCount}` as MarkerType);

    incrementLink();
  }

  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
        onClick={() => handleLinkClick()}
      >
        <img src={imgSrc} className="h-full max-w-full scale-90" />
      </button>
    </div>
  );
}
