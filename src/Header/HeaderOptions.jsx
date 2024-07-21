import React, { useEffect, useRef, useState } from 'react'
import HeaderBurger from './HeaderBurger'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormMain from '../LoginForm/LoginFormMain';
import { dataBase } from '../Login/FireBaseConfig/FireBase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { handleCLickRemoveArrayBasket, handleClickSearchProduct, handleSearchValueUser, headerLoginButton, headerLoginButtonSecond, test, testSecon, testSecond } from '../Slices/SliceProducts';

const HeaderOptions = () => {

    const dispatch = useDispatch()
    const headerBoolean = useSelector((item) => item.products.headerLoginButton)
    const stateLogin = useSelector((item) => item.products.headerLoginButton)
    const selector = useSelector((item) => item.products.favouritesItem)
    const secondSelector = useSelector((item) => item.products.basketProducts)
    const loginUser = useSelector((item) => item.products.login)
    const searchValueUser = useSelector((item) => item.products.searchValue)
    const ref = useRef()
    const secondRef = useRef()
    const [stateSearchImage, setStateSearchImage] = useState(false)
    const [state, setState] = useState(false)
    const [login, setLogin] = useState(false)
    const [search, setSearch] = useState(false)
    const [valueSearch, setValueSearch] = useState('')
    const [log, setLog] = useState(false)
    
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

    const handleClickOpenSearch = (e) => {
        if(secondRef.current && secondRef.current.contains(e.target)) {
            setSearch(true)
            setStateSearchImage(true)
        } else if(secondRef.current && !secondRef.current.contains(e.target)) {
            setSearch(false)
            setStateSearchImage(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOpenSearch)
        return () => {
            document.removeEventListener('click', handleClickOpenSearch)
        }
    }, ['header__svg-options-individual'])

    useEffect(() => {
        if(headerBoolean === false) {
            
        } else {

        } 
    }, [headerBoolean])

  return (
    <div className="header__block-options">
        <div className="header__block-icons-options">
            <div className='header__block-icons-person'>
                    {/*{
                        search ? <div className='header__block-search-input'>
                        <input placeholder='Find your plants' className='header__input' type="text" /> <svg onClick={() => setSearch(false)} xmlns="http://www.w3.org/2000/svg" className="header__svg-options" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#fff"/>
                    </svg></div> : <svg onClick={() => setSearch(true)} xmlns="http://www.w3.org/2000/svg" className="header__svg-options" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#3D3D3D"/>
                    </svg>
                    }*/}
                        <div ref={secondRef} className={ stateSearchImage ? 'header__block-search-input' : 'header__block-search-input-disabled'}>
                        {
                        search ? 
                        <input style={{position: 'absolute', right:'25px' }} placeholder='Find your plants' /*onChange={(e) => {
                            console.log(valueSearch)
                            setValueSearch(e.target.value)
                        }} value={valueSearch}*/ onChange={(e) => dispatch(handleSearchValueUser(e.target.value))} value={searchValueUser} className='header__input' type="text" /> : null } 
                        <svg onClick={() =>{
                            setStateSearchImage(!stateSearchImage)
                            dispatch(handleClickSearchProduct())
                        }} xmlns="http://www.w3.org/2000/svg" className="header__svg-options-individual" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#fff"/>
                    </svg></div> {/*<svg ref={ref} style={{position:'absolute', right:'266px'}} onClick={() => setSearch(true)} xmlns="http://www.w3.org/2000/svg" className="header__svg-options-individual" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#000"/>
                    </svg>*/} 
                <NavLink className={({isActive}) => {
                
              }} to='/Basket'>
                    <div className='header__block-length-basket-product'>
                        <svg className="header__svg-options" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red">
                            <path className='header__active-page' d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z" fill="#3D3D3D"/>
                        </svg>
                        <p className='header__length-basket-count'>{secondSelector.length}</p>
                    </div>
                </NavLink>  
                {
                    stateLogin ?                 <Link to='/Favourite'>
                    <div className='header__block-length'>
                        <svg className='svg__animation heart__animation-header heart__nav' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z" fill="#3D3D3D"/>
                        </svg>
                        <p className='header__length-count'>{selector.length}</p>
                    </div>
                </Link> : null
                }
                {
                    loginUser ? <Link to='/Account'>
                    <svg className="account__icons-option" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.65385C7.61038 2.65385 6.48387 3.77313 6.48387 5.15385C6.48387 6.53456 7.61038 7.65385 9 7.65385C10.3896 7.65385 11.5161 6.53456 11.5161 5.15385C11.5161 3.77313 10.3896 2.65385 9 2.65385ZM5.32258 5.15385C5.32258 3.13588 6.96902 1.5 9 1.5C11.031 1.5 12.6774 3.13588 12.6774 5.15385C12.6774 7.17181 11.031 8.80769 9 8.80769C6.96902 8.80769 5.32258 7.17181 5.32258 5.15385Z" fill="#727272"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09963 11.5C5.47683 11.5 4.16129 12.8071 4.16129 14.4195C4.16129 14.5042 4.17686 14.5639 4.19319 14.5987C4.20697 14.6281 4.21879 14.6365 4.22865 14.6418C4.67991 14.8858 5.94511 15.3462 9 15.3462C12.0549 15.3462 13.3201 14.8858 13.7713 14.6418C13.7812 14.6365 13.793 14.6281 13.8068 14.5987C13.8231 14.5639 13.8387 14.5042 13.8387 14.4195C13.8387 12.8071 12.5232 11.5 10.9004 11.5H7.09963ZM3 14.4195C3 12.1699 4.83547 10.3462 7.09963 10.3462H10.9004C13.1645 10.3462 15 12.1699 15 14.4195C15 14.8325 14.8495 15.3725 14.3264 15.6553C13.6335 16.03 12.1469 16.5 9 16.5C5.85311 16.5 4.36654 16.03 3.67359 15.6553C3.15048 15.3725 3 14.8325 3 14.4195Z" fill="#727272"/>
                    </svg> 
                </Link> : null
                }
                {/*<Link to='/Delivery'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/></svg>
                </Link>*/}
            </div>
            <div ref={ref} className="header__block-sign-in">                     
                    {
                        stateLogin ? <button style={{minWidth: '121px'}} onClick={handleSignOut} className="header__login"> 
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
            <HeaderBurger />                    
        </div>
    </div>
  )
}

export default HeaderOptions