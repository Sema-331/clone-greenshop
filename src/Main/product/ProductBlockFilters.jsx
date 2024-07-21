import React, { useEffect, useRef, useState } from 'react'
import { handleClickSortGoUp, handleClickSortGoDown, handleClickAllProducts } from '../../Slices/SliceProducts'
import buttonMobile from './../../image/filterMobile.png'
import { useDispatch } from 'react-redux'
import { ChevronDown } from 'lucide-react'
import ProductBlockFilteres from './ProductBlockFilteres'

const ProductBlockFilters = () => {

    const ref = useRef()
    const [state, setState] = useState(false)
    const [nameState, setNameState] = useState('Default sorting')
    const [mobileValue, setMobileValue] = useState(false)
    const [stateMobileValue, setStateMobileValue] = useState(false)

    const dispatch = useDispatch()

    {/*const closeSorts = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
            setState(true)
        } else if (ref.current && !ref.current.contains(e.target)) {
            setState(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeSorts)
        return () => {
            document.removeEventListener('click', closeSorts)
        }
    }, ['product__block-sorts-filters'])*/}

  return (
    <div ref={ref} className='product__block-sorts-filters'> 
        <div className="product__block-sorts-filters-inside">
            {
                stateMobileValue ? 
                <ProductBlockFilteres /> : null
            }
            <div className={ stateMobileValue ? 'product__block-mobile-sort-products-active' : 'product__block-mobile-sort-products' }>
                <button onClick={() => {
                    setState()
                    setStateMobileValue(!stateMobileValue)}} className='product__button-filter-products'>
                    <img className='product__mobile-image-filters' src={buttonMobile} alt="" />
                </button>
            </div>
            <div className='product__block-filter'>
                <h2 onClick={() => setState(!state)} className="product__name-filtered"> Short by: {nameState}</h2>
                <ChevronDown className={state ? 'active-svg-cl' : ''} />
            </div>
            {
                state ? <ul className='product__block-filter-lg'>
                <li className="product__options">
                    <div onClick={() => {
                        setNameState('Default sorting')
                        dispatch(handleClickAllProducts())
                    }} className='product__options-inside'>
                        <input name='filter' type="radio" />
                        <span>Default sorting</span>
                    </div>
                </li>
                <li className="product__options">
                    <div onClick={() => {
                        dispatch(handleClickSortGoUp())
                        setNameState('Price increase')   
                    }} className='product__options-inside'>
                        <input name='filter' type="radio" />
                        <span>Price increase</span>
                    </div>
                </li>
                <li className="product__options">
                    <div onClick={() => {
                        dispatch(handleClickSortGoDown())
                        setNameState('Price decrease')
                    }} className='product__options-inside'>
                        <input name='filter' type="radio" />
                        <span>Price decrease</span>
                    </div>
                </li>
                <li  className="product__options">
                    <div className='product__options-inside'>
                        <input name='filter' type="radio" />
                        <span>By popularity</span>
                    </div>
                </li>
            </ul> : null
            }
        </div>
    </div>
  )
}

export default ProductBlockFilters