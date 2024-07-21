import React, { useEffect, useState } from 'react'
import SizeS from "../Main/product/sizesComponents/SizeS"
import { X } from "lucide-react"
import { deleteFavourites, handleClickRemoveFavourites, toggleCompleteRemove, toggleStatus, toggleStatusFalse } from "../Slices/SliceProducts"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SplideSlide, Splide } from '@splidejs/react-splide'
import favouritesNull from './../image/favouritesNull.svg'
import Add from './Add'

const FavouritesProductActive = () => {

    const dispatch = useDispatch()
    const selector = useSelector((item) => item.products.favouritesItem)
    const [state, setState] = useState(false)
    const [lengthCount, setLengthCount] = useState(true)

    useEffect(() => {
        if(selector.length === 0) {
          setState(true)
          document.querySelector('.favourites__block-product-active-in-active').style.justifyContent = 'center'
        } else if(selector.length >= 1 && selector.length <= 3) {
          setState(false)
          document.querySelector('.favourites__block-product-active-in')
        } else if(selector.length >= 4) {
            setLengthCount(false)
        }
      }, [selector])

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
    <div className={selector.length < 4 ? "favourites__block-product-active-in-active" : "favourites__block-product-active-in"}>
            
           {
                state ? <div className='favourites__block-image-description'>
                        <div className='favourites__block-image-heart'>
                            <img src={favouritesNull} className='favourites__image-null-products' alt="" />
                        </div>
                        <div className='favourites__block-description-hearts'>
                            <h2 className='favourites__head-block'>There are no products in favorites</h2>
                            <p className='favourites__description-block'>To select items, go to the catalog</p>
                            <Link to='/'>
                                <button className='favourites__button-link-block'>Go to the catalog</button>
                            </Link>
                        </div>
                    </div> :
                    <>
                        {
                            selector.length < 4 ?                                 <> {
                                selector.map((item) => (
                                        <div key={item.id} className={selector.length < 4 ? 'favourites__block-product-active-inside-act' : 'favourites__block-product-active-inside'}>
                                            <Link style={{display: 'flex', flexDirection: 'column'}} to={`/Shop/${item.id}`}> 
                                                <div className="favourites__block-product-image">
                                                    <img className="favourites__image" src={item.img} alt="" />
                                                </div>
                                                <h3 className="favourites__title">{item.title}</h3>
                                                <p className="favourites__price">${item.price}.00</p>
                                                {/* <div className="favourites__sizes">
                                                    <SizeS />
                                                </div> */}
                                                    </Link>
                                                <div className="favourites__block-button-product">
                                                    {/* <button className="favourites__btn-add-basket">ADD TO BASKET</button> */}
                                                    <Link to='/Basket'>
                                                        <Add item={item} />
                                                    </Link>
                                                </div>
                                                <button onClick={() => {dispatch(handleClickRemoveFavourites(item.id))
                                                dispatch(toggleStatus(item.id))
                                                }
                                                } className="favourites__button-remove-product">
                                                    <X />
                                                </button>       
                                        </div>
                                ))
                            }</> : <Splide aria-label="My Favorite Images"
                            options={ {
                                rewind: true,
                                width: '100%',
                                gap   : '1rem',
                                pagination: true,
                                perPage: (windowWidth > 1300) ? 4 : (windowWidth > 900 & windowWidth < 1300) ? 3 : (windowWidth < 900) ? 2 : 3
                              } } 
                          >
                                {
                                    selector.map((item) => (
                                        <SplideSlide>
                                            <div key={item.id} style={{width: '100%',}} className="favourites__block-product-active-inside">
                                                <Link style={{display: 'flex', flexDirection: 'column'}} to={`/Shop/${item.id}`}> 
                                                    <div className="favourites__block-product-image">
                                                        <img className="favourites__image" src={item.img} alt="" />
                                                    </div>
                                                    <h3 className="favourites__title">{item.title}</h3>
                                                    <p className="favourites__price">${item.price}.00</p>
                                                    {/* <div className="favourites__sizes">
                                                        <SizeS />
                                                    </div> */}
                                                        </Link>
                                                    <div className="favourites__block-button-product">
                                                        {/* <button className="favourites__btn-add-basket">ADD TO BASKET</button> */}
                                                        <Link to='/Basket'>
                                                            <Add item={item} />
                                                        </Link>
                                                    </div>
                                                    <button onClick={() => {dispatch(handleClickRemoveFavourites(item.id))
                                                    dispatch(toggleStatus(item.id))
                                                    }
                                                    } className="favourites__button-remove-product">
                                                        <X />
                                                    </button>       
                                            </div>
                                        </SplideSlide>
                                    ))
                                }
                            </Splide>
                        }
                    </>
        }
    </div>
  )
}

export default FavouritesProductActive