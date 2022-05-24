import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { increaseAsync, decreaseAsync } from '../modules/Counter';


function CounterContainer() {
    const number = useSelector(state => state.Counter);
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync());
    }

  return (
      <>
        <Counter 
        number={number} 
        onIncrease={onIncrease} 
        onDecrease={onDecrease} />
      </>
  )
}

export default CounterContainer