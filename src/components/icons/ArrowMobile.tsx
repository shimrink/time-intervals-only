import { TArrowIconProps } from './types';

export const ArrowMobile = ({ direction = 'left' }: TArrowIconProps) => {
  return (
    <svg
      width='6'
      height='8'
      viewBox='0 0 6 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `rotate(${direction === 'right' ? 180 : 0}deg)` }}
    >
      <path
        d='M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178'
        stroke='#42567A'
        strokeWidth='2'
      />
    </svg>
  );
};
