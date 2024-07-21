import { ChevronDown, Truck, X } from 'lucide-react'
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
import { Link } from 'react-router-dom'

const CheckForms = () => {

    const [response, setResponse] = useState([])
  const [selectPayOption, setSelectPayOption] = useState('')
  const dispatch = useDispatch()
  const selector = useSelector((item) => item.products.arr)
  const placeOrder = useSelector((item) => item.products.placeOrder)
  const secondSelector = useSelector((item) => item.products.totalprice)
  const thirdSelector = useSelector((item) => item.products.shipping)
  const [state, setState] = useState(false)
  const [select, setSelect] = useState(true)
  const [order, setOrder] = useState(false)
  const [red, setRed] = useState(false)
  const [secondRed, setSecondRed] = useState(false)

  const optionChange = (e) => {
    setSelectPayOption(e.target.value)
  }

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

  return (
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
  )
}

export default CheckForms