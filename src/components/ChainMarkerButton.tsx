import {
  LINK_COUNT_LIMIT,
  MarkerType,
  StatusIndex,
  usePracticeStore,
} from '../stores/practiceStore';
import { calclateImgSrc } from '../utils/utils';

interface Props {
  index: StatusIndex;
}

export function ChainMarkerButton(props: Props) {
  const assignAttackMarker = usePracticeStore((state) => state.assignMarker);
  const [linkCount, incrementLink] = usePracticeStore((state) => [
    state.linkCount,
    state.incrementLink,
  ]);
  const statusIndex = props.index;
  const imgSrc = calclateImgSrc(linkCount, 'link');

  function handleLinkClick() {
    if (linkCount === LINK_COUNT_LIMIT) return;

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
