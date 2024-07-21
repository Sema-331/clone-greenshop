import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import SideBarMobile from './SideBarMobile'

const AccountToggle = () => {

    
    const [state, setState] = useState(false)
    const [secondState, setSecondState] = useState(false)
    const [stateModal, setStateModal] = useState(false)
    const handleCLickToggle = () => {
        setState(!state)
        setSecondState(!secondState)
        setStateModal(!stateModal)
    }

  return (
    <div onClick={handleCLickToggle} className={ secondState ? 'add-adress__block-modals' : 'add-adress__block-modals-active'}>
        <h2 className='add-adress__block-modal-header'>Account</h2>
      <ChevronDown className={ !state ? 'add-adress__down-arrow' : 'add-adress__down-arrow-active' } />
      {
        stateModal ? <SideBarMobile /> : null
      }
    </div>
  )
}

export default AccountToggle