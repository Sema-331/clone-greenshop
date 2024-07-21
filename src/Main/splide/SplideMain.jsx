import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import SplideProduct from './SplideProduct';
import { dataBase } from '../../data/dataSlider';

const SplideMain = () => {

    const [product, setProduct] = useState(dataBase)

    const [valueArrows, setValueArrows] = useState(false)

    const handleUserMouseEnter = () => {
        setValueArrows(true)
      } 

      const handleUserMouseLeave = () => {
        setValueArrows(false)
      }

  return (
    <section className="splide">
        <div className="container">
            <div onMouseLeave={handleUserMouseLeave} onMouseEnter={handleUserMouseEnter} className={ valueArrows ? 'splide__slider-active' : "splide__slider"}>
                <Splide> 
                {
                        product.map((item) => (
                            <SplideSlide key={item.id}>
                                <SplideProduct item={item} />
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </div>
    </section>
  ) 
}   

export default SplideMain