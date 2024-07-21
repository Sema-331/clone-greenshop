import React from 'react'
import logo from "./../image/card-logo.svg";

const PayEx = ({card}) => {
  return (
        <div className="pay__block-side-inside">
      <article className="front-card">
        <img src={logo} alt="" className="pay__side-iamge"/> 
       <div className="pay__block-card-num">
          <h2 className="pay__heade-card-num">
          {card?.number || "0000 0000 0000 0000"}
          </h2>
         <ul className="pay__list-box-info-user">
            <li className="pay__list-item-name-user">
            {card?.cardholderName.toUpperCase() || "SEMEN VELESIK"}
            </li>
            <li className="pay__list-item-date-user">
                {card?.expMonth || "00"}/{card?.expYear || "00"}
            </li>
          </ul>
        </div>
      </article>   
     <article className="back-card">
        <p className="pay__back-card-description">
            {card?.cvc || "000"}
        </p>
      </article>
    </div>
  )
}

export default PayEx