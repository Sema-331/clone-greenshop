import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShow = ({children}) => {

    const location = useLocation()

    const [stateShow, setStateShow] = useState(false)

    useEffect(() => {
        console.log(location)
        if (location.pathname === '/Checkout/Payment') {
            setStateShow(false)
        } else {
            setStateShow(true)
        }
    }, [location])

  return (
    <div>{stateShow && children}</div>
  )
}

export default MaybeShow