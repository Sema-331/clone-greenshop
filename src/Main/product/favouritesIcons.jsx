import React, { useEffect, useState } from 'react'
import { handelClickRemoveProductFavourites, handleClickAddFavourites, toggleStatus, toggleStatusFalse, toggleStatusTrue, } from '../../Slices/SliceProducts'
import { useDispatch, useSelector } from 'react-redux'

const FavouritesIcons = ({item}) => {
    
    const selector = useSelector((item) => item.products.favouritesItem)
    const [favourites, setFavourites] = useState(localStorage.getItem('favourites') !== null ? JSON.parse(localStorage.getItem('favourites')) : 0)
    const dispatch = useDispatch()

    const viewStateFavourites = () => {
      dispatch(toggleStatusTrue(item.id))
    }

  const handelChangeFavouritesItemTrue = () => {
    // viewStateFavourites()
    dispatch(toggleStatus(item.id))
    setFavourites(1)
    const a = {
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.imgSolo,
      custom: item.custom,
      star: item.star,
      descriptionShort: item.descriptionShort,
      sku: item.sku,
      count: item.count,
      categories: item.categories,
      tags: item.tags,
      imgFirst: item.imgFirst,
      imgSecond: item.imgSecond,
      imgthird: item.imgthird,
      favourites: item.favourites,
    }
    dispatch(handleClickAddFavourites(a))
  }

  const handleRemoveFavourites = () => {
    // dispatch(toggleStatusFalse(item.id))
    dispatch(toggleStatus(item.id))
    dispatch(handelClickRemoveProductFavourites(item.id))
    setFavourites(0)
  }

  return (
    <>
        {item.favourites === true ?
           <svg style={{position: "absolute",
            right: "9px",
            top: "-3px",}} onClick={handleRemoveFavourites} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="red" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg> : <svg
            onClick={handelChangeFavouritesItemTrue} style={{position: "absolute",
            right: "9px", top: "-3px",}}  className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
        }
    </>
  )
}

export default FavouritesIcons