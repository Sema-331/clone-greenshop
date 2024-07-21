import React from 'react'
import burger from './../image/burger_line_list_menu_nav_navigation_option_icon_123231.svg'
import { useEffect } from 'react'
import { useRef } from 'react'
import { handleClickSearchProduct } from '../Slices/SliceProducts'
import { useDispatch } from 'react-redux'

const HeaderBurger = () => {

  const dispatch = useDispatch()

  const wrapBurger = useRef()
    useEffect(() => {
        document.addEventListener('click', burgerClick)
        return () => {
            document.removeEventListener('click', burgerClick)
        }
    }, )
    const burgerClick = (event) => {
        if (wrapBurger.current && wrapBurger.current.contains(event.target)) {
            document.querySelector('.menu').classList.add('burger_active')
        } else if ( wrapBurger.current && !wrapBurger.current.contains(event.target)) {
            document.querySelector('.menu').classList.remove('burger_active')
        }
    }

  return (
    <div className='burger__block-main'>
      <div className='burger__block-find-item'>
        <input className='burger__find-field' type="text" placeholder='Find your plants' />
        <button className='burger__button-find-item-mobile'>
        <svg onClick={() => dispatch(handleClickSearchProduct())} xmlns="http://www.w3.org/2000/svg" className="header__svg-options-individual" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#000"/>
          </svg>
        </button>
      </div>
      <div id='burger' className="header__burger-block">
          <button ref={wrapBurger} className="header__burger-menu">
              <img src={burger} alt="image" />
          </button>
      </div>
    </div>
  )
}

export default HeaderBurger