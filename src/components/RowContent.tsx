import { Status, StatusIndex } from '../stores/practiceStore';
import { DebufContainer } from './DebufContainer';
import { JobIcon } from './JobIcon';
import { Marker } from './Marker';
import { MarkerButtons } from './MarkerButtons';

interface Props {
  status: Status;
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export function RowContent({ status, index }: Props) {
  return (
    <div className="my-0.5 flex items-center justify-center">
      <Marker marker={status.marker} />
      <JobIcon job={status.job} />
      <DebufContainer />
      <MarkerButtons index={index} />
    </div>
  );
}
