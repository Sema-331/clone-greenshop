import { X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { relatedProduct } from '../data/dataBaseRelated'
import { useDispatch, useSelector } from 'react-redux'
import { handleClickRecentlyViews, handleClickRemoveItemModal, stateHoverProductFalse } from '../Slices/SliceProducts'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ConfirmProductAdd = ({setConfirmProductAdd, ConfirmProductAdd, item}) => {

    const ref = useRef()
    const selector = useSelector((item) => item.products.modalConfirmProductAdd)
    const dispatch = useDispatch()

    const handleCloseModal = (e) => {
        setConfirmProductAdd(false)
        dispatch(handleClickRemoveItemModal())
        document.body.style.overflowY = 'auto'
    }

    const handleClickItemsAdd = () => {
        const b = { 
            id: item.id,
            img: item.imgSolo,
            title: item.title,
            price: item.price
          }
          document.body.style.overflowY = 'auto'
        dispatch(handleClickRecentlyViews(b))
    }

    const handleClickContinueBuyProduct = () => {
        document.body.style.overflowY = 'auto'
        dispatch(handleClickRemoveItemModal())
        setConfirmProductAdd(false)
    }

    const handleContinueBasket = () => {
        document.body.style.overflowY = 'auto'
        dispatch(handleClickRemoveItemModal())
    }

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

    // const notify = () => toast.info("Register or log in to your personal account");
    const truncateString = (s, w) => s.length > w ? s.slice(0, w) + "..." : s;

    const handleClickOpenSearch = (e) => {
        if(ref.current && ref.current.contains(e.target)) {
            console.log(true)
        } else if(ref.current && !ref.current.contains(e.target)) {
            console.log(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOpenSearch)
        return () => {
            document.removeEventListener('click', handleClickOpenSearch)
        }
    }, ['product__block-modal-main-confirm'])

  return (
    <>
    <div ref={ref} className='product__block-modal-main-confirm'>
        <h2 className='product__block-modal-header'>The product has been added to the cart</h2>
        <div className='product__block-array-items'>
            {
                selector.map((item) => (
                    <div className='product__block-array-items-inside'>
                        <div className='product__array-block-image'>
                            <img className='product__array-item-image' src={item.img} alt="" />
                            <div className='product__blokc-array-item-description'>
                                <h3 className='product__array-item-header'>{item.title}</h3>
                                <div className='product__block-array-identificatore'>
                                    <p className='product__array-name-identificatore'>SKU:</p>
                                    <p className='product__array-item-identificatore'>{item.sku}</p>
                                </div>
                                <div className='product__block-array-stars'>
                                    <p className='product__description-block-star'>19 Customer Review</p>
                                    <div className='product__block-main-stars'>
                                        {
                                            item.star.map((value) => <img className='product__star-value' src={value} />)
                                        }
                                    </div>
                                </div>
                                <div className="product__block-price-count-ada">
                                    <div className='product__block-array-price'>
                                        <p className='product__array-item-price-name'>Price:</p>
                                        <p className='product__array-item-price'>${item.price}.00</p>
                                    </div>
                                    <div className='product__block-count-block'>
                                        <p className='product__item-array-count-name'>Count: </p>
                                        <p className='product__array-item-count'>{item.count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product__block-price-count">
                            <div className='product__block-array-price'>
                                <p className='product__array-item-price-name'>Price:</p>
                                <p className='product__array-item-price'>${item.price}.00</p>
                            </div>
                            <div className='product__block-count-block'>
                                <p className='product__item-array-count-name'>Count: </p>
                                <p className='product__array-item-count'>{item.count}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="product__block-useful-items">
            <h2 className="product__header-useful-item">
                You may find it useful
            </h2>
            <div>
                <Splide ariaLabel="My Favorite Images"
                    options={ {
                        rewind: true,
                        width: '100%',
                        gap   : '1rem',
                        pagination: true,
                        perPage: windowWidth > 1300 ? 4 : 3 
                      } } 
                  >
                {
                    relatedProduct.map((item) => (
                        <SplideSlide>
                            <Link to={`/Shop/${item.id}`}>
                                <div onClick={handleClickItemsAdd} className='product__splide-product-inside'>
                                    <div className='product__splide-product-block-img'>
                                        <img src={item.imgSolo} className='product__splide-product-image' alt="" />
                                    </div>
                                    <h2 className='product__splide-product-header'>{ windowWidth > 380 ? item.title : item.title.slice(0, 7) + "..."}</h2>
                                    <p className="product__splide-product-description">{item.price}</p>
                                </div>
                            </Link>
                        </SplideSlide>
                    ))
                }
                </Splide>
            </div>
        </div>
        <button onClick={() => {
            dispatch(stateHoverProductFalse())
            handleCloseModal()
        }} className='product__confirm-block-close'><X/></button>
        <div className="product__block-navigation-button">
            <Link to='/'>
                <button onClick={handleClickContinueBuyProduct} className='product__buttonnav-continue-shop'>Continue Shop</button>
            </Link> 
            <Link to="/Basket">
                <button onClick={handleContinueBasket} className='product__button-go-basket'>Go to Cart</button>
            </Link>
        </div>
        </div>
    </>
  )
}

export default ConfirmProductAdd