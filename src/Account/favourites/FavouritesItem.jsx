import React from 'react'
import { useSelector } from 'react-redux'
import SideBarAccount from '../SideBarAccount'
import FavouritesIcons from '../../Main/product/favouritesIcons'
import FavouritesProductActive from '../../Favourites/FavouritesProductActive'

const FavouritesItem = () => {

    const selector = useSelector((item) => item.products.favouritesItem)

  return (
    <section>
        <div className="container">
            <div className="wishlist">
                <div className="wishlist__main-block">
                    <SideBarAccount />
                    <div className={selector.length === 0 ? 'wishlist__main-block-products-nulls' : "wishlist__main-block-products"}>
                        <FavouritesProductActive />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FavouritesItem