import React, { useState } from 'react'
import ItemShopSecond from './ItemShopSecond'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const ItemShopImageMobile = ({item}) => {

  return (
    <div className='item__block-slider-image-mob'>
        <Splide>
            {
                item.img.map((value) => (
                    <SplideSlide 
                    options={ {
                        rewind: true,
                        width: '100%',
                        gap   : '1rem',
                        pagination: true,
                        perPage: 1
                      } } >
                        <ItemShopSecond value={value} />
                    </SplideSlide>
                ))
            }
        </Splide>
    </div>
  )
}

export default ItemShopImageMobile