import React from 'react'
import ContactAdress from './ContactAdress'
import ContactBlockMail from './ContactBlockMail'
import ContactPhone from './ContactPhone'
import logo from './../../image/Logo.svg'

const ContactMain = () => {
  return (
    <section className="contact">
      <div className="contact__block">
        <div className='contact__block-logo-footer-mobile'>
          <img src={logo} alt="" />
        </div>
        <ContactAdress />
        <ContactBlockMail />
        <ContactPhone />
      </div>
    </section>
  )
}

export default ContactMain