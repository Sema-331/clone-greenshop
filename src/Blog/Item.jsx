import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatus } from './../Slices/storeTraining'

const Item = ({id, title, completed}) => {

    const dispatch = useDispatch()

  return (
    <>
        <input type="checkbox" onChange={() => dispatch(toggleStatus(id))} checked={completed} />
        <div>{id}</div>
        <div>{title}</div>
        <button onClick={() => dispatch(deleteTodo(id))} className="button">Click</button>
    </>
  )
}

export default Item