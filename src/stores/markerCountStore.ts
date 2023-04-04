import { create } from 'zustand';

interface MarkerCountStore {
  tar: number;
  link: number;
  incrementAttack: () => void;
}

export const useMarkerCountStore = create<MarkerCountStore>((set) => ({
  tar: 1,
  link: 1,
  incrementAttack: () => {
    set((state) => {
      console.log(state.tar);

      const updated = { ...state, tar: state.tar++ };

      return { ...state, tar: state.tar++ };
    });
  },
}));
