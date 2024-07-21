import React, { useEffect, useRef, useState } from 'react'
import LoginFormMain from '../LoginForm/LoginFormMain'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { headerLoginButton, headerLoginButtonSecond, testSecond } from '../Slices/SliceProducts'
import { dataBase } from '../Login/FireBaseConfig/FireBase'
import userMobile from './../image/userMobile.svg'

const FooterLoginMobile = () => {

    const commonPage = 'footer__icons-panel-mobile'
    const activePage = 'footer__icons-panel-mobile-active'

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
        dispatch(headerLoginButton())
        document.body.style.overflowY = 'hidden'
        handleSignOut()
    }

    const handleClickOpenModalLogin = (e) => {
            if(ref.current && ref.current.contains(e.target)) {
                console.log(true)
            } else if(ref.current && !ref.current.contains(e.target)) {
                console.log(false)
            }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOpenModalLogin)
        return () => {
            document.removeEventListener('click', handleClickOpenModalLogin)
        }
    }, ['header__block-icons-person'])

  return (
    <div ref={ref} className="header__block-sign-in">                     
        {
            stateLogin ? <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/Account'><button className="header__login"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M9.99967 9.82998C12.2655 9.82998 14.1022 8.00257 14.1022 5.74835C14.1022 3.49413 12.2655 1.66672 9.99967 1.66672C7.73389 1.66672 5.89711 3.49413 5.89711 5.74835C5.89711 8.00257 7.73389 9.82998 9.99967 9.82998Z" fill={({isActive}) => {
                return isActive ? commonPage : activePage
              }}/>
              <path d="M12.1364 11.5307H7.86292C5.38429 11.5307 3.33301 13.5716 3.33301 16.0375C3.33301 16.6328 3.58942 17.143 4.10224 17.3981C4.87147 17.8233 6.58087 18.3335 9.99967 18.3335C13.4185 18.3335 15.1279 17.8233 15.8971 17.3981C16.3245 17.143 16.6663 16.6328 16.6663 16.0375C16.6663 13.4865 14.6151 11.5307 12.1364 11.5307Z" fill={({isActive}) => {
                return isActive ? commonPage : activePage
              }}/>
            </svg>
        </button></NavLink> : <NavLink className={({isActive}) => {
                return isActive ? activePage : activePage
              }} to=''><button onClick={handleOpenFormLogin} className="header__login"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path d="M9.99967 9.82998C12.2655 9.82998 14.1022 8.00257 14.1022 5.74835C14.1022 3.49413 12.2655 1.66672 9.99967 1.66672C7.73389 1.66672 5.89711 3.49413 5.89711 5.74835C5.89711 8.00257 7.73389 9.82998 9.99967 9.82998Z" fill={({isActive}) => {
                return isActive ? activePage : activePage
              }}/>
          <path d="M12.1364 11.5307H7.86292C5.38429 11.5307 3.33301 13.5716 3.33301 16.0375C3.33301 16.6328 3.58942 17.143 4.10224 17.3981C4.87147 17.8233 6.58087 18.3335 9.99967 18.3335C13.4185 18.3335 15.1279 17.8233 15.8971 17.3981C16.3245 17.143 16.6663 16.6328 16.6663 16.0375C16.6663 13.4865 14.6151 11.5307 12.1364 11.5307Z" fill={({isActive}) => {
                return isActive ? activePage : activePage
              }}/>
        </svg>
        </button></NavLink>
        }
        <div className='header__block-options-modal'>
            {
                login ? <LoginFormMain log={log} setLog={setLog} login={login} setLogin={setLogin} />: null
            }
        </div>
    </div>  
  )
}

export default FooterLoginMobile