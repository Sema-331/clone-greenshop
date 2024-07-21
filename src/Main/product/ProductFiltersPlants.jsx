import React, { useState } from 'react'
import { handleClickFiltersCategoryNew, handleClickAllProducts, handleClickFilterSale } from '../../Slices/SliceProducts'
import { useDispatch } from 'react-redux'
import ProductBlockFilters from './ProductBlockFilters'

const ProductFiltersPlants = () => {

  const dispatch = useDispatch()

  const [state, setState] = useState(false)

  return (
    <div className="product__block-headers-sort">
      <div className='product__block-mobile-sorts'>
        <h2 onClick={() => {
          dispatch(handleClickAllProducts())
        }} className="product__block-sort-first">
            All Plants
        </h2>
        <h2 onClick={() => dispatch(handleClickFiltersCategoryNew('new'))} className="product__block-sort-second">
            New Arrivals
        </h2>
        <h2 onClick={() => dispatch(handleClickFilterSale('yes'))} className="product__block-sort-third">
            Sale
        </h2>
      </div>
      <ProductBlockFilters />
    </div>
  )
}

export default ProductFiltersPlants