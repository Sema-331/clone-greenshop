import React, { useEffect, useState } from 'react'
import { footerData } from '../data/dataFooter'
import FooterMedia from './FooterMedia'
import OptionPays from './OptionPays'

const FooterListBox = () => {

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

  return (
    <>
        {
            windowWidth > 1194 ? 
            <ul className="footer__block-list-item">
            {
                footerData.map((item) => (
                    <li key={item.id} className="footer__list-item-block">
                        <div className="footer__block-inside-list-items">
                            <h2 className="footer__list-item-header">
                                {item.header}
                            </h2>
                            {
                                item.options.map((value) => <p className="footer__list-item-options">{value}</p>)
                            }
                        </div>
                    </li>
                ))
            }
            <li className="footer__list-item-block footer__list-item-pay">
                <div className="footer__list-item-main-pay">
                    <div className="footer__pay-header-top">
                        <h2 className="footer__pay-header">
                            Social Media
                        </h2>
                        <FooterMedia />
                    </div>
                    <OptionPays />
                </div>
            </li>
        </ul>
         : <><ul className="footer__block-list-item">
            {
                footerData.map((item) => (
                    <li key={item.id} className="footer__list-item-block">
                        <div className="footer__block-inside-list-items">
                            <h2 className="footer__list-item-header">
                                {item.header}
                            </h2>
                            {
                                item.options.map((value) => <p className="footer__list-item-options">{value}</p>)
                            }
                        </div>
                    </li>
                ))
            }
         </ul>
         <div className="footer__list-item-block footer__list-item-pay">
            <div className="footer__list-item-main-pay">
               <OptionPays />
               <div className="footer__pay-header-top">
                   <h2 className="footer__pay-header">
                    Social Media
                   </h2>
                   <FooterMedia />
               </div>
            </div>
        </div>
     </>
        }
    </>
  )
}

export default FooterListBox