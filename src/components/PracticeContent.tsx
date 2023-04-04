import { RowContent } from './RowContent';

export function PracticeContent() {
  return (
    <div className="flex flex-col items-center pt-10 ">
      <div>
        <RowContent job="gunbreaker" />
        <RowContent job="darkknight" />
        <RowContent job="whitemage" />
        <RowContent job="scholar" />
        <RowContent job="monk" />
        <RowContent job="reaper" />
        <RowContent job="dancer" />
        <RowContent job="summoner" />
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
