import React, { useEffect } from "react";
import './styles/stylesComponents/main.scss'
import MainHeader from "./Header/MainHeader";
import 'swiper/css'; 
import FooterMainComponents from "./Footer/FooterMainComponents";
import Home from "./Home";
import ShopMain from "./Shop/ShopMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ui/ScrollTo";
import Shop from "./Shop/Shop";
import FavouriteMain from "./Favourites/FavouriteMain";
import BasketProductMain from "./BasketProduct/BasketProductMain";
import Checkout from "./Checkout/Checkout";
import LoginFormMain from "./LoginForm/LoginFormMain";
import Delivery from "./Account/Account";
import Account from "./Account/Account";
import { fetchQuery } from "./Slices/SliceProducts";
import { fetchTodos } from "./Slices/storeTraining";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog/Blog";
import OrderMain from "./Account/Order/OrderMain";
import FavouritesItem from "./Account/favourites/FavouritesItem";
import PlantCore from "./PlantCore/PlantCore";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import MainComponents from "./Main/product/mainComponents";
import MainShopFile from "./Shop/MainFolderShop/MainShopFile";
import LoginMobile from "./LoginMobile/LoginMobile";
import AddAdress from "./Account/Adress/AddAdress";
import Payment from "./Checkout/Payment";
import MaybeShow from "./Header/MaybeShow";

function App() {

  const selector = useSelector((item) => item.products.login)

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(selector))
  },)

  return (
    <div className="App">
      <SkeletonTheme>
        <Router>
          <MaybeShow>
            <MainHeader />
          </MaybeShow>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Favourite" element={<FavouriteMain />} />
              <Route path="/Basket" element={<BasketProductMain />} /> 
              <Route path='/Shop' element={<MainShopFile />} />
              <Route path="/Shop/:id" element={<ShopMain />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Account" element={<Account />} /> 
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Order" element={<OrderMain />} />
              <Route path='/AddAdress' element={<AddAdress />} />
              <Route path="WishList" element={<FavouritesItem />} />
              <Route path="PlantCore" element={<PlantCore />} />
              <Route path="/Login" element={<LoginMobile />} />
              <Route path="/Checkout/Payment" element={<Payment />} />
            </Routes>
            <MaybeShow>
              <FooterMainComponents />
            </MaybeShow>
        </Router>
      </SkeletonTheme>
  </div>
    )
  }
export default App;
