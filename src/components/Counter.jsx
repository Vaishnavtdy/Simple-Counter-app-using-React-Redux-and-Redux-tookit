import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, resetVal } from '../features/counterSlice'
import './Counter.css'

function Counter() {
  const color = useSelector((state)=> state.counter.color)
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  return (
    <div style={{background: '#'+ color, display: 'flex', flexDirection: 'column', alignItems: "center", height: '100vh', justifyContent: 'center'}}>
        <h1 style={{color: 'white'}}>{count}</h1>
        <div className='btnContainer'>
        <button className='btnStyle' onClick={()=> dispatch(decrement())}><b>-</b></button>
        <button className='btnStyle' onClick={()=> dispatch(increment())}><b>+</b></button>
        </div>
        <button className='btnStyle' onClick={()=> dispatch(resetVal())}><b>Reset</b></button>
    </div>
  )
}


export default Counter