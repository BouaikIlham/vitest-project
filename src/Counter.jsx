import { useState } from 'react'
import { useCounter } from './useCounter'
const Counter = () => {
  
    const { count, increment, decrement, reset } = useCounter()
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">count is: {count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increment}>+</button>
        <button className="control__btn" onClick={decrement}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter