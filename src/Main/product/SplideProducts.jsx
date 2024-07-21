import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SplideProducts = ({item}) => {
  return (
    <Splide aria-label="My Favorite Images"
    >
      <SplideSlide style={{display:'flex', justifyContent:'center'}}>
        <img src={item.imgFirst} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide style={{display: 'flex', justifyContent:'center'}}>
        <img src={item.imgSecond} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide style={{display:'flex', justifyContent:'center'}}>
        <img src={item.imgthird} alt="Image 2"/>
      </SplideSlide>
    </Splide>
  )
}

export default SplideProducts