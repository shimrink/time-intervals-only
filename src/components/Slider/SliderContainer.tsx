import { state } from '../../store/state';
import { Slider } from './Slider';

import './Slider.scss';

export const SliderContainer = ({ isMobile }: { isMobile: boolean }) => {
  return state.map((s) => (
    <Slider
      key={s.title}
      title={s.title}
      data={s.achievements}
      isMobile={isMobile}
    />
  ));
};
