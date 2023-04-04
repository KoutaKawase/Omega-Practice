export function MarkerButtons() {
  return (
    <div className="flex space-x-5">
      <div>
        <button
          type="button"
          className="block h-10 rounded border border-zinc-500 hover:bg-zinc-100"
        >
          <img
            src="https://cdn.raidplan.io/game/ffxiv/mark/mark_tar1.png"
            className="h-full max-w-full scale-90"
          />
        </button>
      </div>
      <div>
        <button
          type="button"
          className="block h-10 rounded border border-zinc-500 hover:bg-zinc-100"
        >
          <img
            src="https://cdn.raidplan.io/game/ffxiv/mark/mark_link1.png"
            className="h-full max-w-full scale-90"
          />
        </button>
      </div>
    </div>
  );
}
