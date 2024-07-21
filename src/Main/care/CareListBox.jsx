import React, { useEffect, useState } from 'react'
import CareFirstComponents from './CareFirstComponents'
import CareSecondComponents from './CareSecondComponents'
import CareThirdComponents from './CareThirdComponents'
import InputComponents from './InputComponents'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";

const CareListBox = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleWindowResize);
      
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, );

  return (
    <>
    {
      windowWidth > 950 ? <ul className="care__list-box">
      <CareFirstComponents />
      <CareSecondComponents />
      <CareThirdComponents />
      <InputComponents />
  </ul> : 
                <> <Swiper
                  modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={true}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                ><ul className="care__list-box">
                    <SwiperSlide>
                      <CareFirstComponents />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CareSecondComponents />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CareThirdComponents />
                    </SwiperSlide>
                    </ul>
              </Swiper>
              <InputComponents /></>
    }
    </>
  )
}

export default CareListBox