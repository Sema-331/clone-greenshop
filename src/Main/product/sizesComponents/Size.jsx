import React from 'react'

const Size = () => {
  return (
    <>
        <p className='product__block-size-s product__block-size'>
            S
        </p>
        <p className='product__block-size-m product__block-size'>
            M
        </p>
        <p className='product__block-size-l product__block-size'>
            L
        </p>
        <p className='product__block-size-xl product__block-size'>
            XL
        </p>
    </>
  )
}

export default Size


// import React, { useState } from 'react'

// const Size = ({value}) => {

//     const [state, setState] = useState("S")

//     const handleSelectedSize = () => {
        
//     }
//     console.log(value)

//   return (
//     <div onClick={handleSelectedSize} className='product__block-sizes-active-product'>
//       <p className={ state ? 'product__block-size-active' : 'product__block-size' }>
//         {value}
//       </p>
//     </div>
//   )
// }

// export default Size