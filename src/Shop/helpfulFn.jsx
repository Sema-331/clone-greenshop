import {useEffect, useRef, useState, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleClickAddBasketProduct, handleClickAddCountBasketItem, handleClickAddCountFavouritesItem, handleClickDecrementProduct, handleClickIncrementProduct, handleClickProductModalDecrement, handleClickProductModalDecrementSecond, handleClickProductModalIncrement, handleClickProductModalIncrementSecond, handleClickRemoveCountItemBasket, handleScrollPages } from '../Slices/SliceProducts';
import { Link } from 'react-router-dom';
import star from './../image/svgCircles/Star.svg'
import SizeS from '../Main/product/sizesComponents/SizeS';
import ShopButtonsActive from './ShopButtonsActive';

export default function Helpful({item}) {
  const dispatch = useDispatch()
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log('isInViewport1: ', isInViewport1);

  const handleAddBasket = () => {
    const product = {
      id: item.id,
      img: item.imgSolo,
      title: item.title,
      sku: item.sku,
      price: item.price,
      count: item.count,
      trackNumber: item.trackNumber
    }
    dispatch(handleClickAddBasketProduct(product))
}

  return (
        <div className='item__product-description-short-mobile'>
                    <div ref={ref1} className='item__product-header'>
                        <div className='item__header-product-modal'>
                            <h2 className='item__product-head'>{item.title}</h2>
                        <div className='item__product-stars'>
                            <div className='item__salary-description'>
                                <p className='item__salary-description-item'>${item.price * item.count}</p>
                            </div>
                            <div className='item__star'>
                                <div className='item__star-inside'>
                                    {
                                        item.star.map((value) => <img className='item__star-inside-image item__star-no-fill' src={value} />)
                                    }
                                </div>
                                <p className='item__star-description'>{item.custom}</p>
                            </div>
                            {/* 
                                Mobile
                                https://cdn.iconscout.com/icon/free/png-512/free-star-bookmark-favorite-shape-rank-16-28621.png?f=webp&w=256
                            */}

                            <div className='item__star-mobile'>
                                <div className='item__star-inside-mobile'>
                                    <img className='item__star-inside-image-mobile item__star-no-fill-mobile' src={star} />
                                    <span className='item__frst-span'>4.8</span>
                                    <span className='item__second-span'>(19)</span>
                                </div>
                            </div>

                            {/* 
                                Mobile
                            */}
                        </div>
                        </div>
                        <div className='item__math'>
                            <div className='item__description-shorts'>
                                <h3 className='item__header-description-shorts'>Short Description:</h3>
                                <p className='item__description-shorts-main'>{item.descriptionShort}</p>
                            </div>
                            <div className='item__amount'>
                                <h3 className='item__amount-header'>Size: </h3>
                                <SizeS />
                            </div>
                            <ShopButtonsActive item={item} />
                        </div>
                        <div className='item__tags'>
                            <div className='item__description-sku'>
                                <p className='item__description-sku-name'>SKU: </p>
                                <p className='item__description-sku-value'>{item.sku}</p>
                            </div>
                            <div className='item__description-category'>
                                <p className='item__description-category-name'>Category: </p>
                                <p className='item__description-category-value'>{item.categories}</p>
                            </div>
                            <div className='item__description-tag'>
                                <p className='item__description-tag-name'>Tags: </p>
                                <p className='item__description-tag-value'>{item.tags}</p>
                            </div>
                        </div>
                        <div className='item__social'>
                            <div className='item__social-name'>
                                <p className='item__social-description'>Share this products: </p>
                            </div>
                            <div className='item__social-icons'>
                                <button className='item__social-facebook item__social-buttons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                                    <path d="M1.875 5H0V7.5H1.875V15H5V7.5H7.25L7.5 5H5V3.9375C5 3.375 5.125 3.125 5.6875 3.125H7.5V0H5.125C2.875 0 1.875 1 1.875 2.875V5Z" fill="#3D3D3D"/>
                                    </svg></button>
                                <button className='item__social-twitter item__social-buttons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                    <path d="M4.71737 12.1908C10.378 12.1908 13.4736 7.50111 13.4736 3.4346C13.4736 3.30135 13.4709 3.1688 13.4647 3.03675C14.0656 2.60239 14.588 2.06021 15 1.44331C14.4486 1.6883 13.8552 1.85327 13.2327 1.92765C13.868 1.54669 14.356 0.94378 14.5861 0.225197C13.9914 0.577835 13.3329 0.834082 12.632 0.972271C12.0702 0.374134 11.2704 0 10.3855 0C8.68578 0 7.30747 1.37831 7.30747 3.07718C7.30747 3.31876 7.3346 3.55351 7.38715 3.77887C4.82962 3.65041 2.56162 2.42565 1.04392 0.563675C0.779318 1.01833 0.626969 1.54686 0.626969 2.11037C0.626969 3.17801 1.17034 4.12059 1.99658 4.67216C1.49176 4.65663 1.01748 4.51776 0.602743 4.2871C0.602061 4.2999 0.602061 4.31286 0.602061 4.32634C0.602061 5.81691 1.66305 7.06129 3.07104 7.3433C2.81257 7.41376 2.54063 7.45163 2.25982 7.45163C2.06158 7.45163 1.86879 7.43184 1.6813 7.39619C2.07301 8.61873 3.20923 9.5086 4.55632 9.53368C3.50284 10.3592 2.17588 10.8511 0.734108 10.8511C0.48588 10.8511 0.240893 10.8369 0 10.8084C1.36193 11.6812 2.97908 12.1908 4.71737 12.1908Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                                <button className='item__social-ask item__social-buttons'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M3.125 1.5625C3.125 2.4375 2.4375 3.125 1.5625 3.125C0.6875 3.125 0 2.4375 0 1.5625C0 0.6875 0.6875 0 1.5625 0C2.4375 0 3.125 0.6875 3.125 1.5625ZM3.125 4.375H0V14.375H3.125V4.375ZM8.125 4.375H5V14.375H8.125V9.125C8.125 6.1875 11.875 5.9375 11.875 9.125V14.375H15V8.0625C15 3.125 9.4375 3.3125 8.125 5.75V4.375Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                                <button className='item__social-mail item__social-buttons'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.09091C7.30168 4.09091 4.98846 4.2365 3.51951 4.34356C3.03167 4.37911 2.65385 4.76529 2.65385 5.23696V5.76996L8.53304 8.85802C8.82344 9.01056 9.17656 9.01056 9.46697 8.85802L15.3462 5.76996V5.23696C15.3462 4.76529 14.9683 4.37911 14.4805 4.34356C13.0115 4.2365 10.6983 4.09091 9 4.09091ZM15.3462 7.01792L10.0273 9.81165C9.38843 10.1472 8.61157 10.1472 7.97268 9.81165L2.65385 7.01792V12.763C2.65385 13.2347 3.03167 13.6209 3.51951 13.6564C4.98846 13.7635 7.30168 13.9091 9 13.9091C10.6983 13.9091 13.0115 13.7635 14.4805 13.6564C14.9683 13.6209 15.3462 13.2347 15.3462 12.763V7.01792ZM3.43083 3.25588C4.90066 3.14876 7.25301 3 9 3C10.747 3 13.0993 3.14876 14.5692 3.25588C15.6676 3.33593 16.5 4.20441 16.5 5.23696V12.763C16.5 13.7956 15.6676 14.6641 14.5692 14.7441C13.0993 14.8512 10.747 15 9 15C7.25301 15 4.90066 14.8512 3.43083 14.7441C2.33237 14.6641 1.5 13.7956 1.5 12.763V5.23696C1.5 4.20441 2.33237 3.33593 3.43083 3.25588Z" fill="#3D3D3D"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                      isInViewport1 ? 
                      <div className='item__mobile-block-main'>
                        <div className='item__mobile-block-info'>
                          <div className='item__mobile-block-quantity'>
                            <p className="item__mobile-quantity">Qty</p>
                            <div className="basket__count-product-buttons-block">
                              <div className='basket__count-product-buttons-inside'>
                                <button className='basket__count-decrement' onClick={() => dispatch(handleClickDecrementProduct(item.id))}>-</button>
                                <p className='basket__product-amount'>{item.count}</p>
                                <button className='basket__count-increment' onClick={() => dispatch(handleClickProductModalIncrementSecond(item.id))}>+</button>
                              </div>
                            </div>
                          </div>
                          <div className='item__block-price-mobile'>
                            <p className="item__mobile-price-product">${item.price * item.count}.00</p>
                          </div>
                        </div>
                        <div className='item__block-mobile-add-products'>
                          <Link to='/Basket'>
                            <button onClick={handleAddBasket} className='item__mobile-buy-now-product'>Buy Now</button>
                          </Link>
                          <button onClick={handleAddBasket} className='item__mobile-add-basket'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M18.333 6.80134L17.3894 12.7778C17.2178 13.9562 16.2742 14.7138 15.0732 14.7138H6.83791C5.72271 14.7138 4.6933 13.872 4.52173 12.7778L3.49232 5.79124L3.23497 3.85521C3.14918 3.35016 2.72026 3.01346 2.11977 3.01346H1.51928C1.17615 3.01346 0.833008 2.67676 0.833008 2.34006C0.833008 2.00336 1.17615 1.66666 1.51928 1.66666H2.11977C3.32075 1.66666 4.35016 2.50841 4.43595 3.68686L4.60752 5.03366H16.7889C17.2178 5.03366 17.6467 5.20201 17.9041 5.53871C18.2472 5.87541 18.333 6.38046 18.333 6.80134Z" fill="#727272"/>
                              <path d="M15.2448 18.3333C15.7185 18.3333 16.1026 17.9565 16.1026 17.4916C16.1026 17.0267 15.7185 16.6498 15.2448 16.6498C14.771 16.6498 14.3869 17.0267 14.3869 17.4916C14.3869 17.9565 14.771 18.3333 15.2448 18.3333Z" fill="#727272"/>
                              <path d="M6.66634 18.3333C7.14012 18.3333 7.52418 17.9565 7.52418 17.4916C7.52418 17.0267 7.14012 16.6498 6.66634 16.6498C6.19257 16.6498 5.8085 17.0267 5.8085 17.4916C5.8085 17.9565 6.19257 18.3333 6.66634 18.3333Z" fill="#727272"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                       : null
                    }
                </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}