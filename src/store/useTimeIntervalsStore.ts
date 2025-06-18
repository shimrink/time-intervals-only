import { create } from 'zustand';

import type { TTimeInterval } from '../types';

type TTimeIntervalStore = TTimeInterval & {
  changeInterval: (data: TTimeInterval) => void;
};

export const useTimeIntervalsStore = create<TTimeIntervalStore>((set) => ({
  title: 'Литература',
  timeInterval: { start: 700, end: 1320 },

  changeInterval: (data) => {
    set(data);
  },
}));
