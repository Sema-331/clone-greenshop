import React from 'react'
import { useDispatch } from 'react-redux'
import { handleClickAddBasketProduct } from '../Slices/SliceProducts'

const Add = ({item}) => {
    
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

  return (
    <button onClick={handleAddBasket} className="favourites__btn-add-basket">ADD TO BASKET</button>
  )
}

export default Add