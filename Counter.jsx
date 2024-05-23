import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, IncreaseBy5,DecreaseBy5, Decrement, Settozero} from './src/redux/Counter'

function Counter () {
    let count=useSelector((state)=>state.counter.value)
    let dispatch=useDispatch()
  return (
    <div>
      <h1 style={{"color":"black"}}>COUNTER</h1>
      <button onClick={()=>dispatch(Increment())}>+1</button> <br />
      <button onClick={()=>dispatch(IncreaseBy5(5))}>+5</button>

      <h4>{count}</h4>
      <button onClick={()=>dispatch(DecreaseBy5(5))}>-5</button><br></br>
      <button onClick={()=>dispatch(Decrement())}>-1</button> <br /><br></br>
      <button onClick={()=>dispatch(Settozero())}>Set 0</button>
    </div>
  )
}

export default Counter
