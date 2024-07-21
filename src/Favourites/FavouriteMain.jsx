import { useDispatch, useSelector } from "react-redux"
import FavouritesToggle from "./FavouritesToggle"
import React from "react"
import './../styles/stylesComponents/product.scss'
import FavouritesProductActive from "./FavouritesProductActive"
import ReletedProducts from "../Shop/ReletedProducts"

const FavouriteMain = () => {

  return (
    <section>
        <div className="container">
            <div className="favourites__block-main">
              <div className="favourites__block-main-product-active">
                  <FavouritesToggle />
                  <div className="favourites__block-product-active">
                      <h2 className="favourites__header-product">Favourites</h2>
                      <FavouritesProductActive />
                  </div>
                </div>
                <div className="favourites__related-products">
                  <ReletedProducts />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FavouriteMain