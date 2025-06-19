import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';
import { state } from '../../store/state';
import { useAnimatedNumber } from '../../hooks';

import './TimeInterval.scss';

export const TimeInterval = () => {
  const { title } = useTimeIntervalsStore();
  const currentState = state.find((item) => item.title === title);

  if (!currentState) {
    return;
  }

  const start = useAnimatedNumber(currentState.timeInterval.start);
  const end = useAnimatedNumber(currentState.timeInterval.end);

  return (
    <div className='interval'>
      <span className='interval-num interval-num_start'>{start}</span>
      <span className='interval-num interval-num_end'>{end}</span>
    </div>
  );
};
