import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HoverIcons from './HoverIcons';
import Paginate from 'react-paginate'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchQuery, fetchQueryUser, fetchTodos, fetchs, toggleCompleteTrack, toggleStatus, toggleStatusTrack } from '../../Slices/SliceProducts';
import firstImg from './../../image/image 1 (1).png'
import secondImg from './../../image/product-21-320x320 1.png'
import third from "./../../image/image 2.png"
import forthImg from './../../image/01 3.png'
import five from './../../image/image 7.png'
import six from './../../image/image 8.png'
import seven from './../../image/image 9.png'
import eight from './../../image/product-20-320x320 1.png'
import nine from './../../image/image 10.png'
import stars from './../../image/Star.svg'
import starNoFill from '../../image/starNofill.svg'
import allImg from './../../image/product-20-320x320 1.png'
import HoverIconsSecond from './HoverIconsSecond';
import FavouritesIcons from './favouritesIcons';
import FavouritesIconsSecond from './favouritesIconsSecond';
import ContentLoader from "react-content-loader"
import Skeleton from 'react-loading-skeleton';
import SkeletonProduct from './SkeletonProduct';

const  Products = ({states, handleLeaveProduct, hadnleHoverProduct}) => {

      const dispatch = useDispatch()
      const stateHover = useSelector((item) => item.products.stateHoverProduct)
      useEffect(() => {
          dispatch(fetchQuery())
          dispatch(fetchs())
      }, [dispatch])
      const selector = useSelector((item) => item.products.headerLoginButton)
      const [state, setState] = useState(false)
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pageNumber, setPageNumber] =useState(0);
    let dataPerPage = windowWidth > 818 ? 9 : 8;
    //dataPerPage = 8
    const pageVisited = pageNumber * dataPerPage;

    const {product, loading, error, productCopy, filteredItems} = useSelector((item) => item.products)
    const fetchData = filteredItems.slice(pageVisited, pageVisited + dataPerPage)

      const pageCount = Math.ceil(filteredItems.length/dataPerPage)
      const changePage = ({selected}) => {
        setPageNumber(selected);
      }
      console.log(fetchData)
      console.log(dataPerPage)
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
          if(windowWidth < 775) {
            console.log(dataPerPage)
          }
        };
      
        window.addEventListener('resize', handleWindowResize);
      
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, );
      console.log(windowWidth)
      // create an event listener

    /****************************** SLIDER *********************************/

    {/*class HvrSlider {
        constructor(selector) {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el) => {
            if (el.querySelectorAll('img').length > 1) {
              const hvr = document.createElement('div');
              hvr.classList.add('hvr');
      
              const hvrImages = document.createElement('div');
              hvrImages.classList.add('hvr__images');
              hvr.appendChild(hvrImages);
      
              const hvrSectors = document.createElement('div');
              hvrSectors.classList.add('hvr__sectors');
              hvrImages.appendChild(hvrSectors);
      
              const hvrDots = document.createElement('div');
              hvrDots.classList.add('hvr__dots');
              hvr.appendChild(hvrDots);
      
              el.parentNode.insertBefore(hvr, el);
              hvrImages.prepend(el);
      
              const hvrImagesArray = hvr.querySelectorAll('img');
              hvrImagesArray.forEach(() => {
                hvrSectors.insertAdjacentHTML('afterbegin', '<div className="hvr__sector"></div>');
                hvrDots.insertAdjacentHTML('afterbegin', '<div className="hvr__dot"></div>');
              });
              hvrDots.firstChild.classList.add('hvr__dot--active');
              const setActiveEl = function (targetEl) {
                const index = [...hvrSectors.children].indexOf(targetEl);
                hvrImagesArray.forEach((img, idx) => {
                  if (index == idx) {
                    img.style.display = 'block';
                  } else {
                    img.style.display = 'none';
                  }
                });
                hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
                  if (index == idx) {
                    dot.classList.add('hvr__dot--active');
                  } else {
                    dot.classList.remove('hvr__dot--active');
                  }
                });
              };
              hvrSectors.addEventListener('mouseover', function (e) {
                if (e.target.matches('.hvr__sector')) {
                  setActiveEl(e.target);
                }
              });
              hvrSectors.addEventListener('touchmove', function (e) {
                const position = e.changedTouches[0];
                const target = document.elementFromPoint(position.clientX, position.clientY);
                if (target.matches('.hvr__sector')) {
                  setActiveEl(target);
                }
              });
            }
          });
        }
      }
    
    new HvrSlider('.images');*/}

      {/*const handleHover = () => {
        const a = document.querySelectorAll('.product__block-list-item-img')
        a.forEach((e) => {
            e.onclick = function(e) {
                if (e) {
                    const b = document.querySelector('.product__block-icons').style.background = 'red'
                }
            }
        })
      }

      useEffect(() => {
        document.addEventListener('click', handleHover)
        return () => {
            document.removeEventListener('click', handleHover)
        }
      }, ['product__block-list-item-img'])*/}
      {/*onMouseOver={() => dispatch(handleHoverOptions(item.id))}*/}

      const windowScrollToTop = () => {
        window.scrollTo({top: 550, behavior: 'smooth'})
      }

  return (
    <>
    <div className='left-col'>
    </div>
    <ul className="product__block-list-box">
        {
            error && <h2>{error}</h2>
        }
        {
            loading === 'load' && <><SkeletonProduct /></> 
        }
        {
            fetchData.map((item) => (
                <>
                  <li key={item.id} className={ stateHover
                   ? "product__list-items-main product__list-item-first"  : "product__list-items-main product__list-item-first product-hover"} >
                    <div className='product__inside-block-main-item'>
                      {
                        item.plantCategory ? <div className='product__block-description-new'>
                        <p className='product__description-new'>{item.plantCategory}</p>
                      </div> : <div className='product__disable-new'><p></p></div>
                      }
                      {
                        item.sale === 'yes' ? <div className={item.sale === 'yes' && item.plantCategory ? 'product__block-description-new-sale': 'product__block-description-new'}>
                        <p className='product__description-new-sale'>{Math.round((item.saleCupon - item.price) / item.saleCupon * 100)}%</p>
                      </div> : <div className='product__sale-solo'><p></p></div>
                      }
                        <div className="product__block-list-item-img" >
                          {
                            selector ? <FavouritesIcons item={item} /> : <FavouritesIconsSecond item={item} />
                          }
                          <div className='product__item-image'>
                            <Link to={`/Shop/${item.id}`}>
                              <img src={item.imgSolo} alt="image" className="product__item-img" />
                            </Link>
                          </div>
                            <p className="product__item-description">{item.title}</p>
                            <div className={item.plantCategory === 'new' ? 'product__block-icons-more' : 'product__block-icons-more-disabled'}>
                              <p className='product__price-items'>${item.price}.00</p>
                              <>
                                {
                                  item.saleCupon ? <p className='product__price-items-sale'>${item.saleCupon}</p> : null
                                }
                              </>
                               <HoverIcons item={item} /> 
                              {/*<HoverIcons item={item} />
                              <HoverIconsSecond item={item} />*/}
                            </div>
                      </div>
                    </div>
                  </li>
                </>
            ))
        }
    </ul>
    <Paginate onClick={windowScrollToTop}
      previousLabel ={<ChevronLeft style={{verticalAlign:'text-top'}} />}
      nextLabel ={<ChevronRight style={{verticalAlign:'text-top'}} />}
      afterLabel ={"After"}
      pageCount ={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
  />
  </>
  )
}

export default Products
