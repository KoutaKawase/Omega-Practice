export function AttackMarkerButton() {
  return (
    <div>
      <button
        type="button"
        className="block h-10 rounded border border-zinc-500 hover:bg-neutral-700"
      >
        <img
          src="https://cdn.raidplan.io/game/ffxiv/mark/mark_tar1.png"
          className="h-full max-w-full scale-90"
        />
      </button>
    </div>
  );
}
