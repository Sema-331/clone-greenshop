import React, { useEffect, useState } from 'react'
import ProductListBox from './ProductListBox'
import SliderRange from './SliderRange'
import ProductFilterSizes from './ProductFilterSizes'
import { useDispatch, useSelector } from 'react-redux'
import { productFilters } from '../../data/dataBaseFiltersProduct'
import { handleClickSortCategories, hadnleClickSortSecond, handleClickSorts, handleClickSecond, fetchQuery } from '../../Slices/SliceProducts'
import ProductBlockFilteredItem from './ProductBlockFilteredItem'
import { handleCLickClearValue, handleCLickClearValueSecond, handleClickSlider, handleClicks, handleInputFirst, handleInputSecond } from '../../Slices/SliceProducts'
import Slider from 'react-slider'
import { X } from 'lucide-react'

const ProductBlockFilteres = () => {

    const dispatch = useDispatch()
    
    const inputMin = useSelector((item) => item.products.inputMin)
    const secondSelector = useSelector((item) => item.products.inputMax)
    const [values, setValues] = useState([inputMin, secondSelector]);
    const [checkedInput, setCheckedInput] = useState(false)
    const [slider1, setSlider1] = useState(0)
    const [slider2, setSlider2] = useState(100)
    const [state, setState] = useState(0)
    const [stateSecond, setStateSecond] = useState(100)
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(1000)
    const handleChange = (newValues) => setValues(newValues);

    /*const handleClick = (e) => {
        e.preventDefault()
        dispatch(handleClickSecond())
    }*/

    const mm = (e) => {
        setFirst(e.target.value)
    }
    
    const m = (e) => {
        setSecond(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(hadnleClickSortSecond())
    }

  return (
    <div className="product__block-filtered">
        <p className="product__main-header">
            Categories
        </p> 
        <form action="" onSubmit={handleClick}>
            <ul className="product__filtered-list-box">
                    {
                        productFilters.map((item) => (
                            <ProductBlockFilteredItem item={item} />
                        ))
                    }
                <div className="product__block-button">
                    <button type='submit' className="product__button-filtered">Filter</button>
                </div>
            </ul>
            <div className="product__slider-items">
                <h2 className="product__header-slider-price">
                    Price Range 
                </h2>
                {/*<SliderRange
                    min={inputMin}
                    max={secondSelector}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />*/}
                <div className='product__block-price-range-item'>
                    <div className='product__block-tab-price'>
                        <input className='product__block-price-range-min' onChange={(e) => dispatch(handleInputFirst(e.target.value))} type="number" placeholder='to $39' value={inputMin} />
                        {
                            inputMin.length > 0 ? <div onClick={() => dispatch(handleCLickClearValue())}  className='product__clear-value-input'><X /></div> : null
                        }
                    </div>
                    <div className='product__block-tab-price-second'>
                        <input className='product__block-price-range-max' onChange={(e) => dispatch(handleInputSecond(e.target.value))} placeholder='from $199' type="number" value={secondSelector} />
                        {
                            secondSelector.length > 0 ? <div onClick={() => dispatch(handleCLickClearValueSecond())}  className='product__clear-value-max'><X /></div> : null
                        }
                    </div>
                </div>
            {/*<div className='product__slider-block-filter'>
                  <Slider
                    className="slider"
                    value={values}
                    onChange={handleChange}
                    min={0}
                    max={1000}
                  />
                  <div className='product__block-view-price-change'>
                    <h2 className='product__blockprice-slider-header'>Price: </h2>
                    <div className='product__block-min-value'>
                      <p className='product__label-min-value'
                        type="number"
                        id="minPrice"
                        value={values[0]}
                        onChange={(e) => dispatch(handleInputFirst([+e.target.value, values[0]]))}
                      >${inputMin}</p>
                    </div>
                    <p className='product__label-max-value'>—</p>
                    <div className='product__block-max-value'>
                      <p className='product__label-max-value'
                        type="number"
                        id="minPrice"
                        value={values[1]}
                        onChange={(e) => dispatch(handleInputSecond([+e.target.value, values[1]]))}
                      >${secondSelector}</p>
                    </div>
                  </div>
        </div>*/}
            </div>
            <ProductFilterSizes />
        </form>
    </div>
  )
}

export default ProductBlockFilteres