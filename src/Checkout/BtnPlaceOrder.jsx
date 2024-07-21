import React from 'react'
import { useDispatch } from 'react-redux'
import { testFifth } from '../Slices/SliceProducts'

const BtnPlaceOrder = ({item, isValid, handleClick}) => {

    const dispatch = useDispatch()
const handleCLickSecond = () => {
    const a = {
        count: item.count,
        sku: item.sku,
        price: item.price,
        title: item.title,
        trackNumber: item.trackNumber,
        img: item.imgSolo
      }
      dispatch(testFifth(item))
}

  return (
    <button onClick={() => {
        handleCLickSecond()
        handleClick()
    }} disabled={!isValid} form="form" type='submit' className='check__button-give-order'>Place Order</button>
  )
}

export default BtnPlaceOrder