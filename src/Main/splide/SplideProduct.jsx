 import React, { useState } from 'react'
 import { SplideSlide } from '@splidejs/react-splide'
 import { dataBase } from '../../data/dataSlider'
import Product from './Product'
 
 const SplideProduct = ({item}) => {

   return (
    <div className="splide__slide-first">
            <div className="splide__slide-first-inside">
                <p className="splide__top-description">
                    {item.header__description}
                </p>
                <h1 className="splide__block-header">
                    {item.main__header} <span>{item.secondary__header}</span>
                </h1>
                <p className="splide__end-description">
                    {item.footer__description}
                </p>
                <button className="splide__button-more">
                    {item.button}
                </button>
            </div>
            <div className="splide__block-img">
                <img src={item.img__first} className="splide__img-second" alt="image" />
                <img src={item.img__second} className="splide__img-first" alt="image" />
            </div>
    </div>
    
   )
 }
 
 export default SplideProduct