import React, { useEffect, useState } from 'react'
import { handleClickAddCountBasketItem, handleClickRemoveCountItemBasket, handleClickRemoveItemBasket, toggleCompleteTrack, toggleStatusTrack, testThird, testForth, nulls, testFifth } from '../Slices/SliceProducts'
import { useDispatch, useSelector } from 'react-redux'

const BasketItemProduct = ({item}) => {

    const selector = useSelector((item) => item.products.stateProductBasket)
    const dispatch = useDispatch()
    const [state, setState] = useState(false)

    const hanleClickTouchProduct = () => {
      const a = {
        count: item.count,
        sku: item.sku,
        price: item.price,
        title: item.title,
        trackNumber: item.trackNumber,
        img: item.imgSolo
      }
        setState(!state)
        dispatch(testThird(item.id))
        dispatch(testForth(item.trackNumber))
        dispatch(testFifth(item))
        //dispatch(testThird(item.id))
        //dispatch(testForth(item.trackNumber))
    }

    const handleClickSecond = () => {
      const a = {
        count: item.count,
        sku: item.sku,
        price: item.price,
        title: item.title,
        trackNumber: item.trackNumber,
        img: item.imgSolo
      }
        setState(!state)
        dispatch(testThird(item.id))
        dispatch(testForth(item.trackNumber))
        // dispatch(testFifth(item))
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleWindowResize);
      
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, );

  return (
    <>
    {
      windowWidth > 576 ? <div className={ item.trackNumber ? 'basket__item-block-active basket__items-block' : 'basket__items-block'}>
      <input onClick={hanleClickTouchProduct} checked={item.trackNumber} className={ item.trackNumber ? 'basket__checked-item-for-payment-active' : 'basket__checked-item-for-payment'} type="checkbox" />
      <div className='basket__item-block-with-image'>
        <div className='basket__item-image'>
          <img className='basket__image' src={item.img} alt="" />
        </div>
        <div className='basket__item-identificatore'>
          <h2 className='basket__item-product-title'>{item.title}</h2>
          <div className='basket__block-inside-identificatore'>
            <p className='basket__item-product-description'>SKU:</p>
            <p className='basket__main-description-identificatore'>{item.sku}</p>
          </div>
        </div>
      </div>
      <div className="basket__block-price-product">
        <p className="basket__product-price-description">${item.price}</p>
      </div>
      <div className="basket__count-product-buttons-block">
        <div className='basket__count-product-buttons-inside'>
          <button disabled={item.trackNumber ? false : true} className='basket__count-decrement' onClick={() => dispatch(handleClickRemoveCountItemBasket(item.id))}>-</button>
          <p className='basket__product-amount'>{item.count}</p>
          <button disabled={item.trackNumber ? false : true} className='basket__count-increment' onClick={() => dispatch(handleClickAddCountBasketItem(item.id))}>+</button>
        </div>
      </div>
      <div className="basket__product-total-price">
        <div className='basket__block-remove-items'>
          <p className='basket__product-total-price-description'>${item.price * item.count}</p>
          <svg onClick={() => dispatch(handleClickRemoveItemBasket(item.id))} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Iconly/Curved/Delete">
            <g id="Delete">
            <path id="Stroke 1" d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Stroke 3" d="M20.3651 6.47979H4.2146" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Stroke 5" d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            </g>
          </svg>
        </div>
      </div>
    </div> : 
    <div div className={ item.trackNumber ? 'basket__item-block-active-mobile' : 'basket__item-block-active-mobile'}>
    <input style={{position:'absolute'}} onClick={handleClickSecond} checked={item.trackNumber} className={ item.trackNumber ? 'basket__checked-item-for-payment-active' : 'basket__checked-item-for-payment'} type="checkbox" />
      <div className='basket__item-block-active-inside-mobile'>
        <div className="basket__item-block-image-mobile">
          <img src={item.img} alt="" className="basket__product-image-mobile" />
        </div>
        <div className="basket__item-block-description-price-mobile">
          <h2 className="basket__header-product-header-mobile">{item.title}</h2>
          <div className='basket__block-sizes-product'>
            <p className='basket__sizes-name'>Size : </p>
            <p className='basket__sizes-abbr'>M</p>
          </div>
          <p className="basket__product-price-mobile">${item.price}.00</p>
        </div>
      </div>
      <div className="basket__count-product-buttons-block">
        <div className='basket__count-product-buttons-inside'>
          <button disabled={item.trackNumber ? false : true} className='basket__count-decrement' onClick={() => dispatch(handleClickRemoveCountItemBasket(item.id))}>-</button>
          <p className='basket__product-amount'>{item.count}</p>
          <button disabled={item.trackNumber ? false : true} className='basket__count-increment' onClick={() => dispatch(handleClickAddCountBasketItem(item.id))}>+</button>
        </div>
      </div>
    </div>
    } 
      </>
  )
}

export default BasketItemProduct