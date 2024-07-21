import React, { useEffect, useState } from 'react'
import {myExtraRedux, fetchTodos, filterProduct, addNewTodo, deleteTodo, toggleStatus} from './Slices/storeTraining'
import Paginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

const My = () => {

    const {todos, status, error} = useSelector((item) => item.todoSlice)
       const dispatch = useDispatch()

  return (
    <div>
        {
            status === 'loading' && <h2>Loading...</h2>
        }
        {
            error && <h2>{error}</h2>
        }
        {
            todos.map((item) => (
                <div key={item.id}>
                    <input onClick={() => console.log(item.completed)} onChange={() => dispatch(toggleStatus(item.id))} type="checkbox" checked={item.completed} />
                    <span>{item.title}</span>
                    <div>{item.id}</div>
                    <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
                    
                </div>
            ))
        }
    </div>
  )
}

export default My