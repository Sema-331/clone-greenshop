import React from 'react'
import { handleClickSorts } from '../../Slices/SliceProducts'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ProductFilterSizeItem = ({item}) => {

    const [checkInput, setCheckInput] = useState(false)
    const [state, setState] = useState(false)

    const dispatch = useDispatch()

  return (
    <li key={item.id} onClick={() => { 
        setCheckInput(!checkInput)
        setState(!state)
        dispatch(handleClickSorts(item.size))}}   className={ state ? 'product__filtered-list-item-active product__list-items-sizes' : 'product__list-items-sizes'}>
        <button type='button' className="product__list-items-block-inside">
            <h2 className={ state ? 'font__styles product__block-sizes-header-secondary' : 'product__block-sizes-header-secondary'}>
                {item.size}
            </h2>
            <input type='checkbox' className="product__block-sizes-description" checked={checkInput} />
        </button>
    </li>
  )
}

export default ProductFilterSizeItem