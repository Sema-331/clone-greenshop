import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ItemShopSecond = ({value}) => {

    const {id} = useParams()
    const selector = useSelector((item) => item.products.productCopy)
    const [stateImage, setStateImage] = useState(false)
    const [img, setImg] = useState(selector.filter((item) => item.id === id).map((item) => 
        `${item.imgSolo}`
    )) 
    const [image, setImage] = useState("https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LIQ-X~SZNG6hV3uePhbfpoa-AgN8jctk5t8QC25Zd-dNyrJwxp1NJDGfT9n5kTHV9nNjI5HHog4XauLrbPYXwfuFONDkWSwZ~Ij2bc0PUyuNIzrzO0-WwbwXCKnkBHR1uLrDbWfv5eT-ywWKwn-hJ3zlY7SWCUsFutKTF4yGVXOlTj7wAIqwpmAE5k-qppNM1tGl0DWMWhht~Ag9-wtIS57gKXtBRu~pkZ1Qo5dSSW01wVaFvoawyYMK7OguyF2LLAk3t-hMPGLobg45yLe4-LsNmCPQFuUwOp8KihO~epvYgDy9KLr62GSAUaOOHEZ3U7GqsWDTz62NmwwENrbRkw__")

  return (
    <img onClick={() => {
      setImage(value)
        setStateImage(true)
    }} className={value === image ? 'item-image-slide-desc-active' : 'item-image-slide-desc' } src={value.imageFirst}/>
  )
}

export default ItemShopSecond