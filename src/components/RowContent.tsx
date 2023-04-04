import { DebufContainer } from './DebufContainer';
import { JobIcon } from './JobIcon';
import { Marker } from './Marker';
import { MarkerButtons } from './MarkerButtons';

interface Props {
  job: string;
}

export function RowContent({ job }: Props) {
  return (
    <div className="my-0.5 flex items-center justify-center">
      <Marker />
      <JobIcon job={job} />
      <DebufContainer />
      <MarkerButtons />
    </div>
  );
}
