import { Circle } from './components/Circle';
import { CirclePagination } from './components/CirclePagination';
import { SliderFadeUnmount } from './components/Slider';
import { TimeInterval } from './components/TimeInterval';
import { Title } from './components/Title';

import { useContainerWidth } from './hooks';

import './App.scss';

export const App = () => {
  const { ref, isMobile } = useContainerWidth();

  return (
    <main ref={ref} className='main'>
      <Title />
      {isMobile && <TimeInterval />}
      <div className='line vertical' />
      <div className='line horizontal' />
      <CirclePagination isMobile={isMobile} />
      <SliderFadeUnmount isMobile={isMobile} />

      {!isMobile && <Circle />}
    </main>
  );
};
