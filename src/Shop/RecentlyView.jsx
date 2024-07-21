import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';



const RecentlyView = () => {

    const secondSelector = useSelector((item) => item.products.recentlyViewed)
    const [state, setState] = useState(false)

    const func = () => {
        if(secondSelector.length >= 5) {
            setState(true)
            const a = document.querySelectorAll('swiper-slide .recently__block-items')
            console.log(a[5])
        }else {
            setState(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', func)
        return () => {
            document.removeEventListener('click', func)
        }
    }, )

  return (
    <section>
        <div className="container">
            <div className="recently__main-block">
                <h2 className="recently__header-product">Recently View</h2>
                <div className='recently__block-list-product'>
                    {
                        state ? 
                        <Splide aria-label="My Favorite Images"
                        options={ {
                            rewind: true,
                            width: '100%',
                            gap   : '1rem',
                            pagination: true,
                            perPage: 5
                          } } 
                      >
                            {
                                secondSelector.map((item) => (
                                    <SplideSlide>
                                        <Link to={`/Shop/${item.id}`}>
                                            <div className='recently__block-items'>
                                                <div className='recently__block-image'>
                                                    <img src={item.img} className='recently__img' alt="" />
                                                </div>
                                                <h2 className='recently__block-product-header'>{item.title}</h2>
                                                <p className='recently__block-description'>${item.price}</p>
                                            </div>
                                        </Link>
                                    </SplideSlide>
                                ))
                            }
                        </Splide>
                         :  secondSelector.map((item) => (
                            <Link to={`/Shop/${item.id}`}>
                                <div className='recently__block-items'>
                                    <div className='recently__block-image'>
                                        <img src={item.img} className='recently__img' alt="" />
                                    </div>
                                    <h2 className='recently__block-product-header'>{item.title}</h2>
                                    <p className='recently__block-description'>${item.price}.00</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentlyView