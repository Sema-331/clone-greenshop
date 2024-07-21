import React from 'react'
import HeaderLogo from './HraderLogo'
import HeaderNav from './HeaderNav'
import HeaderOptions from './HeaderOptions'
import My from '../zz'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import HeaderLogin from './HeaderLogin'

const MainHeader = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__main-block">
              
                <HeaderLogo />
                <HeaderNav />
                    <HeaderOptions />
            </div>
            {/*}<div className="header__mobile-version">
                <div className="header__input-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5296 3.2436C6.50469 3.2436 3.24326 6.50244 3.24326 10.5207C3.24326 14.539 6.50469 17.7978 10.5296 17.7978C12.5376 17.7978 14.3546 16.9875 15.6732 15.675C16.9977 14.3566 17.8159 12.5347 17.8159 10.5207C17.8159 6.50244 14.5545 3.2436 10.5296 3.2436ZM1.83301 10.5207C1.83301 5.72204 5.72737 1.83334 10.5296 1.83334C15.3318 1.83334 19.2262 5.72204 19.2262 10.5207C19.2262 12.6706 18.4436 14.6389 17.149 16.1554L19.9595 18.9627C20.2351 19.2379 20.2353 19.6843 19.9601 19.9599C19.6849 20.2354 19.2384 20.2356 18.9629 19.9604L16.1497 17.1505C14.6343 18.4335 12.6719 19.2081 10.5296 19.2081C5.72737 19.2081 1.83301 15.3194 1.83301 10.5207Z" fill="#A5A5A5"/>
                      </svg>
                    <input type="text" placeholder="Find your plants">
                </div>
                <div className="header__filtered-block-icons">
                    <button className="btn__header">
                        <img src="./../image/Filter.png" alt="">
                    </button>
                </div>
              </div>!*/}
        </div>
        <div id = "menu" className="menu ">
            <div className="menu__closest">
            <button className="burger__close menu__close">
                <X />
            </button>
        </div>
            <ul className="list-box-header-burger">
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        
                    }} to='/'>
                         Home 
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        
                    }} to='/Shop'>  
                        Shop
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        
                    }} to='/PlantCore'>
                        Plant Core
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        
                    }} to='/Blog' > 
                        Blog
                    </NavLink> 
                </li>
            </ul>
            {/*<HeaderLogin />*/}
        </div>
      </header>
  )
}

export default MainHeader