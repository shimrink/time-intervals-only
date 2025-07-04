import { useTimeIntervalsStore } from '../../store/useTimeIntervalsStore';
import { state } from '../../store/state';

import { Arrow, ArrowMobile } from '../icons';

import './CirclePagination.scss';

export const CirclePagination = ({ isMobile }: { isMobile: boolean }) => {
  const { title, changeInterval } = useTimeIntervalsStore();
  const currentInterval = state.findIndex((item) => item.title === title);

  const backClick = () => {
    if (currentInterval > 0) {
      changeInterval({ title: state[currentInterval - 1].title });
    }
  };

  const nextClick = () => {
    if (currentInterval < state.length) {
      changeInterval({ title: state[currentInterval + 1].title });
    }
  };

  return (
    <div className='circle-pagination'>
      <div className='circle-pagination__counter'>
        0{currentInterval + 1}/0{state.length}
      </div>
      <div className='circle-pagination__arrows'>
        <button
          className='circle-pagination__arrow'
          onClick={backClick}
          disabled={currentInterval === 0}
        >
          {!isMobile ? <Arrow /> : <ArrowMobile />}
        </button>
        <button
          className='circle-pagination__arrow'
          onClick={nextClick}
          disabled={currentInterval === state.length}
        >
          {!isMobile ? (
            <Arrow direction='right' />
          ) : (
            <ArrowMobile direction='right' />
          )}
        </button>
      </div>
    </div>
  );
};
