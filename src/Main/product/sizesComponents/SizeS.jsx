import React from 'react'
import Size from './Size'

const SizeS = ({item}) => {
  return (
    <div className='product__block-sizes'>
        <Size />
    </div>
  )
}

export default SizeS

// import React, { useState } from 'react'
// import Size from './Size'

// const SizeS = ({item}) => {

//   return (
//     <div className='product__block-sizes'>
//         {
//           item.sizes.map((value) => (
//             <Size value={value} />
//           ))
//         }
//     </div>
//   )
// }

// export default SizeS