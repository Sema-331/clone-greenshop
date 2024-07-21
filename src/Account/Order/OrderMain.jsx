import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBarAccount from '../SideBarAccount'
import { useEffect } from 'react'
import { fetchQueryUser } from '../../Slices/SliceProducts'
import { AlertCircle, ChevronDown, ChevronLeft, MoreVertical, X } from 'lucide-react'
import SideBarMobile from '../SideBarMobile'
import { useNavigate } from 'react-router-dom'
import AccountToggle from '../AccountToggle'

const OrderMain = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const arr = useSelector((item) => item.products.arr)
    const order = useSelector((item) => item.products.orderItem)
    const placeOrder = useSelector((item) => item.products.placeOrder)
    const orderNumber = useSelector((item) => item.products.countOrderNumber)
    console.log(placeOrder)
    console.log(arr)
    console.log(order)

    console.log(order[0])
    console.log(placeOrder[0])

    const [stateModal, setStateModal] = useState(false)

  return (
    <section>
        <div className="container">
            <div className="order__main-block">
                <div className='order__block-delivery-info'>
                    <AccountToggle />
                    <SideBarAccount />
                    {
                        arr.length === 0 ? 
                        <div className='order__delivery-block-none'>
                            <div className='order__block-delivery-image'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="#46A358" stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle fill='#fff' cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle fill='#fff' cx="17" cy="18" r="2"/></svg>
                            </div>
                            <div className='order__block-description-tutorial-sale-item'>
                                <h2 className='order__header-tutorial'>You don't have any active orders at the moment. To order an item:</h2>
                                <ul className="order__block-list-box">
                                    <li className="order__block-list-item">
                                        <div className='order__block-list-item-inside'>
                                            <span>—</span>
                                            <p className='order__description-tutorial-for-sale'>Add the products you want to order to the cart</p>
                                        </div>
                                    </li>
                                    <li className="order__block-list-item">
                                        <div className='order__block-list-item-inside'>
                                            <span>—</span>
                                            <p className='order__description-tutorial-for-sale'>Select the products you want to order now.</p>
                                        </div>
                                    </li>
                                    <li className="order__block-list-item">
                                        <div className='order__block-list-item-inside'>
                                            <span>—</span>
                                            <p className='order__description-tutorial-for-sale'>Fill out the delivery form.</p>
                                        </div>
                                    </li>
                                    <li className="order__block-list-item">
                                        <div className='order__block-list-item-inside'>
                                            <span>—</span>
                                            <p className='order__description-tutorial-for-sale'>Get a track number.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> : 
                        <div className='order__block-product-delivery'>
                            <ul className='order__block-short-info-product'>
                                <>
                                    <li className='order__block-main-info-product'>
                                        <div className='order__block-list-item'>
                                            <div className='order__block-maps'>
                                        {
                            order.map((item) => (
                                            <div className='order__block-list-item-inside'>
                                            <div className='order__block-content'>
                                                <div className="order__product-image">
                                                    <img src={item.img} className='order__image' alt="" />
                                                </div>
                                                <div className="order__block-description-info-product">
                                                    <h3 className='order__header-name-product'>{item.title}</h3>
                                                    <div className="order__block-sku">
                                                        <p className='order__sku-name'>SKU: </p>
                                                        <p className='order__sku-value'>{item.sku}</p>
                                                    </div>
                                                    <p className='order__price-product'>${item.price}.00</p>
                                                </div>
                                            </div>
                                            
                                                <div className='order__total-values-blocks'>
                                                    <div className="order__block-total-value">
                                                        <p className="order__price-total-name">Price: </p>
                                                        <p className="order__price-total-value">${item.price * item.count}.00</p>
                                                    </div>
                                                    <div className="order__block-total-value-quantity">
                                                        <p className="order__quantity-total-name">Quantity: </p>
                                                        <p className="order__quantity-total-value">{item.count}</p>
                                                    </div>
                                                </div>
                                                <div style={{position:'absolute', top:'10px', right:'9px'}}>
                                                <MoreVertical  />
                                                </div>
                                                </div>
                                                   ))
                                                }
                                                </div>
                                                {/* <div className='order__block-recipient'>
                                                    {
                                                        placeOrder.map((item) => (
                                                            <div className='order__main-blocks-about-user-recipients-info'>
                                                                <div className='order__block-info-heads'>
                                                                    <h2 className='order__head-info-delivery'>Information about the delivery</h2>
                                                                    <AlertCircle  stroke='#46A358' />
                                                                </div>
                                                            <div className='order__block-recipient-inside'>
                                                            <div className='order__block-trail'><p className='order__description-trail-number'>{orderNumber}</p></div>
                                                        <p className="order__header-recipient">Recipient: </p>
                                                        <div    className="order__recipient-value-block"> 
                                                            <p className="order__recipient-first-name">{item.firstName}</p>
                                                            <p className="order__recipient-last-name">{item.lastName}</p>
                                                        </div>   
                                                    </div>
                                                    <div className='order__block-city-user'>
                                                        <p className="order__city-user-name">City: </p>
                                                        <p className="order__city-user-value">{item.city}</p>
                                                    </div>
                                                    <div className='order__block-adress-user'>
                                                        <p className="order__adress-user-name">Adress: </p>
                                                        <p className="order__adress-user-value">{item.adress}</p>
                                                    </div>
                                                    </div>
                                                        ))
                                                    }
                                                
                                                </div> */}
                                        </div>
                                    </li>
                                    <div></div>
                                    </>
                        </ul>
                        {/*{
                            arr.map((item) => (
                                <div>
                                    <p>{item.id}</p>
                                    <img src={item.img} />
                                </div>
                            ))
                        }*/}
                    </div>
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OrderMain