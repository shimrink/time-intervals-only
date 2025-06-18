import { useEffect, useState } from 'react';

import { state } from '../../store/state';
import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';
import { Slider } from './Slider';

import './Slider.css';

export const SliderFadeUnmount = ({ isMobile }: { isMobile: boolean }) => {
  const { title } = useTimeIntervalsStore();
  const [prevTitle, setPrevTitle] = useState(title);

  useEffect(() => {
    setTimeout(() => {
      setPrevTitle(title);
    }, 600);
  }, [title]);

  return state.map(
    (s) =>
      (prevTitle === s.title || s.title === title) && (
        <div
          key={s.title}
          className='fade-unmount'
          style={{
            transform: `translateY(${
              s.title === prevTitle && s.title === title ? 0 : 40
            }px)`,
            opacity: s.title === prevTitle && s.title === title ? 1 : 0,
          }}
        >
          <Slider data={s.achievements} isMobile={isMobile} />
        </div>
      )
  );
};
