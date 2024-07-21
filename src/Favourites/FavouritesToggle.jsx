import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const FavouritesToggle = () => {

    const selector = useSelector((item) => item.products.favouritesItem)
    const [state, setState] = useState(false)
    const [secondState, setSecondState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    const handleClickSecond = () => {
        setSecondState(!secondState)
    }

  return (
    <div className='favourites__block-toggle'>
        <div className='favourites__block-arrow'>
            <h3 onClick={handleClick} className='favourites__header-block-item'>Favourites: {selector.length}</h3>
            {state ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className='favourites__item-toggle'>
            {
                state ? 
                <div className='favourites__block-category'>
                    <div className='favourites__secondary-block'>
                        <h3 onClick={handleClickSecond} className='favourites__head-category'>Categories: </h3>
                        {secondState ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {
                        secondState ? <div>{selector.map((item) => (<div>{item.categories}</div>))}</div> : null
                    }
                </div> : null
            }
        </div>
    </div>
  )
}

export default FavouritesToggle