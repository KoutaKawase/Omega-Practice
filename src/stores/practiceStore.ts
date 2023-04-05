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
  tarCount: number;
  linkCount: number;
  assignMarker: (index: StatusIndex, marker: MarkerType) => void;
  incrementTar: () => void;
}

export type StatusIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

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

function existsTar4(statuses: Status[]) {
  return statuses.some((status) => status.marker === 'tar4');
}

export const usePracticeStore = create<StatusState>((set, get) => {
  return {
    practiceStatus: defaultStatus,
    tarCount: 1,
    linkCount: 1,
    assignMarker: (index: StatusIndex, marker: MarkerType) => {
      const statuses = get().practiceStatus;

      if (existsTar4(statuses)) return;

      set((state) => {
        const deepCopied: Status[] = structuredClone(state.practiceStatus);
        deepCopied[index].marker = marker;

        return { ...state, practiceStatus: deepCopied };
      });
    },
    incrementTar: () => {
      if (get().tarCount >= 4) {
        return;
      }

      set((state) => {
        return { ...state, tarCount: state.tarCount + 1 };
      });
    },
  };
});
