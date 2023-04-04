import { FixedDebuff } from './FixedDebuff';

export function DebufContainer() {
  return (
    <div className="ml-1 flex w-52">
      <div className="relative h-10">
        <img
          src="https://xivapi.com/i/015000/015145_hr1.png"
          className="h-full max-w-full scale-75"
        />
        <span className="absolute -top-1 left-5 text-white">2</span>
      </div>
      <div className="h-10">
        <img
          src="https://xivapi.com/i/015000/015401_hr1.png"
          className="h-full max-w-full scale-75"
        />
      </div>
      <div className="h-10">
        <img
          src="https://xivapi.com/i/015000/015141_hr1.png"
          className="h-full max-w-full scale-75"
        />
      </div>
      <FixedDebuff />
    </div>
  );
}
