import React, { useEffect, useState } from 'react'
import { handelClickRemoveProductFavourites, handleClickAddFavourites, stateHoverProductTrue, toggleStatus, } from '../../Slices/SliceProducts'
import { useDispatch, useSelector } from 'react-redux'
import LoginFormMain from '../../LoginForm/LoginFormMain'

const FavouritesIconsSecond = ({item}) => {
    
    const [stateFavourite, setStateFavourite] = useState(false)
    const selector = useSelector((item) => item.products.favouritesItem)
    const [favourites, setFavourites] = useState(localStorage.getItem('favourites') !== null ? JSON.parse(localStorage.getItem('favourites')) : 0)
    const dispatch = useDispatch()
    const [confirmProductAdd, setConfirmProductAdd] = useState(false)
    const [modal, setModal] = useState(false)
    const [login, setLogin] = useState(false)
    const [search, setSearch] = useState(false)
    const [log, setLog] = useState(false)

    const viewStateFavourites = () => {
      dispatch(toggleStatus(item.id))
      window.location.reload()
    }

  const handelChangeFavouritesItemTrue = () => {
    viewStateFavourites()
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
      categories: item.categories,
      tags: item.tags,
      imgFirst: item.imgFirst,
      imgSecond: item.imgSecond,
      imgthird: item.imgthird
    }
    dispatch(handleClickAddFavourites(a))
  }

  const handleRemoveFavourites = () => {
    viewStateFavourites()
    dispatch(handelClickRemoveProductFavourites(item.id))
    setFavourites(0)
  }

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width: '100%'}}>
      <svg onClick={() => {
        dispatch(stateHoverProductTrue())
        setLogin(true)
        document.body.style.overflowY = 'hidden'
      }}
        className='svg__animation heart__animation' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" width="20"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
      </svg>
      {
        login ? <LoginFormMain setStateFavourite={setStateFavourite} confirmProductAdd={confirmProductAdd} setConfirmProductAdd={setConfirmProductAdd} item={item} log={log} setLog={setLog} login={login} setLogin={setLogin}  /> : null
      }
    </div>
  )
}

export default FavouritesIconsSecond