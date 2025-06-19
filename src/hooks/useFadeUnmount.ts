import { useEffect, useState } from 'react';

import { useTimeIntervalsStore } from '../store/useTimeIntervalsStore';

export function useFadeUnmount(currentTitle: string) {
  const { title } = useTimeIntervalsStore();
  const [prevTitle, setPrevTitle] = useState(title);

  useEffect(() => {
    setTimeout(() => {
      setPrevTitle(title);
    }, 600);
  }, [title]);

  return {
    isMount: currentTitle === prevTitle || currentTitle === title,
    isAnimate: currentTitle === prevTitle && currentTitle === title,
  };
}
