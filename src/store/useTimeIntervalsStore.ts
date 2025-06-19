import { create } from 'zustand';

import type { TTimeInterval } from '../types';

type TTimeIntervalStore = TTimeInterval & {
  changeInterval: (data: TTimeInterval) => void;
};

export const useTimeIntervalsStore = create<TTimeIntervalStore>((set) => ({
  title: 'Литература',

  changeInterval: (data) => {
    set(data);
  },
}));
