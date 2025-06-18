import { useEffect, useState } from 'react';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useAnimatedNumber(to: number, duration = 600) {
  const [animatedValue, setAnimatedValue] = useState(to);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const from = animatedValue;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const value = from + (to - from) * eased;

      setAnimatedValue(value);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [to]);

  return Math.round(animatedValue);
}
