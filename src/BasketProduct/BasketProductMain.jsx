import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleClickRemoveItemBasket, handleClickRemoveCountItemBasket, handleClickAddCountBasketItem, totalPriceOfGoods, totalShippingBasketProduct, toggleStatusTrack, fetchBasketProduct, handleClickSelectAllCheck } from '../Slices/SliceProducts'
import img from './../image/d-cart.c259d025.svg'
import { Link, useNavigate } from 'react-router-dom'
import ReletedProducts from '../Shop/ReletedProducts'
import BasketItemProduct from './BasketItemProduct'
import { ToastContainer, toast } from 'react-toastify'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Helpful, { useIntersection, useIsInViewport, useIsVisible } from './helpful'
import { ArrowBigLeft, ChevronLeft, X } from 'lucide-react'

const BasketProductMain = () => {

  const navigate = useNavigate()
  const select = useSelector((item) => item.products.arr)
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  const selector = useSelector((item) => item.products.basketProducts)
  const secondSelector = useSelector((item) => item.products.totalprice)
  const thirdSelector = useSelector((item) => item.products.shipping)

  const notify = () => toast.info("You have not selected any product");

  useEffect(() => {
    if(selector.length === 0) {
      setState(false)
    } else if(selector.length >= 1) {
      setState(true)
  }
  }, [selector])

  useEffect(() => {
    dispatch(totalPriceOfGoods())
    dispatch(totalShippingBasketProduct())
  }, )

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

      {/*gsap.registerPlugin(ScrollTrigger);
      gsap.from('.basket__main-block-products-item', {
        scrollTrigger: {
            trigger: ".basket__block-main",
            start: '100px',
            end: '500px',
            scrub: true,
            markers: true,
            scale: 1,
        },
        scale: 0,
        background: 'red',
        //transformOrigin: 'left, center',
        stagger: .5,
        ease: 'none',
        duration: 1
    })*/}
    {/*useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.check-modal__block-main-footer', {
        scrollTrigger: {
            trigger: '.check-modal__block-main-footer',
            start: '0px',
            end: '200px',
            markers: true,
            scale: 1,
            scrub: true,
            background:"red"
        },
        scale: 0,
        background: 'blue',
        stagger: .5,
        duration: 2,
        transformOrigin:'left, center'
    })
    }, )*/}
    
    // const ref = useRef();
  // const isVisible = useIntersection(ref);

  return (
    <section>
      <div className="container">
        <div className="basket__block-main">
        {
                  state ? <div className="basket__block-main-inside">
                  <div className='basket__block-info-product'>
                    <div className='basket__block-go-back'>
                      <button className='basket__btn-back' onClick={() => navigate(-1)}>
                        <ChevronLeft className='basket__image-back' />
                      </button>
                    </div>
                    <h2 className="basket__header-name-mobile">Cart</h2>
                    <div className='basket__block-titles'>
                      <div className="basket__block-product">
                        <h2 className='basket__product-header'>Product</h2>
                      </div>
                      <div className="basket__block-price">
                        <h2 className='basket__product-price'>Price</h2>
                      </div>
                      <div className="basket__block-quantity">
                        <h2 className='basket__product-quantity'>Quantity</h2>
                      </div>
                      <div className="basket__block-total">
                        <h2 className='basket__product-total'>Total</h2>
                      </div>
                    </div> 
                    <div className='basket__main-block-products-item'>
                      <Helpful />
                    </div>
                  </div>
                  <div className='basket__block-all-about'>
                    <div className="basket__block-cart-totals">
                      <h2 className='basket__product-cart-total-header'>Cart Totals</h2>
                    </div>
                    <div className='basket__block-full-price-product'>
                      <div className='basket__block-coupon-search'>
                          <p className="basket__description-coupon-sale">Coupon Apply</p>
                          <div className="basket__block-input-search-coupon">
                            <input className='basket__input-search' placeholder='Enter coupon code here...' type="text" />
                            <button className='basket__button-apply-coupon'>Apply</button>
                          </div>
                        </div>
                        <div className="basket__block-discovery">
                          <div className='basket__block-subtotal'>
                            <h2 className="basket__header-subtotal">Subtotal</h2>
                            <p className="basket__price-all-product">${secondSelector}.00</p>
                          </div>
                          <div className='basket__coupon-discount'>
                            <h2 className="basket__header-coupon-discount">Coupon Discount</h2>
                            <p className="basket__price-coupon-discount">(-) 00.00</p>
                          </div>
                          <div className='basket__block-shipping'>
                            <h2 className="basket__header-shipping">Shiping</h2>
                            <div className='basket__change-shipping'>
                              <p className="basket__description-salary-shipping">${thirdSelector}.00</p>
                              <p className="basket__shipping-change-view">View shipping charge</p>
                            </div>
                          </div>
                          <div className="basket__total-price-items">
                            <h2 className="basket__header-total-price-items">Total</h2>
                            <p className="basket__sum-orice-items">${secondSelector + thirdSelector}.00</p>
                          </div>
                          <div className="backet__block-check-out">
                            {
                              select.length === 0 ?                             
                              <>
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
                                <button onClick={notify} className="basket__btn-check-out">Proceed To Checkout</button>
                              </> : <Link style={{width: '100%'}} to='/Checkout'>
                                      <button onClick={notify} className="basket__btn-check-out">Proceed To Checkout</button>
                                    </Link>
                            }
                            <Link to='/'>
                              <p className="basket__description-continue-shopping">Continue Shopping</p>
                            </Link>
                          </div>
                        </div>
                    </div>
                  </div>
                </div> : 
                  <div className='basket__product-null'>
                    <div className='basket__product-null-image'>
                      <img className='basket__product-image-null' src={img} alt="" />
                    </div>
                    <div className='basket__block-product-navigation-items'>
                      <h2 className='basket__header-product-navigation'>There are no products in the basket</h2>
                      <p className='basket__description-product-navigation'>To select items, go to the catalog</p>
                      <Link to='/'>
                        <button className='basket__button-product-navigation'>Go to the catalog</button>
                      </Link>
                    </div>
                  </div>
                }
                {/*{
                  select.map((item) => (
                    <ReletedProducts item={item} />
                  ))
                } */}
                <ReletedProducts />
        </div>
      </div>
    </section>
  )
}

export default BasketProductMain