import React from 'react'
import OptionBlockFirst from './OptionBlockFirst'
import OptionsBlockSecond from './OptionsBlockSecond'

const OptionsMain = () => {
  return (
    <section>
        <div className="container">
            <div className="options">
                <OptionBlockFirst />
                <OptionsBlockSecond />
            </div>
        </div>
    </section>
  )
}

export default OptionsMain