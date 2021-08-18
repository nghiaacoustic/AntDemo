import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo';

const UseMemo = () => {

  let [number, setNumber] = useState(1);
  let cart = [
    { id: 1, name: 'iphone', price: 8000 },
    { id: 2, name: 'samsung', price: 6000 }
  ]

  const cartMemo = useMemo(() => cart, [number])

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber)
  }

  return (
    <div className='ant-card'>
      <div className='ant-card-body'>
        <p>{number} like</p>
        <button onClick={handleIncrease} className='ant-btn-group-lg'>Like</button>
      </div>
      <br />
      <ChildUseMemo cart={cartMemo} />
    </div>
  )
}

export default UseMemo
