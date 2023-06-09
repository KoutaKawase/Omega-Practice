import { create } from 'zustand';
import { debuffTemplates } from './debuffTemplates';

export type MarkerType =
  | 'none'
  | 'tar1'
  | 'tar2'
  | 'tar3'
  | 'tar4'
  | 'link1'
  | 'link2';

export type DynamissBuff = 1 | 2;
export type DiceType = 0 | 1 | 2;
export type HelloWorldType = '' | 'near' | 'far';

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
  dynamis: DynamissBuff;
  dice: DiceType;
  helloWorld: HelloWorldType;
}

interface StatusState {
  practiceStatus: Status[];
  markerCount: number;
  tarCount: number;
  linkCount: number;
  isRunngingTimer: boolean;
  timer: number;
  assignMarker: (index: StatusIndex, marker: MarkerType) => void;
  incrementTar: () => void;
  incrementLink: () => void;
  resetTimerAndMarker: () => void;
  changeDebuffs: () => void;
  setIsRunningTimer: (isRunning: boolean) => void;
  setPracticeTimer: () => void;
}

export type StatusIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const LINK_COUNT_LIMIT = 3;
export const TAR_COUNT_LIMIT = 5;
const DEFAULT_TAR_COUNT = 1;
const DEFAULT_LINK_COUNT = 1;

const defaultStatus: Status[] = [
  {
    job: 'gunbreaker',
    marker: 'none',
    dynamis: 1,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'darkknight',
    marker: 'none',
    dynamis: 2,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'whitemage',
    marker: 'none',
    dynamis: 2,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'scholar',
    marker: 'none',
    dynamis: 1,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'monk',
    marker: 'none',
    dynamis: 1,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'reaper',
    marker: 'none',
    dynamis: 2,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'dancer',
    marker: 'none',
    dynamis: 2,
    dice: 0,
    helloWorld: '',
  },
  {
    job: 'summoner',
    marker: 'none',
    dynamis: 1,
    dice: 0,
    helloWorld: '',
  },
];

export const usePracticeStore = create<StatusState>((set, get) => {
  return {
    practiceStatus: defaultStatus,
    markerCount: 0,
    tarCount: DEFAULT_TAR_COUNT,
    linkCount: DEFAULT_LINK_COUNT,
    isRunngingTimer: false,
    timer: 0,
    assignMarker: (index: StatusIndex, marker: MarkerType) => {
      set((state) => {
        const deepCopied: Status[] = structuredClone(state.practiceStatus);
        deepCopied[index].marker = marker;

        return {
          ...state,
          practiceStatus: deepCopied,
          markerCount: state.markerCount + 1,
        };
      });
      set((state) => {
        if (state.markerCount === 6) {
          return { ...state, isRunngingTimer: false };
        }
        return { ...state };
      });
    },
    incrementTar: () => {
      if (get().tarCount >= 5) {
        return;
      }

      set((state) => {
        return { ...state, tarCount: state.tarCount + 1 };
      });
    },
    incrementLink: () => {
      if (get().linkCount >= 3) {
        return;
      }

      set((state) => {
        return { ...state, linkCount: state.linkCount + 1 };
      });
    },
    resetTimerAndMarker: () => {
      set((state) => {
        const deepCopied: Status[] = structuredClone(state.practiceStatus);
        deepCopied.forEach((status) => (status.marker = 'none'));

        return {
          ...state,
          practiceStatus: deepCopied,
          tarCount: DEFAULT_TAR_COUNT,
          linkCount: DEFAULT_LINK_COUNT,
          timer: 0,
          markerCount: 0,
        };
      });
    },
    changeDebuffs: () => {
      set((state) => {
        const copiedPracticeStatus: Status[] = structuredClone(
          state.practiceStatus
        );
        const newDebuff =
          debuffTemplates[Math.floor(Math.random() * debuffTemplates.length)];

        for (let i = 0; i < copiedPracticeStatus.length; i++) {
          const dynamis = newDebuff[i].dynamis;
          const dice = newDebuff[i].dice;
          const helloWorld = newDebuff[i].helloWorld;

          copiedPracticeStatus[i] = {
            ...copiedPracticeStatus[i],
            dynamis,
            dice,
            helloWorld,
          };
        }

        return { ...state, practiceStatus: copiedPracticeStatus };
      });
    },
    setIsRunningTimer: (isRunning: boolean) => {
      set((state) => {
        return { ...state, isRunngingTimer: isRunning };
      });
    },
    setPracticeTimer: () => {
      set((state) => {
        return { ...state, timer: state.timer + 1 };
      });
    },
  };
});
