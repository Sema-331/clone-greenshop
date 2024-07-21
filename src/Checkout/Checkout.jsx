import { ChevronDown, ChevronLeft, MoreVertical, Truck, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imageFirst from './../image/image 17.png'
import { useForm } from 'react-hook-form'
import image from './../image/danger_triangle_icon_183758.svg'
import { countries } from '../data/dataCountry'
import { phoneCode } from '../data/dataCodePhone'
import CheckoutBlockItem from './CheckoutBlockItem'
import imageIcons from './../image/iconsModa.svg'
import CheckBlockItem from './CheckBlockItem'
import { handleClickOrderConfirm, handleCountOrderNumber, handles, placeOrderPushValue, removeItemToOrder, toggleStatusTrack } from '../Slices/SliceProducts'
import { Link, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {

  const [response, setResponse] = useState([])
  const [selectPayOption, setSelectPayOption] = useState('')
  const dispatch = useDispatch()
  const selector = useSelector((item) => item.products.arr)
  const placeOrder = useSelector((item) => item.products.placeOrder)
  const secondSelector = useSelector((item) => item.products.totalprice)
  const thirdSelector = useSelector((item) => item.products.shipping)
  const arr = useSelector((item) => item.products.basketProducts)
  const [state, setState] = useState(false)
  const [select, setSelect] = useState(true)
  const [order, setOrder] = useState(false)
  const [red, setRed] = useState(false)
  const [secondRed, setSecondRed] = useState(false)

  const optionChange = (e) => {
    setSelectPayOption(e.target.value)
  }

  const navigate = useNavigate()

  const mobileCheckoutAdress = useSelector((item) => item.products.mobileCheckoutAdress)

  const handleClick = () => {
    if(document.querySelector('.check__button-give-order').disabled) {
      setOrder(false)
      console.log('false')
    } else if(!document.querySelector('.check__button-give-order').disabled) {
      setOrder(true)
      console.log('true')
    }
    document.body.style.overflowY = 'hidden'
  }

  const handleModalOrderClose = () => {
    document.body.style.overflowY = 'auto'
    setOrder(false)
    reset()
  }

  const {
    register, 
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode:"onBlur"
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    console.log(placeOrder)
    dispatch(placeOrderPushValue(data))
    dispatch(handleCountOrderNumber())
    //console.log(dispatch(placeOrderPushValue(data)))
  }

{/*  const onSubmit = async (data, e) => {
    e.preventDefault()
    fetch("http://localhost:3031/placeOrder", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title: 'hello'
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
    //console.log(selectPayOption)
    //console.log(JSON.stringify(data))
}*/}

console.log(response)

  useEffect(() => {
    if(selector.length > 1) {
      setRed(true)
      setSecondRed(true)
    } else if(selector.length <= 1) {
      setRed(false)
      setSecondRed(false)
    }
  }, [selector])

  const handleClickOrder = () => {
    document.body.style.overflowY = 'auto'
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const a = getRandomInt(1, 10000)

    const d=new Date();
    const day=d.getDate();
    const month=d.toLocaleString('default', { month: 'long' });
    const year=d.getFullYear();
    const b = (day + " " + month + ", " + year);

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

      console.log(windowWidth)
      console.log(selectPayOption)

  return (
    <section>
      <div className="container">
      <form id='form' onSubmit={handleSubmit(onSubmit)} className='check__form-items' action="">
        <div className="check__block-main">
          {
            windowWidth < 576 && mobileCheckoutAdress.length > 0 ? 
            <div className='check__block-form-mobile'>
              <div className='check__block-form-mobile-insides'>
              <div className='basket__block-go-back'>
                <button className='basket__btn-back' onClick={() => navigate(-1)}>
                  <ChevronLeft className='basket__image-back' />
                </button>
              </div>
              <h2 className='check__header-mobile'>Checkout</h2>
              </div>
              <div className='check__block-shipping-blocks'>
                <h2 className='check__header-shipping'>Shipping to</h2>
                <Link to='/AddAdress'><button className='check__btn-add-adress'>Add Adress</button></Link>
              </div>
              <form name="selection">
                {
                  mobileCheckoutAdress.map((item) => (
                    <div className='check__block-shipping-adress'>
                      <input name="selection" className='check__block-input-shipping' type="radio" id='userId'/>
                      <div className='check__block-shipping-adress-inside'>
                        <h2 className='check__block-name-shipping-adress'>Home</h2>
                        <p className='check__description-shipping-adress'>{item.adress},{item.state},{item.city},{item.country} 
                        NY 11590, USA</p>
                      </div>
                      <MoreVertical />
                    </div>
                  ))
                }
              </form>
            </div> : <div className='check__block-form'>
              {
                windowWidth > 576 ? <h2 className="check__main-form-headers">Billing Address</h2> : <div className='check__main-form-block-header' >
                <h2 className="check__main-form-header">Billing Address</h2>
                <Link to='/AddAdress'>
                  <button className='check__btn-add-adress'>Add Adress</button>
                </Link>
              </div>
              }
              <ul className="check__main-block-form-inside">
                <li className="check__block-names check__list-item">
                  <div className='check__block-names-inside'>
                    <label htmlFor="" className="check__label-first-name check__label-checkout">First Name <span>*</span></label>
                    <input {...register("firstName", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      minLength: {
                        value: 2,
                        message: 'Minimum 2 symbol',
                        pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
                      }
                    })} placeholder='Type...' type="text" className="check__row-first-name" />
                  </div>
                  <div>{errors?.firstName && <div className='check__form-danger'><img src={image} /><p>{errors?.firstName?.message || 'Error'}</p></div>}</div>
                </li>
                <li className="check__block-last-names check__list-item">
                  <div className='check__block-last-name-inside'>
                    <label htmlFor="" className="check__label-last-name check__label-checkout">Last Name <span>*</span></label>
                    <input {...register("lastName", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      minLength: {
                        value: 2,
                        message: 'Minimum 2 symbol',
                        pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
                      }
                    })} placeholder='Type...' type="text" className="check__row-last-name" />
                  </div>
                  <div>{errors?.lastName && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-region check__list-item">
                  <div className='check__block-region-inside'>
                    <label htmlFor="" className="check__label-region-name check__label-checkout">Country / Region <span>*</span></label>
                    <div className='check__block-region-selected'>
                      <select {...register("region", {
                      required: true
                    })} placeholder='Select a country / region' type="text" className="check__row-region-name">
                      {
                        countries.map((item) =>  (
                          <>
                            <option>{item.name}</option>
                          </>
                        ))
                      }
                    </select>
                      <svg className='lucide lucide-chevron-down arrow__down-region' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg> 
                    </div>
                  </div>
                  <div>{errors?.region && <div className='check__form-danger'><img src={image} /><p>The field must be filled in!</p></div>}</div>
                </li>
                <li className="check__block-city check__list-item">
                  <div className='check__block-city-inside'>
                    <label htmlFor="" className="check__label-city-name check__label-checkout">Town / City <span>*</span></label>
                    <input {...register("city", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      minLength: {
                        value: 4,
                        message: 'Minimum 2 symbol',
                      }
                    })} placeholder='Town / City' type="text" className="check__row-city-name" />
                  </div>
                  <div>{errors?.lastName && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-street-adress check__list-item">
                  <div className='check__block-street-adress-inside'>
                    <label htmlFor="" className="check__label-last-name-street-adress check__label-checkout">Street Address <span>*</span></label>
                    <input {...register("adress", {
                     required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                     minLength: {
                       value: 4,
                       message: 'Minimum 2 symbol',
                     }
                    })} placeholder='House number and street name' type="text" className="check__row-street-adress" />
                  </div>
                  <div>{errors?.lastName && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-suit check__list-item">
                  <div className='check__block-suit-inside'>
                    <label style={{marginBottom: '10px'}} className="check__label-last-name-suit check__label-checkout"> Suit </label>
                    <input placeholder='Appartment, suite, unit, etc. (optional)' type="text" className="check__row-suit" />
                  </div>
                </li>
                <li className="check__block-state check__list-item">
                  <div className='check__block-state-inside'>
                    <label htmlFor="" className="check__label-last-name-state check__label-checkout">State <span>*</span></label>
                    <div className='check__block-state-selected'>
                      <input {...register("state", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      minLength: {
                        value: 4,
                        message: 'Minimum 2 symbol',
                      }
                    })} placeholder='Appartment, suite, unit, etc. (optional)' type="text" className="check__row-state" />                      
                    </div>
                  </div>
                  <div>{errors?.lastName && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-zip check__list-item">
                  <div className='check__block-zip-inside'>
                    <label htmlFor="" className="check__label-zip check__label-checkout">Zip <span>*</span></label>
                    <input {...register("zip", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                    })} placeholder='Appartment, suite, unit, etc. (optional)' type="text" className="check__row-zip" />
                  </div>
                  <div>{errors?.lastName && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-email-adress check__list-item">
                  <div className='check__block-email-adress-inside'>
                    <label htmlFor="" className="check__label-email-adress check__label-checkout">Email address <span>*</span></label>
                    <input {...register("email", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })} placeholder='Type...' type="email" className="check__row-email-adress" />
                  </div>
                  <div>{errors?.email && <div className='check__form-danger'><img src={image} /><p>{errors?.email?.message}</p></div>}</div>
                </li>
                <li className="check__block-phone-number check__list-item">
                  <div className='check__block-phone-inside'>
                    <label htmlFor="" className="check__label-phone-number check__label-checkout">Phone number <span>*</span></label>
                    <div className='check__block-phone-number-select'>
                        <div className='check__block-select-item-number'>
                          <div className='check__block-click-item'>
                            <input {...register("phone", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                      pattern: {
                        value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                        message: "invalid phone number"
                      }
                    })} type="tel"
                    placeholder="+7(___)___-__-__"
                    className='check__input-tel' />
                          </div>
                          <div>{errors?.phone && <div className='check__form-danger'><img src={image} /><p>{errors?.phone?.message}</p></div>}</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="check__block-ship-adress">
                  <div className="check__block-ship-adress-inside">
                    <div className='check__block-input-boxes'>
                      <input className='check__radio-button' type="radio" />
                      <p className="check__input-description">Ship to a different address?</p>
                    </div>
                  </div>
                </li>
              </ul>
              {/* <CheckForms /> */}
              <div className='check__block-area'>
                <div className="check__block-area-inside">
                  <p className="check__description-area">Order notes (optional)</p>
                  <textarea className='check__textarea' name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
          </div>
          }
          <div className='check__block-main-order'>
            <h2 className="check__block-header-order">Your Order</h2>
           <CheckoutBlockItem />
            {/**Have a coupon code? Click here (block)*/}
            <div className="check__block-pay-method-main">
              <h2 className="check__pay-method-header">Payment Method</h2>
              <div className='check__block-pay-method-inside'>
                <div className='check__pay-method-block'>
                  <div className="check__block-first-method-pay">
                      <input  {...register("pay", {
                        required: true
                    })} type="radio" onChange={optionChange} name='pay' value='credit card' className="check__method-pay-select-first" />
                      <img src={imageFirst} alt="" className="check__method-pay-image-first" />
                    </div>
                  </div> 
                  <div className="check__pay-method-block-second">
                    <input {...register("pay", {
                      required: true
                    })} type="radio" onChange={optionChange} name='pay' value='Dorect bank transfer' className="check__mathod-pay-select-second" />
                    <label htmlFor="" className="check__name-pay-method-second">Dorect bank transfer</label>
                  </div>
                  <div className="check__pay-method-block-third">
                    <input {...register("pay", {
                      required: true
                    })} type="radio" onChange={optionChange} name='pay' value='Cash on delivery' className="check__mathod-pay-select-third" />
                    <label htmlFor="" className="check__name-pay-method-third">Cash on delivery</label>
                  </div>
                  <div className="check__text-error-button">
                    {errors?.pay && <p>
                      'Tell us what is your favourite food.'</p>}
                  </div>
                </div>
                <div className="check__block-button-give-order">
                  {/* {
                    arr.map((item) => (
                      <BtnPlaceOrder handleClick={handleClick} isValid={isValid} item={item} />
                    ))
                  } */}
                  <>
                    {
                      selectPayOption === 'Cash on delivery' ? <button onClick={handleClick} disabled={!isValid} form="form" type='submit' className='check__button-give-order'>Place Order</button> : 
                      <Link to='/Checkout/Payment'><button className='check__button-give-order' disabled={!isValid} >Payment</button></Link>
                    }
                  </>
                  {
                    order ? <>
                    {
                      windowWidth > 724 ? <>
                    <div className='check__block-modal-mail'>
                      <div className='check__block-header-info'>
                        <div className='check__block-received'>
                          <img className='check__image-block' src={imageIcons} alt="" />
                          <p className="check__description-modal-block">Your order has been received</p>
                        </div>
                      </div>
                      <div className="check__block-info-order">
                        <ul className="check__block-list-box">
                          <li className="check__block-list-item check__block-list-item-order-number">
                            <div className="check__block-list-item-order-number-inside">
                              <h3 className="check__header-list-item-number">Order Number</h3>
                              <p className="check__description-order-number">{a}</p>
                            </div>
                          </li>
                          <li className="check__block-list-item check__block-list-item-date">
                            <div className="check__block-list-item-date-inside">
                              <h3 className="check__header-list-item-date">Date</h3>
                              <p className="check__description-date">{b}</p>
                            </div>
                          </li>
                          <li className="check__block-list-item check__block-list-item-total">
                            <div className="check__block-list-item-inside-total">
                              <h3 className="check__header-list-item-total">Total</h3>
                              <p className="check__description-total">{secondSelector + thirdSelector}</p> 
                            </div>
                          </li>
                          <li className="check__block-list-item check__block-list-item-payment-method">
                            <div className="check__block-list-item check__block-list-item-inside-payment-method">
                              <h3 className="check__header-list-item-payment-method">Payment Method</h3>
                              <p className="check__description-payment-method">{selectPayOption}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="check__block-order-details">
                        <h2 className="check__header-order-details">Order Details</h2>
                        <div className="check__block-order-details-product">
                          <div className={red ? 'check__block-order-details-name red__second' : 'check__block-order-details-name' }>
                            <h3 className="check__block-order-details-products">Products</h3>
                            <h3 className="check__block-order-details-quantity">Qty</h3>
                            <h3 className="check__block-order-details-subtotal">Subtotal</h3>
                          </div>
                          <div className={ secondRed ? "check__overflow-item-length red" : 'check__overflow-item-length'}>
                          {
                      selector.map((item) => (
                                <div className='check__block-main-items-inside'>
                                  <div className="check__block-image-description">
                                    <img className='check__item-image' src={item.img} alt="" />
                                    <div className="check__block-description-item">
                                      {
                                        item.trackNumber ? null : <h3 onClick={() => dispatch(toggleStatusTrack())} className="check__header-main-items">{item.title}</h3>
                                      }
                                      <div className="check__block-identificatore-product">
                                        <p className='check__dentificatore-name'>SKU:</p>
                                        <p className='check__identificatore-value'>{item.sku}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="check__block-count-item">
                                    <p className="check__item-count">(x{item.count})</p>
                                  </div>
                                  <div className="check__block-product-price">
                                    <p className="check__price-product">${item.price}</p>
                                  </div>
                                </div>
                      ))}
                          </div>
                        </div>
                      </div>
                      <div className={secondRed ? "check__block-all-price-product second__red" : "check__block-all-price-product"}>
                        <div className='check__block-shipping-item'>
                          <h3 className="check__shipping-name">Shipping</h3>
                          <p className="check__shipping-product-count-price">${thirdSelector}</p>
                        </div>
                        <div className='check__block-total-price-product'>
                          <h3 className="check__name-block-product">Total</h3>
                          <p className="check__count-price-block-product">${secondSelector + thirdSelector}</p>
                        </div>
                      </div>
                      <div className="check__block-footer-description-order">
                        <p className="check__description-footer-order">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                      </div>
                      <Link to='/Order' className="check__button-give-track-code">
                            <button onClick={() => {
                              handleClickOrder()
                              dispatch(removeItemToOrder())
                            }} className="check__button-track-code">Track your order</button>
                      </Link>
                      <Link to='/'>
                        <button onClick={() => {
                          dispatch(removeItemToOrder())
                          handleModalOrderClose()
                          }
                        } className='check__close-button-modal'><X /></button> 
                      </Link>
                    </div> 
                      </> : <div style={{background: 'red', zIndex: 2000, width: '500px', height: '500px'}}>
                        <h2>Hello world</h2>
                        <div>
                          <Truck />
                          <button>Order</button>
                        </div>
                        
                        <button>
                          <X/>
                        </button>
                      </div>
                    }</> : null
                  }
                </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Checkout