import React from 'react'
import img from './../../image/image 12 (1).png'

const ProductBlockSales = () => {
  return (
    <div className="product__block-sales">
        <h2 className="product__sales-header">Super Sale</h2>
        <p className="product__sales-description">UP TO 75% OFF</p>
        <img src={img} alt="" className="product__sales-img" />
    </div>
  )
}

export default ProductBlockSales