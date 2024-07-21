import React from 'react'

const Product = ({item}) => {
  return (
    <div class="splide__slide-first">
        <div class="splide__slide-first-inside">
            <p class="splide__top-description">
                {item.header__description}
            </p>
            <h1 class="splide__block-header">
                {item.main__header} <span>{item.secondary__header}</span>
            </h1>
            <p class="splide__end-description">
                {item.footer__description}
            </p>
            <button class="splide__button-more">
                {item.button}
            </button>
        </div>
        <div class="splide__block-img">
            <img src={item.img__first} class="splide__img-second" alt="image" />
            <img src={item.img__second} class="splide__img-first" alt="image" />
        </div>
    </div>
  )
}

export default Product