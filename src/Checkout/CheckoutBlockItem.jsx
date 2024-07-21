import React from 'react'
import { useSelector } from 'react-redux'
import CheckBlockItem from './CheckBlockItem'

const CheckoutBlockItem = () => {

    const secondSelector = useSelector((item) => item.products.totalprice)
    const thirdSelector = useSelector((item) => item.products.shipping)

  return (
    <div className='check__block-about-products'>
      <h2 className="check__block-header-order-active">Your Order</h2>
      <div className='check__block-about-product-description'>
        <h3 className='check__item-description-name-first'>Products</h3>
        <h3 className='check__item-description-name-subtotal'>Subtotal</h3>
      </div>
      <CheckBlockItem />
      <div className="check__block-pay">
        <div className='check__block-quest-coupon-had'>
          <p className="check__pay-description-coupon">Have a coupon code? <span>Click here</span></p>
        </div>
        <div className="check__main-block-pay-statistics">
          <div className="check__block-subtotal">
            <h3 className="check__header-subtotal-item">Subtotal</h3>
            <p className="check__description-cost-item">${secondSelector}</p>
          </div>
          <div className="check__block-coupon-discont">
            <h3 className="check__header-coupon-discont-item">Coupon Discount</h3>
            <p className="check__description-coupon-discont-item">$(-) 00.00</p>
          </div>
          <div className="check__block-shipping">
            <h3 className="check__header-shipping-item">Shiping</h3>
            <p className="check__description-shipping-item">${thirdSelector}</p>
          </div>
        </div>
        <div className="check__shipping-charge-block">
          <p className="check__shipping-charge-description">View shipping charge</p>
        </div>
        <div className="check__block-total-price-items">
          <h3 className="check__header-price-item">Total</h3>
          <p className="check__item-price-count">${secondSelector + thirdSelector}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutBlockItem