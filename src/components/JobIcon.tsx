interface Props {
  job: string;
}

export function JobIcon({ job }: Props) {
  return (
    <div className="h-10">
      <img
        src={`https://xivapi.com/cj/companion/${job}.png`}
        className="h-full max-w-full"
      />
    </div>
  );
}
