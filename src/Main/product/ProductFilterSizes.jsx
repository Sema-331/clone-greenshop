import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleClickSortSizes, handleClickSorts } from '../../Slices/SliceProducts'
import { productSizes } from '../../data/dataSizesProduct'
import ProductFilterSizeItem from './ProductFilterSizeItem'

const ProductFilterSizes = () => {

    const dispatch = useDispatch()
    const selector = useSelector((item) => item.products.productCopy)

  return (
    <div className="product__block-sizes">
        <div className="product__block-sizes-inside">
            <h2 className="product__block-sizes-header">
                Size
            </h2>
            <ul className="product__block-sizes-list-box">
                {
                    productSizes.map((item) => (
                        <ProductFilterSizeItem item={item} />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ProductFilterSizes