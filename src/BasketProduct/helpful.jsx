import {useEffect, useRef, useState, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleClickSelectAllCheck, handleScrollPages } from '../Slices/SliceProducts';
import BasketItemProduct from './BasketItemProduct';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

export default function Helpful() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log('isInViewport1: ', isInViewport1);

  const dispatch = useDispatch()

  const select = useSelector((item) => item.products.arr)
  const notify = () => toast.info("You have not selected any product");
  const secondSelector = useSelector((item) => item.products.totalprice)
  const thirdSelector = useSelector((item) => item.products.shipping)
  const selector = useSelector((item) => item.products.basketProducts)
  const modal = useSelector((item) => item.products.mobileModal)
  //console.log('myModal: ', modal)
  //const dispatch = useDispatch()
  //dispatch(handleScrollPages(modal === isInViewport1 ))
  //const isInViewport2 = useIsInViewport(ref2);
  //console.log('isInViewport2: ', isInViewport2);
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
    // const truncateString = (s, w) => s.length > w ? s.slice(0, w) + "..." : s;
  return (
    <div ref={ref1} className='basket__main-block-products-item'>
        <>
          {
            selector.map((item) => (
              <>
                <BasketItemProduct item={item}  />
              </>
            ))
          }
        </>{
            isInViewport1 && windowWidth <= 576 ? <div /*style={{width: '100%', background:'red', position:'fixed'}}*/className='check-modal__block-main-footer'>
            <div className="check-modal__block-input-with-button">
              <input placeholder={windowWidth > 380 ? 'Enter coupon code here...' : 'Enter coupon...'} type="text" className="check-modal__coupon-sale" />
              <button className="check-modal__button-find">Apply</button>
              </div>
              <div className="check-modal__block-subtotal">
                <p className="check-modal__subtotal-name">Subtotal</p>
                <p className="check-modal__subtotal-price">${secondSelector}.00</p>
              </div>
              <div className="check-modal__block-coupon">
                <p className="check-modal__coupon-name">Coupon Discount</p>
                <p className="check-modal__coupon-price">(-) 00.00</p>
              </div>
              <div className="check-modal__block-shipping">
                <p className='check-modal__shipping-name'>Shiping</p>
                <div className='check__modal-blocks'>
                  <p className="check-modal__shipping-price">${thirdSelector}.00</p>
                  <p className="check-modal__shipping-button-change">View shipping charge</p>
              </div>
              </div>
              <div className="check-modal__block-total-price-products">
                <p className="check-modal__total-name">Total</p>
                <p className="check-modal__total-price-value">${thirdSelector + secondSelector}.00</p>
              </div>
                {
                    select.length === 0 ?                             
                    <>
                      <ToastContainer
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
                      <button onClick={notify} className="check-modal__button-next-check">Proceed To Checkout</button>
                    </> : <button className="check-modal__button-next-check"><Link to='/Checkout'>Proceed To Checkout</Link></button>
                  }
          </div> : null
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