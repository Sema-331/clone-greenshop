import React from 'react'

const InputComponents = () => {
  return (
    <li className="care__list-item care__list-item-four">
        <div className="care__list-item-block-search">
            <h2 className="care__block-search-header">
                Would you like to join newsletters?
            </h2>
            <form action="">
                <input placeholder="enter your email address..." type="text" className="care__input" />
                <button className="care__form-btn">
                    Join
                </button>
            </form>
            <p className="care__block-search-description">
                We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
            </p>
        </div>
    </li>
  )
}

export default InputComponents