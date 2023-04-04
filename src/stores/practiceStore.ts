import { create } from 'zustand';

interface Status {
  job:
    | 'gunbreaker'
    | 'darkknight'
    | 'whitemage'
    | 'scholar'
    | 'monk'
    | 'reaper'
    | 'dancer'
    | 'summoner';
  marker:
    | 'none'
    | 'attack1'
    | 'attack2'
    | 'attack3'
    | 'attack4'
    | 'chain1'
    | 'chain2';
}

interface StatusState {
  practiceStatus: Status[];
}

const defaultStatus: Status[] = [
  {
    job: 'gunbreaker',
    marker: 'none',
  },
  {
    job: 'darkknight',
    marker: 'none',
  },
  {
    job: 'whitemage',
    marker: 'none',
  },
  {
    job: 'scholar',
    marker: 'none',
  },
  {
    job: 'monk',
    marker: 'none',
  },
  {
    job: 'reaper',
    marker: 'none',
  },
  {
    job: 'dancer',
    marker: 'none',
  },
  {
    job: 'summoner',
    marker: 'none',
  },
];

const usePracticeState = create<StatusState>((set) => {
  return {
    practiceStatus: defaultStatus,
  };
});
