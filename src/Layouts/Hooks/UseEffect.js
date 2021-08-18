import React, { useState, useEffect } from 'react'


const UseEffect = () => {

  let [number, setNumber] = useState(1);

  useEffect(() => {
    // chạy sau render
    // tương tự didmount vs didUpdate
    //truyền dependencies là [] chỉ chạy 1 lần duy nhất, setState ko chạy lại (didmount)
    // truyền dependencies là [tham số] , khi tham số thay đổi vd như setState cho tham số, chạy lại(didUpdate)
    // return => willUnmout
    console.log('useEffect')
  }, [number])

  console.log('object')

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
    </div>
  )
}

export default UseEffect
