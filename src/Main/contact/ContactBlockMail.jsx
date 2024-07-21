import React from 'react'
import message from './../../image/Message.png'

const ContactBlockMail = () => {
  return (
    <div className="contact__block-mail">
        <img src={message} alt="" className="contact__img-mail" />
        <p className="contact__mail-adress">contact@greenshop.com</p>
    </div>
  )
}

export default ContactBlockMail