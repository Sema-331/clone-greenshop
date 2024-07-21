import React, { useEffect, useState } from 'react'
import SideBarAccount from '../SideBarAccount'
import { handelClickAddAdress, handelClickSaveAdress, handleCountOrderNumber, placeOrderPushValue, removeItemToOrder } from '../../Slices/SliceProducts'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { countries } from '../../data/dataCountry'
import image from './../../image/danger_triangle_icon_183758.svg'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import SideBarMobile from '../SideBarMobile'
import { useNavigate } from 'react-router-dom'
import useFormPersist from 'react-hook-form-persist'

const AddAdress = () => {

    const dispatch = useDispatch()
    const mobileCheckoutAdress = useSelector((item) => item.products.mobileCheckoutAdress)
    const [stateModal, setStateModal] = useState(false)

    const navigate = useNavigate()

    const [state, setState] = useState(false)
    const [secondState, setSecondState] = useState(false)
    const [stateModals, setStateModals] = useState(false)
    const handleCLickToggle = () => {
        setState(!state)
        setSecondState(!secondState)
        setStateModals(!stateModals)
        setStateModal(!stateModal)
    }

    const {
        register, 
        formState: { errors, isValid },
        handleSubmit,
        reset,
        watch,
        setValue
      } = useForm({
        mode:"onBlur"
      })

    const onSubmit = (data, e) => {
        e.preventDefault()
        console.log(data)
        dispatch(handelClickAddAdress(data))
        dispatch(handleCountOrderNumber())
        //console.log(dispatch(placeOrderPushValue(data)))
      }

      const onSubmitSecond =  (data, e) => {
        e.preventDefault()
        console.log(data)
        dispatch(handelClickSaveAdress(data))
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

      console.log(windowWidth)

      useFormPersist("form-name", { watch, setValue });

  return (
    <section>
        <div className='container'>
            <div className='add-adress'>
                <div className='add-adress__main'>
                  <div className='basket__block-go-back-account-addAdress'>
                    <button className='basket__btn-back' onClick={() => navigate(-1)}>
                      <ChevronLeft className='basket__image-back' />
                    </button>
                  </div>
                    <SideBarAccount />
                    <div className='add-adress__main-block-fields'>
                        <div className='add-adress__main-block-headers'>
                        <div onClick={handleCLickToggle} className={ secondState ? 'add-adress__block-modals' : 'add-adress__block-modals-active-adds'}>
                            <h2 className='add-adress__block-modal-header'>Account</h2>
                          <ChevronDown className={ !state ? 'add-adress__down-arrow' : 'add-adress__down-arrow-active' } />
                          {
                            stateModal ? <SideBarMobile /> : null
                          }
                        </div>
                            <div className='add-adress__block-adress-inside'>
                                <h2 className='add-adress__main-header'>Billing Address</h2>
                                <p className='add-adress__description-header'>The following addresses will be used on the checkout page by default.</p>
                            </div>
                            <div className='add-adress__block-adds'>
                                <button onClick={handleSubmit(onSubmit)} className='add-adress__btn-add'>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="add-adress__block-form-fill-fields">
                        <form id='form' onSubmit={handleSubmit(onSubmit)} className='check__form-items' action="">
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
                  <div>{errors?.city && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
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
                  <div>{errors?.adress && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
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
                  <div>{errors?.state && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
                </li>
                <li className="check__block-zip check__list-item">
                  <div className='check__block-zip-inside'>
                    <label htmlFor="" className="check__label-zip check__label-checkout">Zip <span>*</span></label>
                    <input {...register("zip", {
                      required: windowWidth > 576 ? 'The field must be filled in!' : 'Required field',
                    })} placeholder='Appartment, suite, unit, etc. (optional)' type="text" className="check__row-zip" />
                  </div>
                  <div>{errors?.zip && <div className='check__form-danger'><img src={image} /><p>{errors?.lastName?.message ||  'Error'}</p></div>}</div>
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
                <li className="check__block-phone-number check__list-item check__save-block">
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
                      <button className='check__btn-save-adress'>Save Address</button>
                    </div>
                  </div>
                </li>
                <li className="check__block-ship-adress">
                  <div className="check__block-ship-adress-inside">
                    <div className='check__block-shipping-adress-boxes'>
                      <h3 className='check__header-adress-box'>
                        Shipping Address
                      </h3>
                      <p className='check__description-adress-box'>You have not set up this type of address yet.</p>
                    </div>
                    <div className='check__block-agree-main'>
                      <div className='check__block-agree-inside'>
                        <input type="radio" className='check__input-agree'/>
                        <label htmlFor="" className='check__name-input-agree'>
                          Same as billing address
                        </label>
                      </div>
                      <button onClick={handleSubmit(onSubmit)} form="form" type='submit' className='check__btn-add-adress'>Add</button>
                    </div>
                  </div>
                </li>
                          </ul>
                        </form>
                        {
                          mobileCheckoutAdress.map((item) => (
                            <p>{item.firstName}</p>
                          ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddAdress