import { MarkerType } from '../stores/practiceStore';

interface Props {
  marker: MarkerType;
}

export function Marker({ marker }: Props) {
  return (
    <div className="h-10 w-10">
      <img
        src={
          marker === 'none'
            ? ''
            : `https://cdn.raidplan.io/game/ffxiv/mark/mark_${marker}.png`
        }
        className="h-full max-w-full"
      />
    </div>
  );
}
