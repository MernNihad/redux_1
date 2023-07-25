import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../countReducer';

function Count() {
  // display redux state 
    const { count } = useSelector((state)=>state.count)

    // setState , update
    const dispacth = useDispatch();

    

    const incrementCount = ()=>{
        dispacth(increment())
    }
    const decrementCount = ()=>{
        dispacth(decrement())
    }

  return (
    <div>
      <h1>REDUX : {count}</h1>
        <button onClick={incrementCount}> + </button>
        <button onClick={decrementCount}> - </button>
    </div>
  )
}

export default Count