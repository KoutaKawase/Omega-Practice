import { StatusIndex, usePracticeStore } from '../stores/practiceStore';
import { ResetButton } from './ResetButton';
import { RowContent } from './RowContent';

export function PracticeContent() {
  const practiceState = usePracticeStore((state) => state.practiceStatus);

  return (
    <div className="flex flex-col items-center pt-10 ">
      <div>
        {practiceState.map((status, index) => {
          return (
            <RowContent
              status={status}
              key={status.job}
              index={index as StatusIndex}
            />
          );
        })}
      </div>

      <ResetButton />
    </div>
  );
}
