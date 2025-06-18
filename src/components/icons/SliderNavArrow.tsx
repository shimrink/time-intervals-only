import { TArrowIconProps } from './types';

export const SliderNavArrow = ({ direction = 'right' }: TArrowIconProps) => {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `rotate(${direction === 'left' ? 180 : 0}deg)` }}
    >
      <path d='M1 1L6 6L1 11' stroke='#3877EE' strokeWidth='2' />
    </svg>
  );
};
