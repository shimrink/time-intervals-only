import { useEffect, useRef, useState } from 'react';

export function useContainerWidth(breakpoint: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setIsMobile(width < breakpoint);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [breakpoint]);

  return { ref, isMobile };
}
