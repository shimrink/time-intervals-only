import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';

import { useAnimatedNumber } from '../../hooks';

import './TimeInterval.css';

export const TimeInterval = () => {
  const { timeInterval } = useTimeIntervalsStore();
  const start = useAnimatedNumber(timeInterval.start);
  const end = useAnimatedNumber(timeInterval.end);

  return (
    <div className='interval'>
      <span className='interval-num interval-num_start'>{start}</span>
      <span className='interval-num interval-num_end'>{end}</span>
    </div>
  );
};
