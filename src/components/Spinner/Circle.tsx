import clsx from 'clsx';

import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';
import { useFadeUnmount } from '../../hooks';

import './Spinner.scss';

type TCircleProps = {
  title: string;
  index: number;
  rotateIndex: number;
  sectorLength: number;
  circleSize?: number;
  shift?: number;
};

export const Circle = ({
  title,
  index,
  rotateIndex,
  sectorLength,
  circleSize = 530,
  shift = 30,
}: TCircleProps) => {
  const { title: currentTitle, changeInterval } = useTimeIntervalsStore();
  const { isMount, isAnimate } = useFadeUnmount(title);

  return (
    <div
      className='circle-num-container'
      style={{
        transform: `translate(-50%, -50%) rotate(${
          sectorLength * (index - rotateIndex) + shift
        }deg) translateY(-${circleSize / 2}px) rotate(${-(
          sectorLength * (index - rotateIndex) +
          shift
        )}deg)`,
      }}
    >
      <div
        className={clsx(
          'circle-num',
          currentTitle === title && 'circle-num_active'
        )}
        onClick={() => changeInterval({ title })}
      >
        <span className='circle-num__num'>{index + 1}</span>
      </div>

      {isMount && (
        <span
          className='circle-num__text'
          style={{
            opacity: isAnimate ? 1 : 0,
          }}
        >
          {title}
        </span>
      )}
    </div>
  );
};
