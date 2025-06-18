import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { state } from '../../store/state';
import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';

import { TimeInterval } from '../TimeInterval';

import './Circle.scss';

export const Circle = ({ circleSize = 530, shift = 30 }) => {
  const { title, changeInterval } = useTimeIntervalsStore();
  const sectorLength = 360 / state.length;
  const prevIntervalRef = useRef(
    state.findIndex((item) => item.title === title)
  );
  const [rotateIndex, setRotateIndex] = useState(prevIntervalRef.current);
  const [prevTitle, setPrevTitle] = useState(title);

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

    // hide circle title
    setTimeout(() => {
      setPrevTitle(title);
    }, 300);
  }, [title]);

  return (
    <div
      className='circle-container'
      style={{ width: circleSize, height: circleSize }}
    >
      <TimeInterval />

      <div className='circle-back' />

      {state.map((s, i) => (
        <div
          key={s.title}
          className='circle-num-container'
          style={{
            transform: `translate(-50%, -50%) rotate(${
              sectorLength * (i - rotateIndex) + shift
            }deg) translateY(-${circleSize / 2}px) rotate(${-(
              sectorLength * (i - rotateIndex) +
              shift
            )}deg)`,
          }}
        >
          <div
            className={clsx(
              'circle-num',
              title === s.title && 'circle-num_active'
            )}
            onClick={() => changeInterval(s)}
          >
            <span className='circle-num__num'>{i + 1}</span>
          </div>

          {(prevTitle === s.title || s.title === title) && (
            <span
              className='circle-num__text'
              style={{
                opacity: s.title === prevTitle && s.title === title ? 1 : 0,
              }}
            >
              {s.title}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
