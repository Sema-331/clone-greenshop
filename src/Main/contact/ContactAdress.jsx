import React from 'react'
import firstImage from './../../image/Location.png'

const ContactAdress = () => {
  return (
    <div className="contact__block-adress">
        <img src={firstImage} alt="" className="contact__location" />
        <p className="contact__description-adress">
            70 West Buckingham Ave.
            Farmingdale, NY 11735
        </p>
    </div>
  )
}

export default ContactAdress