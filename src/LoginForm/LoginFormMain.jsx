import React, { useEffect, useState } from 'react'
import google from './../image/googleIcons.svg'
import facebook from './../image/facebookeIcons.svg'
import { X } from 'lucide-react'
import { dataBase } from '../Login/FireBaseConfig/FireBase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { headerLoginButton, stateHoverProductFalse, test } from '../Slices/SliceProducts'

const LoginFormMain = ({login, setLogin, log, setLog, setConfirmProductAdd, setStateFavourite}) => {

    const history = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = useState(false)
    const [svg, setSvg] = useState(false)

    const handleCloseFormModal = () => {
        setLogin(false)
        setLog(false)
        document.body.style.overflowY = 'auto'
    }

    {/*const handleFormForUser = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        if(type == 'signIn') {
            signInWithEmailAndPassword(dataBase, email, password).then((data) => {
                console.log(data)
                handleCloseFormModal()
                history('/Delivery') 
                setLog(true)
            })
        } else if (type == 'signUp') {
            if(password !== confirmPassword) {
                alert('Пароли не совпадают!')
            } else if(password === confirmPassword) {
                createUserWithEmailAndPassword(dataBase, email, password).then((data) => {
                    console.log(data)
                    handleCloseFormModal()
                    history('/Delivery')
                    setLog(true)
                }).catch((err) => {
                    alert(err.code)
                })
            }
        }
    }*/}

    const handleFormForUser = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(type == 'signIn') {
            signInWithEmailAndPassword(dataBase, email, password).then((data) => {
                console.log(data)
                handleCloseFormModal()
                history('/Account') 
                dispatch(headerLoginButton())
                console.log(true)
            })
        } else 
                createUserWithEmailAndPassword(dataBase, email, password).then((data) => {
                    console.log(data)
                    handleCloseFormModal()
                    
                    console.log(true)
                }).catch((err) => {
                    alert(err.code)
                })
        }

        const handleCLickLogInUser = () => {
            setLog(true)
            dispatch(test())
        }

  return (
    <div className='form__login-block'>
        <div className="form__block-header-name">
            <h2 onClick={() => setState(false)} className={state ? 'form__header-name-login-disabled' : 'form__header-name-login'}>Login</h2>
            <h2 onClick={() => setState(true)} className={state ? 'form__header-name-register-active' : 'form__header-name-register'}>Register</h2>
        </div>
        <div className="form__block-main-fill-field">
            <p className="form__description-name-fill-field">Enter your username and password to login.</p>
            <form onSubmit={(e) => handleFormForUser(e, state ? 'signUp' : 'signIn' )} action="">
                {
                    state ? 
                    <div className='form__block-register-main'>
                        <div className="form__block-register-inside">
                            <input placeholder='Username' className='form__input-fill-ield' type="text" />
                            <input placeholder='Enter your email address' name='email' className='form__input-fill-ield' type="email" />
                            <div className='form__input-block-password-write'>
                                <input placeholder='Password' name='password' className='form__input-fill-ield' type={svg ? "text" : "password"} />
                                {
                                svg ? <svg onClick={() => setSvg(false)} className='form__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> : <svg onClick={() => setSvg(true)} className='form__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                            
                                }
                            </div>
                            {/*<input placeholder='Confirm Password' name='confirmPassword' className='form__input-fill-ield' type="password" />*/}
                            <button className="form__button-succes">
                                Register
                            </button>
                        </div>
                    </div> : <><div className="form__block-field">
                    <input className='form__first-input' name='email' placeholder='almamun_uxui@outlook.com' type="email" />
                    <div className='form__input-block-second'>
                        <input className='form__second-input' name='password' placeholder='Password' type={svg ? "text" : "password"} />
                        {
                            svg ? <svg onClick={() => setSvg(false)} className='form__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> : <svg onClick={() => setSvg(true)} className='form__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                            
                        }
                    </div>
                    </div>
                    <div className="form__block-forgot-password-help">
                        <p className="form__description-name-help">Forgot Password?</p>
                    </div>
                    <button onClick={() => {
                        // dispatch(stateHoverProductFalse())
                        handleCLickLogInUser()
                    }} className='form__succecess-button-form'>Login</button></>
                }
                <div className="form__login-in-with-options">
                    <div className='form__block-name-description-option'>
                        <hr />
                        <p className="form__block-name-description-options">Or login with</p>
                    </div>
                    <div className='form__block-mobile-for'>
                        <div className='form__block-name-with-google'>
                            <button className="form__button-sign-google">
                                <img src={google} alt="" className="form__image-google" />
                                <p className="form__description-button-google">Login with Google</p>
                            </button>
                        </div>
                        <div className='form__block-name-with-facebook'>
                            <button className="form__button-sign-facebook">
                            <svg className="form__image-facebook" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <g clip-path="url(#clip0_9_1018)">
                                <path d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z" fill="#3B5999"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_9_1018">
                                  <rect width="20" height="20" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                                <p className="form__description-button-facebook">Login with Facebook</p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <button onClick={() => {
            dispatch(stateHoverProductFalse())
            handleCloseFormModal()
        }} className='form__close-form-button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path stroke="#46A358" fill="red" d="M18 6 6 18"></path><path stroke='#46A358' fill="red" d="m6 6 12 12"></path></svg></button>
    </div>
  )
}

export default LoginFormMain