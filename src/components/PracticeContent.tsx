import { StatusIndex, usePracticeState } from '../stores/practiceStore';
import { RowContent } from './RowContent';

export function PracticeContent() {
  const practiceState = usePracticeState((state) => state.practiceStatus);

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

      <div className="mt-20">
        <button
          className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
