import { usePracticeStore } from '../stores/practiceStore';

export function ResetButton() {
  const [resetMarker, changeDebuffs] = usePracticeStore((state) => [
    state.resetMarker,
    state.changeDebuffs,
  ]);

  function handleResetClick() {
    resetMarker();
    changeDebuffs();
  }
  return (
    <div className="mt-20">
      <button
        className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="button"
        onClick={() => handleResetClick()}
      >
        RESET
      </button>
    </div>
  );
}
