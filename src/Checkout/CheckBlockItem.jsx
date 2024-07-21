import React from 'react'
import { useSelector } from 'react-redux'

const CheckBlockItem = () => {

    const selector = useSelector((item) => item.products.arr)

  return (
    <div className='check__block-main-items'>
        {
          selector.map((item) => (
            <div className='check__block-main-items-inside'>
              <div className="check__block-image-description">
                <img className='check__item-image' src={item.img} alt="" />
                <div className="check__block-description-item">
                  <h3 className="check__header-main-items">{item.title}</h3>
                  <div className="check__block-identificatore-product">
                    <p className='check__dentificatore-name'>SKU:</p>
                    <p className='check__identificatore-value'>{item.sku}</p>
                  </div>
                </div>
              </div>
              <div className="check__block-count-item">
                <p className="check__item-count">(x{item.count})</p>
              </div>
              <div className="check__block-product-price">
                <p className="check__price-product">${item.price}</p>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default CheckBlockItem