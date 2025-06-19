import { useEffect, useRef, useState } from 'react';

import { state } from '../../store/state';
import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';
import { TimeInterval } from '../TimeInterval';
import { Circle } from './Circle';

import './Spinner.scss';

export const Spinner = ({ circleSize = 530, shift = 30 }) => {
  const { title } = useTimeIntervalsStore();
  const sectorLength = 360 / state.length;
  const prevIntervalRef = useRef(
    state.findIndex((item) => item.title === title)
  );
  const [rotateIndex, setRotateIndex] = useState(prevIntervalRef.current);

  useEffect(() => {
    const newInterval = state.findIndex((item) => item.title === title);
    const prevInterval = prevIntervalRef.current;
    prevIntervalRef.current = newInterval;

    if (newInterval > prevInterval) {
      if (state.length / 2 >= newInterval - prevInterval) {
        setRotateIndex((prev) => prev + newInterval - prevInterval);
      } else {
        setRotateIndex(
          (prev) => prev - (state.length + prevInterval - newInterval)
        );
      }
    } else {
      if (state.length / 2 <= prevInterval - newInterval) {
        setRotateIndex(
          (prev) => prev + newInterval - prevInterval + state.length
        );
      } else {
        setRotateIndex((prev) => prev + newInterval - prevInterval);
      }
    }
  }, [title]);

  return (
    <div
      className='circle-container'
      style={{ width: circleSize, height: circleSize }}
    >
      <TimeInterval />

      <div className='circle-back' />

      {state.map((s, i) => (
        <Circle
          key={s.title}
          title={s.title}
          index={i}
          rotateIndex={rotateIndex}
          sectorLength={sectorLength}
        />
      ))}
    </div>
  );
};
