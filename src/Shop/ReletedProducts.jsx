import React, { useEffect, useState } from 'react'
import { relatedProduct } from '../data/dataBaseRelated'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleClickRecentlyViews } from '../Slices/SliceProducts';

const ReletedProducts = ({item}) => {

    const [splideArrows, setSplideArrows] = useState(false)
    const selector = useSelector((item) => item.products.filteredItems)
    const dispatch = useDispatch()
    // const handleClickItemsAdd = () => {
    //     const b = {
    //         id: item.id,
    //         img: item.imgSolo,
    //         title: item.title,
    //         price: item.price
    //       }
    //     dispatch(handleClickRecentlyViews(b))
    // }

    // const a = window.location.pathname === '/Favourite' ? handleClickItemsAdd() : ()=> (console.log('Hello'))

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

      const handleUserMouseEnter = () => {
        setSplideArrows(true)
      } 

      const handleUserMouseLeave = () => {
        setSplideArrows(false)
      }

      // console.log(splideArrows)

      // console.log(window.location.pathname)
      {/*onClick={handleClickItemsAdd}*/}
  return (
    <section>
        <div className="container">
            <div className='related__main'>
                <h2 className="related__header">Releted Products</h2>
                <div className="related__block-main">
                    <div onMouseEnter={handleUserMouseEnter}
                     onMouseLeave={handleUserMouseLeave} className={ splideArrows ? 'related__product-block-active' : 'related__product-block'}>
                        <Splide aria-label="My Favorite Images"
                            options={ {
                                rewind: true,
                                width: '100%',
                                gap   : '1rem',
                                pagination: true,
                                perPage: (windowWidth > 1300) ? 5 : (windowWidth > 800 && windowWidth < 1300) ? 4 : (windowWidth > 460 && windowWidth < 800) ? 3 : 2
                              } } 
                          >
                        {
                            relatedProduct.map((item) => (
                                <SplideSlide>
                                    <Link to={`/Shop/${item.id}`}>
                                        <div className='product__splide-product-inside'>
                                            <div className='product__splide-product-block-img'>
                                                <img src={item.imgSolo} className='product__splide-product-image' alt="" />
                                            </div>
                                            <h2 className='product__splide-product-header'>{windowWidth > 650 ? item.title : item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}</h2>
                                            <p className="product__splide-product-description">{item.price}</p>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            ))
                        }
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReletedProducts