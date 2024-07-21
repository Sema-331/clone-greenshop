import React from 'react'
import FooterListBox from './FooterListBox'
import FooterScript from './FooterScript'
import CareMainComponents from '../Main/care/CareMainComponents'
import ContactMain from '../Main/contact/ContactMain'
import homeMobile from './../image/HomeMobile.svg'
import heartMobile from './../image/heartMobile.svg'
import basketMobile from './../image/basketMobile.svg'
import userMobile from './../image/userMobile.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginFormMain from '../LoginForm/LoginFormMain'
import HeaderLogin from '../Header/HeaderLogin'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useRef } from 'react'
import { signOut } from 'firebase/auth'
import { dataBase } from '../data/dataSlider'
import { headerLoginButtonSecond, testSecond } from '../Slices/SliceProducts'
import FooterLoginMobile from './FooterLoginMobile'

const FooterMain = () => {

  const commonPage = 'footer__icons-panel-mobile'
  const activePage = 'footer__icons-panel-mobile-active'


  const loginUser = useSelector((item) => item.products.login)
  const {basketProducts, favouritesItem} = useSelector((item) => item.products)
  const stateLogin = useSelector((item) => item.products.headerLoginButton)
  const [log, setLog] = useState(false)
  const ref = useRef()
  const [login, setLogin] = useState(false)

  const dispatch = useDispatch()

  const history = useNavigate()

    const handleSignOut = () => {
        signOut(dataBase).then((val) => history('/'))
        dispatch(headerLoginButtonSecond())
        console.log(false)
        dispatch(testSecond())
    }

    const handleOpenFormLogin = () => {
        setLogin(true)
        console.log(true)
        dispatch(headerLoginButtonSecond())
        document.body.style.overflowY = 'hidden'
        handleSignOut()
    }


  return (
    <footer>
        <div className="container">
            <div className="footer__block-main">
                <CareMainComponents />
                <ContactMain />
                <FooterListBox />
                <FooterScript />
            </div>
        </div>
        <div className="footer__block-main-mobile">
          <div className='footer__block-login-mobile'>
              <svg className='footer__image-scan' xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                <path d="M13.3819 12.8915C9.28498 12.8915 5.18803 12.8915 1.09108 12.8908C0.961448 12.8908 0.827342 12.8945 0.702176 12.8669C0.25441 12.7686 -0.0480741 12.3372 0.00631347 11.8932C0.060701 11.4484 0.439924 11.1116 0.913021 11.1094C1.98364 11.1034 3.055 11.1064 4.12561 11.1064C11.3234 11.1064 18.5212 11.1072 25.719 11.1087C25.8575 11.1087 26.0013 11.1049 26.1347 11.1362C26.5743 11.2398 26.8641 11.6555 26.8179 12.0921C26.7702 12.5391 26.3947 12.8871 25.9246 12.8893C24.7139 12.8967 23.504 12.893 22.2933 12.893C19.3228 12.893 16.3524 12.893 13.3827 12.893C13.3819 12.893 13.3819 12.8923 13.3819 12.8915Z" fill="white"/>
                <path d="M10.555 24C9.2043 23.7974 7.81928 23.7214 6.511 23.3652C3.7648 22.6165 2.19501 20.7241 1.74427 17.9272C1.57738 16.8924 1.47456 15.8471 1.35536 14.8055C1.28309 14.176 1.58334 13.7632 2.13168 13.6954C2.6763 13.6284 3.07564 13.9815 3.13599 14.5276C3.26563 15.7078 3.35578 16.8976 3.57854 18.0613C3.98086 20.1631 5.70189 21.6286 7.83642 21.8163C8.84594 21.905 9.85397 22.0175 10.8605 22.1337C11.5951 22.2186 11.9341 23.0344 11.4945 23.6312C11.3046 23.8897 11.0803 23.9635 10.555 24Z" fill="white"/>
                <path d="M25.4462 9.39807C25.4305 9.53515 25.432 9.67745 25.3948 9.80858C25.3076 10.1185 25.0014 10.3778 24.7421 10.383C24.3003 10.3919 23.7996 10.0641 23.6976 9.64989C23.6245 9.3556 23.6223 9.04418 23.5821 8.74095C23.4569 7.78432 23.3966 6.81354 23.188 5.87554C22.7603 3.95559 21.5325 2.73746 19.614 2.32247C18.4741 2.07587 17.297 1.99987 16.1362 1.84714C16.0073 1.83 15.8754 1.82404 15.7503 1.79201C15.3308 1.68547 15.0581 1.28687 15.111 0.870399C15.1699 0.407732 15.5268 0.0538406 15.973 0.0858771C17.5041 0.195397 19.0426 0.306407 20.5118 0.776524C22.8631 1.52975 24.345 3.15766 24.9053 5.53953C25.201 6.79864 25.3016 8.1032 25.4901 9.38689C25.476 9.39136 25.4611 9.39434 25.4462 9.39807Z" fill="white"/>
                <path d="M25.4225 14.8808C25.2988 16.1674 25.2086 17.5808 24.8167 18.9442C24.0777 21.5146 21.8962 23.2892 19.2372 23.5492C18.1554 23.655 17.0781 23.8108 15.9993 23.9441C15.6171 23.9918 15.2013 23.623 15.1209 23.1648C15.0404 22.7059 15.3287 22.2551 15.7832 22.194C16.3263 22.1203 16.8777 22.1061 17.4208 22.0331C18.3223 21.9132 19.2566 21.8804 20.1133 21.6084C21.97 21.0199 23.0071 19.6639 23.279 17.7454C23.4235 16.7255 23.5308 15.7003 23.6336 14.6751C23.6932 14.0821 24.0799 13.6686 24.6007 13.6984C25.1043 13.7275 25.4515 14.1745 25.4225 14.8808Z" fill="white"/>
                <path d="M1.3291 9.27513C1.52728 7.95493 1.62041 6.60791 1.9445 5.319C2.60013 2.71063 4.34873 1.11849 6.95858 0.532893C8.1335 0.269151 9.34717 0.177512 10.5444 0.0173291C10.7262 -0.00725703 10.9222 -0.0087471 11.098 0.0329749C11.5115 0.130574 11.7544 0.509797 11.7149 0.940427C11.6732 1.39117 11.3677 1.69068 10.9281 1.73985C9.84708 1.86055 8.7638 1.97081 7.68648 2.1228C5.4104 2.44316 3.83316 4.02338 3.52323 6.28456C3.37497 7.36933 3.25651 8.45857 3.12911 9.54632C3.0777 9.98441 2.70146 10.3122 2.24177 10.3063C1.79549 10.3003 1.41478 9.94492 1.39019 9.50833C1.38572 9.43457 1.38945 9.36007 1.38945 9.28556C1.36933 9.28184 1.34922 9.27886 1.3291 9.27513Z" fill="white"/>
              </svg>
          </div>
          <div className="footer__block-main-inside-mobile">
            {/*<div className="footer__block-options-mobile-first">*/}
              <div className='footer__block-list-item-mobile'>
                <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/'>
                  <svg className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.61199 17.3111V14.763C7.61199 14.1125 8.14315 13.5852 8.79837 13.5852H11.1935C11.5082 13.5852 11.8099 13.7093 12.0324 13.9302C12.2549 14.1511 12.3799 14.4506 12.3799 14.763V17.3111C12.3779 17.5815 12.4847 17.8416 12.6767 18.0335C12.8686 18.2254 13.1297 18.3333 13.4021 18.3333H15.0362C15.7994 18.3353 16.532 18.0357 17.0723 17.5007C17.6127 16.9656 17.9163 16.2391 17.9163 15.4815V8.22237C17.9163 7.61037 17.6431 7.02986 17.1702 6.63721L11.6114 2.22988C10.6444 1.45712 9.25893 1.48207 8.32083 2.28914L2.88885 6.63721C2.39362 7.01828 2.09763 7.60052 2.08301 8.22237V15.4741C2.08301 17.0532 3.37249 18.3333 4.96315 18.3333H6.55992C7.1257 18.3333 7.58551 17.8802 7.5896 17.3185L7.61199 17.3111Z" />
                  </svg>
                </NavLink>
              </div>
              <div style={{position:'relative'}}>
                <p style={{position:'absolute', color:'#46A358', top:'-14px', right:'-10px'}}>{favouritesItem.length}</p>
                <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/Favourite'>
                  <svg className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                    <path d="M18.4134 1.74133C17.3781 0.618439 15.9575 0 14.413 0C13.2585 0 12.2012 0.36499 11.2704 1.08475C10.8008 1.44806 10.3752 1.89255 10 2.41135C9.62494 1.8927 9.19922 1.44806 8.7294 1.08475C7.79877 0.36499 6.74149 0 5.58701 0C4.04251 0 2.62177 0.618439 1.58646 1.74133C0.563507 2.8511 0 4.36722 0 6.01059C0 7.70203 0.630341 9.25034 1.98364 10.8833C3.19427 12.3441 4.93423 13.8269 6.94916 15.544C7.63718 16.1304 8.41705 16.795 9.22684 17.5031C9.44077 17.6904 9.71527 17.7936 10 17.7936C10.2846 17.7936 10.5592 17.6904 10.7729 17.5034C11.5826 16.7952 12.363 16.1302 13.0513 15.5435C15.0659 13.8268 16.8059 12.3441 18.0165 10.8832C19.3698 9.25034 20 7.70203 20 6.01044C20 4.36722 19.4365 2.8511 18.4134 1.74133Z"/>
                  </svg>
                </NavLink>
              </div>
            {/*</div>*/}
            {/*<div className="footer__block-options-mobile-second">*/}
              <div style={{position:'relative'}}>
                <p style={{position:'absolute', color:'#46A358', top:'-13px', right:'-7px'}}>{basketProducts.length}</p>
                <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/Basket'>
                  <svg className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path d="M18.333 6.80134L17.3894 12.7778C17.2178 13.9562 16.2742 14.7138 15.0732 14.7138H6.83791C5.72271 14.7138 4.6933 13.872 4.52173 12.7778L3.49232 5.79124L3.23497 3.85521C3.14918 3.35016 2.72026 3.01346 2.11977 3.01346H1.51928C1.17615 3.01346 0.833008 2.67676 0.833008 2.34006C0.833008 2.00336 1.17615 1.66666 1.51928 1.66666H2.11977C3.32075 1.66666 4.35016 2.50841 4.43595 3.68686L4.60752 5.03366H16.7889C17.2178 5.03366 17.6467 5.20201 17.9041 5.53871C18.2472 5.87541 18.333 6.38046 18.333 6.80134Z" fill={({isActive}) => {
                return isActive ? commonPage : activePage
              }}/>
                    <path d="M15.2448 18.3333C15.7185 18.3333 16.1026 17.9565 16.1026 17.4916C16.1026 17.0267 15.7185 16.6498 15.2448 16.6498C14.771 16.6498 14.3869 17.0267 14.3869 17.4916C14.3869 17.9565 14.771 18.3333 15.2448 18.3333Z" fill={({isActive}) => {
                return isActive ? commonPage : activePage
              }}/>
                    <path d="M6.66634 18.3333C7.14012 18.3333 7.52418 17.9565 7.52418 17.4916C7.52418 17.0267 7.14012 16.6498 6.66634 16.6498C6.19257 16.6498 5.8085 17.0267 5.8085 17.4916C5.8085 17.9565 6.19257 18.3333 6.66634 18.3333Z" fill={({isActive}) => {
                return isActive ? commonPage : activePage
              }}/>
                  </svg>
                </NavLink>
              </div>
              <div>
                <FooterLoginMobile />
                {/*<img src={userMobile} alt="" />*/}
              </div>
            {/*</div>*/}
          </div>
        </div>
        {/* <div style={{width: '100%', background:'red', position:'fixed'}}className='check-modal__block-main-footer'>
          <div className="check-modal__block-input-with-button">
            <input placeholder='Enter coupon code here...' type="text" className="check-modal__coupon-sale" />
            <button className="check-modal__button-find">Apply</button>
            </div>
            <div className="check-modal__block-subtotal">
              <p className="check-modal__subtotal-name">Subtotal</p>
              <p className="check-modal__subtotal-price">$892.00</p>
            </div>
            <div className="check-modal__block-coupon">
              <p className="check-modal__coupon-name">Coupon Discount</p>
              <p className="check-modal__coupon-price">(-) 00.00</p>
            </div>
            <div className="check-modal__block-shipping">
              <p className='check-modal__shipping-name'>Shiping</p>
              <div className='check__modal-blocks'>
                <p className="check-modal__shipping-price">$16.00</p>
                <p className="check-modal__shipping-button-change">View shipping charge</p>
            </div>
            </div>
            <div className="check-modal__block-total-price-products">
              <p className="check-modal__total-name">Total</p>
              <p className="check-modal__total-price-value">$999.00</p>
            </div>
            <button className="check-modal__button-next-check">Proceed To Checkout</button>
        </div> */}
      </footer>
  )
}

export default FooterMain