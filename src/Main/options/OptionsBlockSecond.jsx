import React from 'react'
import imgSecondBlock from './../../image/image 15.png'

const OptionsBlockSecond = () => {
  return (
    <div className="options__block-second">
        <img src={imgSecondBlock} alt="image" />
        <div className="options__block-second-inside">
            <h2 className="options__block-second-header">STYLING TRENDS % MUCH MORE</h2>
            <p className="options__block-second-description">We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button className="options__block-btn">Find more</button>
        </div>
    </div>
  )
}

export default OptionsBlockSecond