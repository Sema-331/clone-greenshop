import React, { useState } from 'react'
import ItemShopSecond from './ItemShopSecond'

const ItemShopImage = ({item}) => {

  return (
    <div className='item__block-slider-image-desc'>
                            {
                                item.img.map((value) => (
                                  <ItemShopSecond value={value} />
                                ))
                            }
                        </div>
  )
}

export default ItemShopImage