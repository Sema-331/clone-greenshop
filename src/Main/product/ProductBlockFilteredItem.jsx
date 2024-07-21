import React from 'react'
import { handleClickSorts } from '../../Slices/SliceProducts'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ProductBlockFilteredItem = ({item}) => {

    const [checkedInput, setCheckedInput] = useState(false)
    const [state, setState] = useState(false)

    const dispatch = useDispatch()
    
    let toggle = checkedInput ? 'product__filtered-list-item-active' : ''

    const handleCLickCheckboxes = () => {
        const a = document.querySelectorAll('.product__filtered-list-item')
        a.forEach((e) => {
            e.onclick = () => {
                if(!e.classList.contains('product__filtered-list-item-active')) {
                    {/*e.style.transform = 'translateX(20px)'
                    e.classList.add('product__filtered-list-item-active')
                    const a = e.firstChild
                    a.firstChild.classList.add('font__styles')
                a.lastChild.classList.add('font__styles')*/}
                setState(true)
                } else if(e.classList.contains('product__filtered-list-item-active')) {
                    e.classList.remove('product__filtered-list-item-active')
                    const a = e.firstChild
                    a.firstChild.classList.remove('font__styles')
                    a.lastChild.classList.remove('font__styles')
                }
            }
        })
    }

  return (
    <li key={item.id} className={state ? 'product__filtered-list-item-active product__filtered-list-item product__filtered-list-item-first' : 'product__filtered-list-item product__filtered-list-item-first'}>
        <button type='button' onClick={() => {
            setCheckedInput(!checkedInput)
            setState(!state)
            dispatch(handleClickSorts(item.header))}
            } className="product__block-list-item">
            <h2 className={ state ? 'font__styles product__list-item-header' : 'product__list-item-header'}>{item.header}</h2>
            <input type='checkbox' className="product__list-item-count" checked={checkedInput} />
        </button>
    </li>
  )
}

export default ProductBlockFilteredItem