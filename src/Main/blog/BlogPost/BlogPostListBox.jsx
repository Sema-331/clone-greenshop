import React, { useEffect, useState } from 'react'
import { dataBlogPostListBox } from '../../../data/dataBlogPostListBox'
import { useDispatch } from 'react-redux'
import { handleCountOrderNumber } from '../../../Slices/SliceProducts'
import { SplideSlide } from '@splidejs/react-splide'
import SplideProduct from '../../splide/SplideProduct'
import Splide from '@splidejs/splide'
import { Link } from 'lucide-react'
import button from './../../../image/02.png'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const BlogPostListBox = () => {

    const dispatch = useDispatch()
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
    <ul className="blog__list-box">
        {
            windowWidth > 699 ? <>{
                dataBlogPostListBox.map((item) => (
                    <li key={item.id} className="blog__list-item">
                        <div className="blog__post-inside">
                            <div className="blog__post-img">
                                <img src={item.img} alt="image" />
                            </div>
                            <div className="blog__post-description-inside">
                                <p className="blog__post-top-description">
                                    {item.description}
                                </p>
                                <h2 className="blog__post-header-inside">
                                    {item.header}
                                </h2>
                                <p className="blog__post-bottom-description">
                                    {item.descriptionSecond} 
                                </p>
                                <button onClick={() => dispatch(handleCountOrderNumber())} className="blog__post-read-more-btn">
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    </li>
                ))
            }</> : <> <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >{
                dataBlogPostListBox.map((item) => (
                    <>
                        <SwiperSlide><li key={item.id} className="blog__list-item">
                        <div className="blog__post-inside">
                            <div className="blog__post-img">
                                <img src={item.img} alt="image" />
                            </div>
                            <div className="blog__post-description-inside">
                                <p className="blog__post-top-description">
                                    {item.description}
                                </p>
                                <h2 className="blog__post-header-inside">
                                    {item.header}
                                </h2>
                                <p className="blog__post-bottom-description">
                                    {item.descriptionSecond} 
                                </p>
                                <button onClick={() => dispatch(handleCountOrderNumber())} className="blog__post-read-more-btn">
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    </li></SwiperSlide>
                    </>
                ))
            }</Swiper></>
        }
    </ul>
  )
}

export default BlogPostListBox