import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { handleHoverOptions, onclickHnadleEyes, closeEaysModal, handleClickRecentlyViews, handelClickRemoveProductFavourites, handleClickAddFavourites, handleClickAddBasketProduct, handleClickConfirmProductModal, handleClickRemoveFavourites, handleTOggle, toggleStatus, fetchQuery, toggleCompleteTrack, toggleStatusTrack, stateHoverProductTrue } from '../../Slices/SliceProducts';
import { MoreHorizontal, Scale } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import ProductSoloImg from './ProductSoloImg';
import gsap from 'gsap';
import ConfirmProductAdd from '../../ConfirmProductAdd/ConfirmProductAdd';
import FavouritesIcons from './favouritesIcons';
import LoginFormMain from '../../LoginForm/LoginFormMain';
import FavouritesIconsSecond from './favouritesIconsSecond';
import { ToastContainer, toast } from 'react-toastify';

const HoverIcons = ({item}) => {
  const selectorSecond = useSelector((item) => item.products.buttonToggle)
  const stateLogin = useSelector((item) => item.products.headerLoginButton)
  const dispatch = useDispatch()
  const [confirmProductAdd, setConfirmProductAdd] = useState(false)
  const [state, setState] = useState(false)
  const [modal, setModal] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
    
      window.addEventListener('resize', handleWindowResize);
    
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, );


  {/*useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
    if(selector.length === 0) {
      setFavourites(0)
    } else if(selector.length > 0) {
      setFavourites(1)
    }
  }, [favourites, selector])*/}

  const handleClickAddProductBasket = () => {
    setConfirmProductAdd(true)
    const product = {
      id: item.id,
      img: item.imgSolo,
      title: item.title,
      sku: item.sku,
      price: item.price,
      count: item.count,
      trackNumber: item.trackNumber
    }
    const productModal = {
      id: item.id,
      img: item.imgSolo,
      title: item.title,
      sku: item.sku,
      price: item.price,
      count: item.count,
      star: item.star,
      trackNumber: item.trackNumber
    }
    document.body.style.overflowY = 'hidden' 
    dispatch(handleClickConfirmProductModal(productModal))
    dispatch(handleClickAddBasketProduct(product))
  }

  const handelChangeFavouritesItemTrue = () => {
    {/*setFavourites(1)*/}
    const a = {
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.imgSolo,
      custom: item.custom,
      star: item.star,
      descriptionShort: item.descriptionShort,
      sku: item.sku,
      categories: item.categories,
      tags: item.tags,
      imgFirst: item.imgFirst,
      imgSecond: item.imgSecond,
      imgthird: item.imgthird
    }
    dispatch(handleClickAddFavourites(a))
  }

  const handleRemoveFavourites = () => {
    dispatch(handelClickRemoveProductFavourites(item.id))
    {/*setFavourites(0)*/}
  }

  const handleClickOptions = () => {
    setModal(!modal)
  }
  const handleClickModal = useCallback(() => {
    dispatch(closeEaysModal())
    setState(true)
      const a = {
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.imgSolo,
        custom: item.custom,
        star: item.star,
        descriptionShort: item.descriptionShort,
        sku: item.sku,
        categories: item.categories,
        tags: item.tags,
        imgFirst: item.imgFirst,
        imgSecond: item.imgSecond,
        imgthird: item.imgthird,
        count: item.count,
        favourites: item.favourites
      }
      const b = {
        id: item.id,
        img: item.imgSolo,
        title: item.title,
        price: item.price
      }
      dispatch(handleClickRecentlyViews(b))
      dispatch(onclickHnadleEyes(a))
      document.body.style.overflowY = 'hidden'
  }, [state])

    const handleClickTest = useCallback(() => {
      gsap.fromTo('.block__product-modal-main', {
        position:"fixed",
        opacity: 1,
        // left: '32%',
        top: '32%',
        left: (windowWidth < 1500 && windowWidth > 320) ? '18%' : '40%',
        width: (windowWidth < 1500 && windowWidth > 320) ? '65%' : '800px',
        duration: .8,
        boxShadow:'4px 4px 8px 10000px rgba(34, 34, 34, 0.75)',
        zIndex: 1000,
      padding: '15px 25px',
    }, {
      position:"fixed",
      opacity: 1,
      left: (windowWidth < 1500 && windowWidth > 320) ? '18%' : '40%',
      //left: (windowWidth < 1500 && windowWidth > 1200) ? '40%' : (windowWidth < 1200 && windowWidth > 900) ? '28%' : (windowWidth < 800 && windowWidth > 320) ? '18%' : '34%' /*'15%' : '34%'*/,
      //width: (windowWidth > 1500 && windowWidth < 1200) ? '700px' : (windowWidth < 1200 && windowWidth > 320) ? '65%' /*'500px' : (windowWidth < 800 && windowWidth > 600) ?'70%' : '800px'*/ : '800px',
      width: (windowWidth < 1500 && windowWidth > 320) ? '65%' : '800px',
      top: windowWidth > 576 ? '32%' : '16%',
      zIndex: 1000,
      padding: '15px 25px',
      transform: 'scale(1.4, 1.4)',
      duration: .8,
      boxShadow:'4px 4px 8px 10000px rgba(34, 34, 34, 0.75)'
    });
  }, [state])

  useEffect(() => {
    document.addEventListener('click', handleClickTest)
    return () => {
      document.removeEventListener('click', handleClickTest)
    }
  }, ['block__product-modal-main'])

  // const notify = () => toast.info("Product add a basket");

