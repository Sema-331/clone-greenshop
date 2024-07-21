import React from 'react'
import { useDispatch } from 'react-redux'
import { handleClickAddBasketProduct, handleClickDecrementProduct, handleClickIncrementProduct, testSixth } from '../Slices/SliceProducts'
import ShopFavourites from './ShopFavourites'
import { Link } from 'react-router-dom'

const ShopButtonsActive = ({item}) => {

    const dispatch = useDispatch()
    
    const handleAddBasket = () => {
        const product = {
          id: item.id,
          img: item.imgSolo,
          title: item.title,
          sku: item.sku,
          price: item.price,
          count: item.count,
          trackNumber: item.trackNumber
        }
        dispatch(handleClickAddBasketProduct(product))
    }

    const handleClickAddProductCheckout = () => {
      const product = {
        img: item.imgSolo,
        title: item.title,
        sku: item.sku,
        price: item.price,
        count: item.count,
      }
      dispatch(handleClickAddBasketProduct(product))
    }

  return (
    <div className='item__amount-count-buttons'>
        <div className='item__amount-count-inside'>
            <button onClick={() => dispatch(handleClickDecrementProduct(item.id))} className='item__amount-minus'>-</button>
            <p className='item__amount-item'>{item.count}</p>
            <button onClick={() => dispatch(handleClickIncrementProduct(item.id))} className='item__amount-add'>+</button>
        </div>
        <div className='item__product-buy'>
          <Link to='/Basket'>
            <button onClick={() => {
              handleAddBasket()
              // dispatch(testSixth(item.id))
            }} className='item__product-button-buy'>Buy NOW</button>
          </Link>
            <button onClick={handleAddBasket} className='item__product-button-add'>ADD TO CART</button>
            <ShopFavourites item={item} />
        </div>
    </div>
  )
}

export default ShopButtonsActive