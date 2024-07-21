import React from 'react'
import phone from './../../image/Calling.png'

const ContactPhone = () => {
  return (
    <div className="contact__block-phone-number">
        <img src={phone} alt="" className="contact__image-phone" />
        <p className="contact__number-description">+88 01911 717 490</p>
    </div>
  )
}

export default ContactPhone