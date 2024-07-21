import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEaysModal, handelClickRemoveProductFavourites, handleClickAddFavourites, handleClickProductModalDecrement, handleClickProductModalIncrement, handleClickAddBasketProduct, toggleStatus, toggleStatusTrue, toggleStatusFalse, stateHoverProductFalse } from '../../Slices/SliceProducts';
import SizeS from './sizesComponents/SizeS';
import SplideProducts from './SplideProducts';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductSoloImg = ({setState, state, handleClickTest, item}) => {

    const selectore = useSelector((item) => item.products.headerLoginButton)
    const [favourites, setFavourites] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    const selector = useSelector((item) => item.products.productImgSolo)

    const handleCloseModal = () => {
        setState(false)
        dispatch(closeEaysModal())
        document.body.style.overflowY = 'auto'
    }

    const closeModal = (event) => {
        if (ref.current && ref.current.contains(event.target)) {
            console.log('true')
        } else if (ref.current && !ref.current.contains(event.target)) {
            console.log('false')
        }
    }
  
    useEffect(() => {
        document.addEventListener('click', closeModal)
        return () => {
            document.removeEventListener('click', closeModal)
        }
    }, ['block__product-modal-main' ])

    const handleClickSoloItem = () => {
        document.body.style.overflowY = 'auto'
    }

    const viewStateFavourites = () => {
        dispatch(toggleStatus(item.id))
        window.location.reload()
      }

    const handleClickFavouritesActive = () => {
        setFavourites(true)
        dispatch(toggleStatusTrue(item.id))
        const a = {
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.imgSolo,
            custom: item.custom,
            star: item.star,
            descriptionShort: item.descriptionShort,
            sku: item.sku,
            categories: item.categories,
            tags: item.tags,
            imgFirst: item.imgFirst,
            imgSecond: item.imgSecond,
            imgthird: item.imgthird,
            count: item.count
          }
          dispatch(handleClickAddFavourites(a))
          console.log(item.favourites)
    }

    const handleAddBasket = () => {
        const product = {
          id: item.id,
          img: item.imgSolo,
          title: item.title,
          sku: item.sku,
          price: item.price,
          count: item.count,
        }
        dispatch(handleClickAddBasketProduct(product))
    }

    const handleClickFavouritesDisable = () => {
        setFavourites(false)
        dispatch(handelClickRemoveProductFavourites(item.id))
        dispatch(toggleStatusFalse(item.id))
        console.log(item.favourites)
    }

    const notify = () => toast.info("Register or log in to your personal account");

  return (
    <div ref={ref} className='block__product-modal-main'>
    <div className='block__modal-view'>
        {
            selector.map((item) => ( 
                <>
                <div className='block__product-image'>
                    <img className='block__product-some-image' src={item.img}/>
                </div>
                <div className='block__product-description-short'>
                    <div className='block__product-header'>
                        <div className='block__header-product-modal'>
                            <h2 className='block__product-head'>{item.title}</h2>
                        <div className='block__product-stars'>
                            <div className='block__salary-description'>
                                <p className='block__salary-description-item'>${item.price * item.count}</p>
                            </div>
                            <div className='block__star'>
                                <div className='block__star-inside'>
                                    {
                                        item.star.map((value) => <img className='block__star-value' src={value} />)
                                    }
                                </div>
                                <p className='block__star-description'>{item.custom}</p>
                            </div>
                        </div>
                        </div>
                        <div className='block__math'>
                            <div className='block__description-shorts'>
                                <h3 className='block__header-description-shorts'>Short Description:</h3>
                                <p className='block__description-shorts-main'>{item.descriptionShort}</p>
                            </div>
                            <div style={{display: 'none'}} className='block__amount'>
                                <h3 className='block__amount-header'>Size: </h3>
                                <SizeS />
                            </div>
                            <div className='block__amount-count-buttons'>
                                <div style={{display: 'none'}} className='block__amount-count-inside'>
                                    <button className='block__amount-minus' onClick={() => dispatch(handleClickProductModalDecrement(item.id))}>-</button>
                                    <p className='block__amount-item'>{item.count}</p>
                                    <button className='block__amount-add' onClick={() => dispatch(handleClickProductModalIncrement(item.id))}>+</button>
                                </div>
                                <div className='block__product-buy'>
                                    <div className='block__product-buy-mobile'>
                                        <Link to='/Basket'>
                                            <button
                                            onClick={() => {
                                                handleCloseModal()
                                                handleAddBasket()
                                            }} className='block__product-button-buy-mobile'>Buy NOW</button>
                                        </Link>
                                        <button onClick={handleAddBasket} className='block__product-button-add-mobile'>ADD TO CART</button>
                                    </div>
                                        <Link to='/Basket'>
                                            <button onClick={() => {
                                                handleCloseModal()
                                                handleAddBasket()
                                            }}className='block__product-button-buy'>Buy NOW</button>
                                        </Link>
                                        <button onClick={handleAddBasket} className='block__product-button-add'>ADD TO CART</button>
                                {
                                    selectore ? 
                                    <button className='block__product-button-heart'>
                                        {
                                            item.favourites === true ?  <svg onClick={handleClickFavouritesDisable} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="#46A358" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg> : <svg onClick={handleClickFavouritesActive} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
                                        } 
                                    </button>
                                        :
                                        <><svg onClick={notify} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
                                        <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                         />
                                        </>
                                } 
                            </div>
                            </div>
                        </div>
                        <div className='block__tags'>
                            <div className='block__description-sku'>
                                <p className='block__description-sku-name'>SKU: </p>
                                <p className='block__description-sku-value'>{item.sku}</p>
                            </div>
                            <div className='block__description-category'>
                                <p className='block__description-category-name'>Category: </p>
                                <p className='block__description-category-value'>{item.categories}</p>
                            </div>
                            <div className='block__description-tag'>
                                <p className='block__description-tag-name'>Tags: </p>
                                <p className='block__description-tag-value'>{item.tags}</p>
                            </div>
                        </div>
                        <div className='block__social'>
                            <div className='block__social-name'>
                                <p className='block__social-description'>Share this products: </p>
                            </div>
                            <div className='block__social-icons'>
                                <button className='block__social-facebook block__social-buttons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                                    <path d="M1.875 5H0V7.5H1.875V15H5V7.5H7.25L7.5 5H5V3.9375C5 3.375 5.125 3.125 5.6875 3.125H7.5V0H5.125C2.875 0 1.875 1 1.875 2.875V5Z" fill="#3D3D3D"/>
                                    </svg></button>
                                <button className='block__social-twitter block__social-buttons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                    <path d="M4.71737 12.1908C10.378 12.1908 13.4736 7.50111 13.4736 3.4346C13.4736 3.30135 13.4709 3.1688 13.4647 3.03675C14.0656 2.60239 14.588 2.06021 15 1.44331C14.4486 1.6883 13.8552 1.85327 13.2327 1.92765C13.868 1.54669 14.356 0.94378 14.5861 0.225197C13.9914 0.577835 13.3329 0.834082 12.632 0.972271C12.0702 0.374134 11.2704 0 10.3855 0C8.68578 0 7.30747 1.37831 7.30747 3.07718C7.30747 3.31876 7.3346 3.55351 7.38715 3.77887C4.82962 3.65041 2.56162 2.42565 1.04392 0.563675C0.779318 1.01833 0.626969 1.54686 0.626969 2.11037C0.626969 3.17801 1.17034 4.12059 1.99658 4.67216C1.49176 4.65663 1.01748 4.51776 0.602743 4.2871C0.602061 4.2999 0.602061 4.31286 0.602061 4.32634C0.602061 5.81691 1.66305 7.06129 3.07104 7.3433C2.81257 7.41376 2.54063 7.45163 2.25982 7.45163C2.06158 7.45163 1.86879 7.43184 1.6813 7.39619C2.07301 8.61873 3.20923 9.5086 4.55632 9.53368C3.50284 10.3592 2.17588 10.8511 0.734108 10.8511C0.48588 10.8511 0.240893 10.8369 0 10.8084C1.36193 11.6812 2.97908 12.1908 4.71737 12.1908Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                                <button className='block__social-ask block__social-buttons'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M3.125 1.5625C3.125 2.4375 2.4375 3.125 1.5625 3.125C0.6875 3.125 0 2.4375 0 1.5625C0 0.6875 0.6875 0 1.5625 0C2.4375 0 3.125 0.6875 3.125 1.5625ZM3.125 4.375H0V14.375H3.125V4.375ZM8.125 4.375H5V14.375H8.125V9.125C8.125 6.1875 11.875 5.9375 11.875 9.125V14.375H15V8.0625C15 3.125 9.4375 3.3125 8.125 5.75V4.375Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                                <button className='block__social-mail block__social-buttons'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.09091C7.30168 4.09091 4.98846 4.2365 3.51951 4.34356C3.03167 4.37911 2.65385 4.76529 2.65385 5.23696V5.76996L8.53304 8.85802C8.82344 9.01056 9.17656 9.01056 9.46697 8.85802L15.3462 5.76996V5.23696C15.3462 4.76529 14.9683 4.37911 14.4805 4.34356C13.0115 4.2365 10.6983 4.09091 9 4.09091ZM15.3462 7.01792L10.0273 9.81165C9.38843 10.1472 8.61157 10.1472 7.97268 9.81165L2.65385 7.01792V12.763C2.65385 13.2347 3.03167 13.6209 3.51951 13.6564C4.98846 13.7635 7.30168 13.9091 9 13.9091C10.6983 13.9091 13.0115 13.7635 14.4805 13.6564C14.9683 13.6209 15.3462 13.2347 15.3462 12.763V7.01792ZM3.43083 3.25588C4.90066 3.14876 7.25301 3 9 3C10.747 3 13.0993 3.14876 14.5692 3.25588C15.6676 3.33593 16.5 4.20441 16.5 5.23696V12.763C16.5 13.7956 15.6676 14.6641 14.5692 14.7441C13.0993 14.8512 10.747 15 9 15C7.25301 15 4.90066 14.8512 3.43083 14.7441C2.33237 14.6641 1.5 13.7956 1.5 12.763V5.23696C1.5 4.20441 2.33237 3.33593 3.43083 3.25588Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='block__product-close'>
                        <X onClick={() => {
                            dispatch(stateHoverProductFalse())
                            handleCloseModal()
                        }}/>
                    </div>
                </div>
                </>
            ))
        }
    </div>
    <div className='block__button-more'>
        <Link onClick={() => {
                            dispatch(stateHoverProductFalse())
                            handleClickSoloItem()
                        }} to={`/Shop/${item.id}`}>
            <button className='block__button-more-item'>Больше информации о товаре</button>
        </Link>
    </div>
    </div>
  )
}

export default ProductSoloImg