import React from 'react'
import { useState } from 'react'
import ProductListBox from './ProductListBox'
import SliderRange from './SliderRange'
import ProductFilterSizes from './ProductFilterSizes'
import ProductBlockSales from './ProductBlockSales'
import ProductFiltersPlants from './ProductFiltersPlants'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { filterRange } from '../../Slices/SliceProducts'
import ProductBlockFilters from './ProductBlockFilters'
import ProductBlockFilteres from './ProductBlockFilteres'
import Blog from '../../Blog/Blog'

const MainComponents = () => {
    
    const [states, setStates] = useState(false)

    const hadnleHoverProduct = () => {
        setStates(true)
    }

    const handleLeaveProduct = () => {
        setStates(false)
    }

  return (
    <section className="product">
            <div className="container">
                <div className="product__block">
                    <div className="product__mask">
                        <ProductBlockFilteres />
                        <ProductBlockSales />
                    </div>
                    <div className="product__block-full-items">
                        <div className="product__block-header-sort">
                            <div className="product__block-header-sort-inside">
                                <ProductFiltersPlants />
                                
                            </div>
                        </div>
                        <div className="product__block-main-items">
                            <div className="product__block-main-inside">
                                <Products hadnleHoverProduct={hadnleHoverProduct} handleLeaveProduct={handleLeaveProduct} states={states} />
                                {/*<Blog />*/}
                            </div>
                        </div>
                        {/*<div className="product__pagination">
                            <button className="product__button-pagination product__button-pagination-active">1</button>
                            <button className="product__button-pagination">2</button>
                            <button className="product__button-pagination">3</button>
                            <button className="product__button-pagination">4</button>
                            <button className="product__button-pagination">5</button>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MainComponents