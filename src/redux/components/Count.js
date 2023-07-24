import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Count() {

    const states = useSelector((state)=>state)

    console.log(states)

    let [count,setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(count++)
    }
    const decrementCount = ()=>{
        setCount(count--)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}> + </button>
        <button onClick={decrementCount}> - </button>

    </div>
  )
}

export default Count