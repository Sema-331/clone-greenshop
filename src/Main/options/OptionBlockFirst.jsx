import React from 'react'
import imgFirstBlock from './../../image/image 14.png'
import imgSecondBlock from './../../image/image 15.png'
import imgThirdBlock from './../../image/image 1 (1).png'



const OptionBlockFirst = () => {

  const blockImages = [imgFirstBlock, imgSecondBlock, imgThirdBlock]

  return (
    <div className="options__block-first">
        <img src={imgFirstBlock} alt="image" />
        <div className="options__block-first-inside">
            <h2 className="options__block-first-header">SUMMER CACTUS % SUCCULENTS</h2>
            <p className="options__block-first-description">We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button className="options__block-btn">Find more</button>
        </div>
    </div> 
  )
}

export default OptionBlockFirst