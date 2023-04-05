import { StatusIndex } from '../stores/practiceStore';
import { AttackMarkerButton } from './AttackMarkerButton';
import { ChainMarkerButton } from './ChainMarkerButton';

interface Props {
  index: StatusIndex;
}

export function MarkerButtons({ index }: Props) {
  return (
    <div className="ml-2 flex space-x-5">
      <AttackMarkerButton index={index} />
      <ChainMarkerButton index={index} />
    </div>
  );
}
