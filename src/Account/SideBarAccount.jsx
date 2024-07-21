import React from 'react'
import download from './../image/Download.svg'
import activity from './../image/Activity.svg'
import support from './../image/Danger Triangle.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { headerLoginButtonSecond, testSecond } from '../Slices/SliceProducts'
import { dataBase } from '../Login/FireBaseConfig/FireBase'

const SideBarAccount = () => {

  const commonPage = 'active-modal-mob'
  const activePage = 'disabled-modal-mob'
    const placeOrder = useSelector((item) => item.products.placeOrder)

    const dispatch = useDispatch()
    const history = useNavigate()

    const handleSignOut = () => {
        signOut(dataBase).then((val) => history('/'))
        dispatch(headerLoginButtonSecond())
        console.log(false)
        dispatch(testSecond())
    }
    
  return (
    <div className="account__block-options-for-user">
              <div className='account__block-header-name-options'>
                <h2 className="account__header-name">My Account</h2>
              </div>
              <div className='account__block-option-user-inside'>
                <div className='account__block-options'>
                  <ul className="account__list-box-options">
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/Account'>
                    <div className="account__block-list-item-inside">
                  <svg className="account__icons-option" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.65385C7.61038 2.65385 6.48387 3.77313 6.48387 5.15385C6.48387 6.53456 7.61038 7.65385 9 7.65385C10.3896 7.65385 11.5161 6.53456 11.5161 5.15385C11.5161 3.77313 10.3896 2.65385 9 2.65385ZM5.32258 5.15385C5.32258 3.13588 6.96902 1.5 9 1.5C11.031 1.5 12.6774 3.13588 12.6774 5.15385C12.6774 7.17181 11.031 8.80769 9 8.80769C6.96902 8.80769 5.32258 7.17181 5.32258 5.15385Z" fill="#46A358"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09963 11.5C5.47683 11.5 4.16129 12.8071 4.16129 14.4195C4.16129 14.5042 4.17686 14.5639 4.19319 14.5987C4.20697 14.6281 4.21879 14.6365 4.22865 14.6418C4.67991 14.8858 5.94511 15.3462 9 15.3462C12.0549 15.3462 13.3201 14.8858 13.7713 14.6418C13.7812 14.6365 13.793 14.6281 13.8068 14.5987C13.8231 14.5639 13.8387 14.5042 13.8387 14.4195C13.8387 12.8071 12.5232 11.5 10.9004 11.5H7.09963ZM3 14.4195C3 12.1699 4.83547 10.3462 7.09963 10.3462H10.9004C13.1645 10.3462 15 12.1699 15 14.4195C15 14.8325 14.8495 15.3725 14.3264 15.6553C13.6335 16.03 12.1469 16.5 9 16.5C5.85311 16.5 4.36654 16.03 3.67359 15.6553C3.15048 15.3725 3 14.8325 3 14.4195Z" fill="#727272"/>
                  </svg> 
                    <p className="account__description--interface">Account Details</p>
                  </div></NavLink></li>
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/AddAdress'>
                    <div className="account__block-list-item-inside">
                    <svg className="account__icons-option" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2088 7.0835C9.40466 7.0835 8.75049 7.73766 8.75049 8.54266C8.75049 9.34683 9.40466 10.0002 10.2088 10.0002C11.013 10.0002 11.6672 9.34683 11.6672 8.54266C11.6672 7.73766 11.013 7.0835 10.2088 7.0835ZM10.2088 11.2502C8.71549 11.2502 7.50049 10.036 7.50049 8.54266C7.50049 7.0485 8.71549 5.8335 10.2088 5.8335C11.7022 5.8335 12.9172 7.0485 12.9172 8.54266C12.9172 10.036 11.7022 11.2502 10.2088 11.2502Z" fill="#46A358"/>
                      
                      <g mask="url(#mask0_9_1701)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.208 2.91675C7.10634 2.91675 4.58301 5.46425 4.58301 8.59425C4.58301 12.5767 9.26967 16.4567 10.208 16.6634C11.1463 16.4559 15.833 12.5759 15.833 8.59425C15.833 5.46425 13.3097 2.91675 10.208 2.91675ZM10.208 17.9167C8.71301 17.9167 3.33301 13.2901 3.33301 8.59425C3.33301 4.77425 6.41717 1.66675 10.208 1.66675C13.9988 1.66675 17.083 4.77425 17.083 8.59425C17.083 13.2901 11.703 17.9167 10.208 17.9167Z" fill="#46A358"/>
                      </g>
                      </svg>
                    <p className="account__description--interface">Adress</p>
                  </div></NavLink></li>

                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/Order'>
                  <div
                   className="account__block-list-item-inside">
                    <p className='account__count-order-product'>{placeOrder.length}</p>
                    <svg className="account__icons-option" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_9_1707)">
                      <path d="M12.8646 15.1873H7.41669C5.0909 15.1873 3.19871 13.2951 3.19871 10.9693V6.64588C3.19871 4.48381 2.12108 2.48255 0.316103 1.29245C-0.00804932 1.07874 -0.0975409 0.642736 0.11617 0.318584C0.329881 -0.00560306 0.765845 -0.0951298 1.09007 0.118652C2.12045 0.798029 2.95638 1.69407 3.55414 2.72572C3.68332 2.87043 4.72495 3.97449 6.43253 3.97449H14.5278C16.7364 3.93319 18.4651 6.14963 17.8877 8.28147L16.9558 11.9958C16.4843 13.8749 14.802 15.1873 12.8646 15.1873ZM4.42734 4.98332C4.54421 5.52326 4.6047 6.08 4.6047 6.64588V10.9693C4.6047 12.5198 5.86616 13.7813 7.41669 13.7813H12.8646C14.1562 13.7813 15.2777 12.9064 15.592 11.6536L16.5239 7.93932C16.8671 6.67259 15.8397 5.35598 14.5278 5.38048H6.4325C5.66022 5.38048 4.98801 5.21398 4.42734 4.98332ZM7.06519 17.1205C7.06519 16.6352 6.67176 16.2418 6.18645 16.2418C5.02046 16.2882 5.02147 17.9533 6.18645 17.9993C6.67176 17.9993 7.06519 17.6059 7.06519 17.1205ZM14.06 17.1205C14.06 16.6352 13.6666 16.2418 13.1813 16.2418C12.0153 16.2882 12.0163 17.9533 13.1813 17.9993C13.6666 17.9993 14.06 17.6059 14.06 17.1205ZM15.2308 7.48948C15.2308 7.10121 14.9161 6.78648 14.5278 6.78648H6.71369C5.78096 6.8236 5.78166 8.15567 6.71369 8.19247H14.5278C14.9161 8.19247 15.2308 7.87774 15.2308 7.48948Z" fill="#727272"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_9_1707">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                    <p className="account__description--interface">Orders</p>
                  </div></NavLink></li>
                  
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/WishList'>
                    <div className="account__block-list-item-inside">
                    <svg className="account__icons-option" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_9_1709)">
                        <path d="M8 15.1099C7.77222 15.1099 7.55261 15.0273 7.38147 14.8774C6.73511 14.3123 6.11194 13.7811 5.56213 13.3126L5.55933 13.3102C3.94739 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450806 3.15588 1.26929 2.26807C2.09753 1.36975 3.23401 0.875 4.46973 0.875C5.39331 0.875 6.23914 1.16699 6.98364 1.7428C7.35938 2.03345 7.69995 2.38916 8 2.80408C8.30017 2.38916 8.64062 2.03345 9.01648 1.7428C9.76099 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0529 11.9364 10.4412 13.3099C9.89038 13.7792 9.26624 14.3112 8.61841 14.8777C8.44739 15.0273 8.22766 15.1099 8 15.1099ZM4.46973 1.81226C3.4989 1.81226 2.60706 2.19971 1.95825 2.90332C1.2998 3.61755 0.937134 4.60486 0.937134 5.68347C0.937134 6.82153 1.36011 7.83936 2.30847 8.98364C3.2251 10.0897 4.5885 11.2516 6.16711 12.5969L6.17004 12.5994C6.72192 13.0697 7.34753 13.6029 7.99866 14.1722C8.65369 13.6018 9.28027 13.0677 9.83325 12.5967C11.4117 11.2513 12.775 10.0897 13.6917 8.98364C14.6399 7.83936 15.0629 6.82153 15.0629 5.68347C15.0629 4.60486 14.7002 3.61755 14.0417 2.90332C13.3931 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1663 2.03833 9.58972 2.48413C9.07593 2.88159 8.71802 3.38403 8.50818 3.7356C8.40027 3.91638 8.21033 4.02429 8 4.02429C7.78967 4.02429 7.59973 3.91638 7.49182 3.7356C7.2821 3.38403 6.92419 2.88159 6.41028 2.48413C5.83374 2.03833 5.18079 1.81226 4.46973 1.81226Z" fill="#727272"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_9_1709">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="account__description--interface">Wishlist</p>
                  </div></NavLink></li>
                  
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/Acsscount'><div className="account__block-list-item-inside">
                    <img src={activity} alt="" className="account__icons-option" />
                    <p className="account__description--interface">Reports</p>
                  </div></NavLink></li>
                  
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/Accountfd'><div className="account__block-list-item-inside">
                    <img src={download} alt="" className="account__icons-option" />
                    <p className="account__description--interface">Downloads</p>
                  </div></NavLink></li>
                  
                  <li className="account__list-item-options">
                  <NavLink className={({isActive}) => {
                    return isActive ? commonPage : activePage
                  }} to='/Accouasdnt'><div className="account__block-list-item-inside">
                    <img src={support} alt="" className="account__icons-option" />
                    <p className="account__description--interface">Support</p>
                  </div></NavLink></li>
                  </ul>
                  <div onClick={handleSignOut} className="account__block-list-item-inside-log">
                    <svg className="account__icons-option-log" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.1601 10.1006H8.12598" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="account__description--interface account__description--interface-login">Logout</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default SideBarAccount