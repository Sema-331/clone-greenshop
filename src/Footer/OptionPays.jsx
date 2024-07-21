import React from 'react'
import img from './../image/image 16.png'

const OptionPays = () => {
  return (
    <div className="footer__options-pays">
        <h2 className="footer__options-pay-header">
            We accept
        </h2>
        <img src={img} alt="" className="footer__pays-image" />
    </div>
  )
}

export default OptionPays