import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import { SliderNavArrow } from '../icons';
import { useFadeUnmount } from '../../hooks';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';

type TSliderProps = {
  title: string;
  data: {
    year: number;
    text: string;
  }[];
  isMobile: boolean;
};

export const Slider = ({ title, data, isMobile }: TSliderProps) => {
  const { isMount, isAnimate } = useFadeUnmount(title);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <div
      className='fade-unmount'
      style={{
        transform: `translateY(${isAnimate ? 0 : 40}px)`,
        opacity: isAnimate ? 1 : 0,
      }}
    >
      <div className='slider-container'>
        <div className='slider-line line horizontal' />

        <button ref={prevRef} className='swiper-button-custom'>
          <SliderNavArrow direction='left' />
        </button>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={!isMobile ? 80 : 25}
          freeMode
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={
            !isMobile
              ? false
              : {
                  clickable: true,
                }
          }
          modules={[FreeMode, Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((a) => (
            <SwiperSlide>
              <h2 className='swiper-slide__year'>{a.year}</h2>
              <p className='swiper-slide__text'>{a.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className='swiper-button-custom'>
          <SliderNavArrow />
        </button>
      </div>
    </div>
  );
};
