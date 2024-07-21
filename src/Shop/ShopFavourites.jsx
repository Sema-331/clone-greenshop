import React, { useState } from 'react'
import { handelClickRemoveProductFavourites, handleClickAddFavourites, toggleCompleteTrue, toggleStatus, toggleStatusFalse, toggleStatusTrue } from '../Slices/SliceProducts'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopFavourites = ({item}) => {

    const selector = useSelector((item) => item.products.headerLoginButton)
    const [favourites, setFavourites] = useState(false)
    const dispatch = useDispatch()

    const viewStateFavourites = () => {
      dispatch(toggleStatus(item.id))
      window.location.reload()
    }

    const handleClickFavouritesActive = () => {
        setFavourites(true)
        dispatch(toggleStatusTrue(item.id))
        const a = {
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.imgSolo,
            custom: item.custom,
            star: item.star,
            descriptionShort: item.descriptionShort,
            sku: item.sku,
            categories: item.categories,
            tags: item.tags,
            imgFirst: item.imgFirst,
            imgSecond: item.imgSecond,
            imgthird: item.imgthird
          }
          dispatch(handleClickAddFavourites(a))
    }

    const handleClickFavouritesDisable = () => {
        dispatch(toggleStatusFalse(item.id))
        setFavourites(false)
        dispatch(handelClickRemoveProductFavourites(item.id))
    }

    const notify = () => toast.info("Register or log in to your personal account");

  return (
    <>
    {
      selector ? <button className='item__product-button-heart'>
      {item.favourites ? <svg onClick={handleClickFavouritesDisable} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="#46A358" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg> : <svg
      onClick={handleClickFavouritesActive} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>}</button>
       :
       <>
        <svg
          onClick={notify} className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#46A358" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </svg>
        <ToastContainer
          position="top-right"
          autoClose={50000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    }
    </>
  )
}

export default ShopFavourites