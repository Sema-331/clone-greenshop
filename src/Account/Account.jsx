import React, { useEffect, useState } from 'react'
import { dataBase } from '../Login/FireBaseConfig/FireBase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideBarAccount from './SideBarAccount'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import SideBarMobile from './SideBarMobile'
import AccountToggle from './AccountToggle'
import { useForm } from 'react-hook-form'
import imageI from './../image/danger_triangle_icon_183758.svg'
import useFormPersist from "react-hook-form-persist";

const Account = () => {

  const [state, setState] = useState(false)
  const [secondState, setSecondState] = useState(false)
  const [stateModal, setStateModal] = useState(false)
  const selector = useSelector((item) => item.products.arr)
  const history = useNavigate()
  const navigate = useNavigate()
  // const [image, setImage] = useState(null)

  const [image, setImage] = useState ( () => {
    const savedItem = localStorage.getItem("userImage");
   const parsedItem = JSON.parse(savedItem);
   return parsedItem || null;
   });

  useEffect(() => { 
    localStorage.setItem("userImage",JSON.stringify(image))
  });

  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }

  const handleSignOut = () => {
      signOut(dataBase).then((val) => history('/'))
  }

  const handleCLickToggle = () => {
    setState(!state)
    setSecondState(!secondState)
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

  useFormPersist("form-name", { watch, setValue });

  return (
    <section>
      <div className="container">
        <div className="account">
          <div className="account__block-main">
            <div className='basket__block-go-back-account-main'>
              <button className='basket__btn-back' onClick={() => navigate(-1)}>
                <ChevronLeft className='basket__image-back' />
              </button>
            </div>
            <SideBarAccount />
            <div className="account__block-interface-user">
              <div className="account__block-header-name-form">
              <AccountToggle />
              <div className='cls'>
                <h2 className="account__name-form">Personal Information</h2>
              </div> 
              </div>
              <div className="account__block-info-user">
                <form action="" className="account__form">
                  <div className="account__block-personal-info">
                    <ul className="account__list-box-personal-info">
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside">
                          <label htmlFor="" className="account__name-input">First Name<span>*</span></label>
                          <input {...register("firstName", {
                      required: 'The field must be filled in!',
                      minLength: {
                        value: 2,
                        message: 'Minimum 2 symbol',
                        pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
                      }
                    })} placeholder='Type...' type="text" className="account__fill-for-form-user" />
                    <div>{errors?.firstName && <div className='check__form-danger'><img src={imageI} /><p>{errors?.firstName?.message || 'Error'}</p></div>}</div>
                          {/* <input type="text" placeholder='Name...' className="account__fill-for-form-user" /> */}
                        </div>
                      </li>
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside">
                          <label htmlFor="" className="account__name-input">Last Name<span>*</span></label>
                          <input {...register("lastName", {
                      required: 'The field must be filled in!',
                      minLength: {
                        value: 2,
                        message: 'Minimum 2 symbol',
                        pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
                      }
                    })} placeholder='Type...' type="text" className="account__fill-for-form-user" />
                    <div>{errors?.lastName && <div className='check__form-danger'><img src={imageI} /><p>{errors?.firstName?.message || 'Error'}</p></div>}</div>
                        </div>
                      </li>
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside">
                          <label htmlFor="" className="account__name-input">Email address<span>*</span></label>
                          <input {...register("email", {
                      required: 'The field must be filled in!',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })} placeholder='Type...' type="email" className="account__fill-for-form-user" />
                    <div>{errors?.email && <div className='check__form-danger'><img src={imageI} /><p>{errors?.email?.message}</p></div>}</div>
                        </div>
                      </li>
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside">
                          <label htmlFor="" className="account__name-input">Phone Number<span>*</span></label>
                          <input {...register("phone", {
                      required:'The field must be filled in!',
                      pattern: {
                        value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                        message: "invalid phone number"
                      }
                    })} type="tel"
                    placeholder="+7(___)___-__-__"
                    className='account__fill-for-form-user' />
                    <div>{errors?.phone && <div className='check__form-danger'><img src={imageI} /><p>{errors?.phone?.message}</p></div>}</div>
                        </div>
                      </li>
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside">
                          <label htmlFor="" className="account__name-input">Username<span>*</span></label>
                          <input {...register("userName", {
                      required: 'The field must be filled in!',
                      minLength: {
                        value: 5,
                        message: 'Minimum 5 symbol',
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                          message: 'Minimum length - 5'
                        }
                      }
                    })} placeholder='Type...' type="text" className="account__fill-for-form-user" />
                    <div>{errors?.userName && <div className='check__form-danger'><img src={imageI} /><p>{errors?.userName?.message || 'Error'}</p></div>}</div>
                        </div>
                      </li>
                      <li className="account__list-item-personfal-info">
                        <div className="account__block-list-item-inside account__block-list-item-inside-change">
                          <div className={ image === null ? 'account__block-svg-change-photo' : 'account__block-svg-change-photo-active'}> 
                          {
                            image === null ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59866 6.78419C8.59866 7.75719 7.81066 8.54519 6.83766 8.54519C5.86566 8.54519 5.07666 7.75719 5.07666 6.78419C5.07666 5.81119 5.86566 5.02319 6.83766 5.02319C7.81066 5.02319 8.59866 5.81119 8.59866 6.78419Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.1203 12.6664C18.2393 11.7604 16.9933 9.92944 14.7043 9.92944C12.4153 9.92944 12.3653 13.9674 10.0293 13.9674C7.69231 13.9674 6.75131 12.5964 5.22831 13.3124C3.70631 14.0274 2.46631 16.8734 2.46631 16.8734" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> : <img className='image__change' src={image} alt="" />
                          }
                          </div>
                          <input onChange={onImageChange} type="file" id="file-input" name="file-input" />
                          <label id="file-input-label" for="file-input" className='account__button-save-change'>Change</label>
                          <button className='account__button-remove-change'>Remove</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="account__block-password-change">
                    <h2 className="account__block-name-password-change">Password change</h2>
                    <div className="account__block-password-change-inside">
                      <div className="account__block-fill-change-password">
                        <label htmlFor="" className="account__name-for-fill">Current password</label>
                        <input placeholder='Type...' type="text" className="account__fill-field" />
                      </div>
                      <div className="account__block-fill-change-password">
                        <label htmlFor="" className="account__name-for-fill">New password</label>
                        <input placeholder='Type...' type="text" className="account__fill-field" />
                      </div>
                      <div className="account__block-fill-change-password">
                        <label htmlFor="" className="account__name-for-fill">Confirm new password</label>
                        <input placeholder='Type...' type="text" className="account__fill-field" />
                      </div>
                    </div>
                    <button className="account__button-save-changes" disabled={!isValid}>Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account