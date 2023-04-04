import { create } from 'zustand';

export type MarkerType =
  | 'none'
  | 'tar1'
  | 'tar2'
  | 'tar3'
  | 'tar4'
  | 'link1'
  | 'link2';

export interface Status {
  job:
    | 'gunbreaker'
    | 'darkknight'
    | 'whitemage'
    | 'scholar'
    | 'monk'
    | 'reaper'
    | 'dancer'
    | 'summoner';
  marker: MarkerType;
}

interface StatusState {
  practiceStatus: Status[];
  assignMarker: (index: StatusIndex, marker: MarkerType) => void;
}

export type StatusIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const defaultStatus: Status[] = [
  {
    job: 'gunbreaker',
    marker: 'tar2',
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

export const usePracticeState = create<StatusState>((set, get) => {
  return {
    practiceStatus: defaultStatus,
    assignMarker: (index: StatusIndex, marker: MarkerType) => {
      set((state) => {
        const deepCopied: Status[] = structuredClone(state.practiceStatus);
        deepCopied[index].marker = marker;

        return { ...state, practiceStatus: deepCopied };
      });
    },
  };
});