//onMouseLeave={handleOutProduct} onMouseOver={handleHoverProduc}
  return (
      <div className= 'product__block-icons'>
        <CSSTransition
        in={modal}
        timeout={1000}
        classNames="alert"
        unmountOnExit
        onEnter={() => setModal(true)}
        onExited={() => setModal(false)}
      >
        <div className='product__block__icons-animation'>

          <svg onClick={() => {
            dispatch(stateHoverProductTrue())
            handleClickAddProductBasket()
            // notify()
          }} className='svg__animation' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_4_201)">
            <path d="M14.294 16.8745H8.24077C5.65655 16.8745 3.55412 14.7721 3.55412 12.1879V7.38404C3.55412 4.98174 2.35676 2.75812 0.351225 1.43578C-0.00894369 1.19832 -0.108379 0.71388 0.129078 0.353711C0.366535 -0.00649689 0.850939 -0.105971 1.21119 0.131564C2.35606 0.886427 3.28487 1.88203 3.94905 3.0283C4.09258 3.1891 5.24995 4.41583 7.14726 4.41583H16.142C18.596 4.36994 20.5168 6.83265 19.8752 9.20136L18.8397 13.3283C18.3159 15.4163 16.4466 16.8745 14.294 16.8745ZM4.91926 5.53676C5.04912 6.13669 5.11634 6.75528 5.11634 7.38404V12.1879C5.11634 13.9107 6.51796 15.3123 8.24077 15.3123H14.294C15.7291 15.3123 16.9752 14.3401 17.3245 12.9482L18.3599 8.8212C18.7412 7.41372 17.5997 5.95082 16.142 5.97804H7.14722C6.28913 5.97804 5.54224 5.79304 4.91926 5.53676ZM7.85021 19.0226C7.85021 18.4833 7.41307 18.0462 6.87383 18.0462C5.57828 18.0978 5.57942 19.9479 6.87383 19.9989C7.41307 19.9989 7.85021 19.5618 7.85021 19.0226ZM15.6222 19.0226C15.6222 18.4833 15.1851 18.0462 14.6459 18.0462C13.3503 18.0978 13.3514 19.9479 14.6459 19.9989C15.1851 19.9989 15.6222 19.5618 15.6222 19.0226ZM16.9231 8.32137C16.9231 7.88996 16.5734 7.54026 16.142 7.54026H7.45966C6.42329 7.5815 6.42407 9.06158 7.45966 9.10248H16.142C16.5734 9.10248 16.9231 8.75277 16.9231 8.32137Z" fill="#46A358"/>
            </g>
            <defs>
            <clipPath id="clip0_4_201">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        {/* {
          windowWidth > 600 ? null : <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        } */}
         {/*<FavouritesIcons item={item} />*/}
      <svg className='svg__animation svg__animation-search' onClick={() => {
        dispatch(stateHoverProductTrue())
        handleClickModal(item.id)
      }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_4_214)">
        <path d="M14.5656 16.0023C10.5704 19.1859 4.98549 18.3049 2.02729 14.6537C-0.827886 11.1285 -0.64932 6.04315 2.44811 2.82459C5.64856 -0.500733 10.6802 -0.94465 14.3277 1.78316C15.6345 2.76028 16.6104 4.00338 17.246 5.50808C17.8853 7.02152 18.0795 8.59614 17.8578 10.2201C17.6368 11.8366 16.9918 13.2769 15.9423 14.6212C16.0272 14.6768 16.1178 14.7167 16.1827 14.7816C17.3365 15.9305 18.4859 17.0836 19.6397 18.2325C19.9132 18.5047 20.0493 18.8219 19.9682 19.204C19.8071 19.9644 18.9018 20.2579 18.3211 19.7359C18.0489 19.4918 17.7985 19.2227 17.54 18.9642C16.5923 18.0171 15.6451 17.0693 14.6973 16.1221C14.658 16.0847 14.6168 16.0497 14.5656 16.0023ZM15.9529 8.98637C15.9629 5.12659 12.8468 2.00606 8.97825 2.00044C5.12035 1.99482 2.00669 5.09038 1.98983 8.94766C1.97297 12.8168 5.08289 15.9461 8.96326 15.9642C12.8055 15.9823 15.9429 12.8499 15.9529 8.98637Z" fill="#3D3D3D"/>
        </g>
        <defs>
        <clipPath id="clip0_4_214">
        <rect width="19.9913" height="20" fill="white"/>
        </clipPath>
        </defs>
    </svg></div>
    </CSSTransition>
    {
      state ? <ProductSoloImg item={item} state={state} setState={setState} /> : null
    }
    {
      confirmProductAdd ? <ConfirmProductAdd confirmProductAdd={confirmProductAdd} setConfirmProductAdd={setConfirmProductAdd} item={item} /> : null
    }
        <svg className='svg__clicked' onClick={handleClickOptions} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        {/*{
          stateLogin ? null : <LoginFormMain />
        }*/}
    </div>
  )
}

export default HoverIcons