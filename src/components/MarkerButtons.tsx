import { AttackMarkerButton } from './AttackMarkerButton';
import { ChainMarkerButton } from './ChainMarkerButton';

export function MarkerButtons() {
  return (
    <div className="ml-2 flex space-x-5">
      <AttackMarkerButton />
      <ChainMarkerButton />
    </div>
  );
}
