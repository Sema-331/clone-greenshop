import React from 'react'
import { productFilters } from '../../data/dataBaseFiltersProduct'
import { useDispatch } from 'react-redux'
import { handleClickSortCategories } from '../../Slices/SliceProducts'

const ProductListBox = () => {

    const dispatch = useDispatch()

  return (
    <ul className="product__filtered-list-box">
        {
            productFilters.map((item) => (
                <li key={item.id} className="product__filtered-list-item product__filtered-list-item-first">
                    <button onClick={() => dispatch(handleClickSortCategories(item.header))} className="product__block-list-item">
                        <h2 className="product__list-item-header">{item.header}</h2>
                        <p className="product__list-item-count">{item.amount}</p>
                    </button>
                </li>
            ))
        }
    </ul>
  )
}

export default ProductListBox