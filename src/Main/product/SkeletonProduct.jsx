import React from 'react'
import ContentLoader from 'react-content-loader'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'

const SkeletonProduct = () => {

    const {loading} = useSelector((item) => item.products)

  return (
    <div style={{marginBottom:'30px', display:"flex", flexDirection:'row', justifyContent:'space-between', marginBottom:'50px', alignItems:'center', flexWrap:'wrap'}}>
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
        <Skeleton style={{marginBottom:'50px'}} count={1} width={320} height={430} />
    </div>
  )
}

export default SkeletonProduct