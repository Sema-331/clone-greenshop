import { Link } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {

  const activePage = 'header__list-item'
  const commonPage = 'active__header-navigation'

  return (
    <div className="header__block-navigation">
        <nav className="header__nav">
            <ul className="header__list-box">
              <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/'>
                Home
              </NavLink>
              <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/Shop'>
                Shop
              </NavLink>
              <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/PlantCore'>
                Plant Core
              </NavLink>
                <NavLink className={({isActive}) => {
                return isActive ? commonPage : activePage
              }} to='/Blog'>
                Blog
              </NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderNav