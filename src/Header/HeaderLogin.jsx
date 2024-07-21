import React, { useEffect, useRef, useState } from 'react'
import LoginFormMain from '../LoginForm/LoginFormMain'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { headerLoginButton, headerLoginButtonSecond, testSecond } from '../Slices/SliceProducts'
import { dataBase } from '../Login/FireBaseConfig/FireBase'

const HeaderLogin = () => {

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
            stateLogin ? <button onClick={handleSignOut} className="header__login"> 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='header__path-first' d="M18.1601 10.1006H8.12598" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='header__path-second' d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='header__path-third' d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>    
            <p className="header__options-description">Logout</p>
        </button> : <button onClick={handleOpenFormLogin} className="header__login"> 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='header__path-first' d="M18.1601 10.1006H8.12598" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='header__path-second' d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='header__path-third' d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>    
            <p className="header__options-description">Login</p>
        </button>
        }
        <div className='header__block-options-modal'>
            {
                login ? <LoginFormMain log={log} setLog={setLog} login={login} setLogin={setLogin} />: null
            }
        </div>
    </div>  
  )
}

export default HeaderLogin