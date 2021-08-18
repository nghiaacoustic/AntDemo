import React, { useCallback, useState } from 'react'
import ChildUseCallback from './ChildUseCallback';

const UseCallback = () => {

  let [number, setNumber] = useState(1);

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber)
  }

  const renderNotify = () => {
    console.log('render notify')
  }

  const handleUseCallback = useCallback(renderNotify, [number])

  // note: dùng khi truyền props vào child và muốn control việc render or not của props đó
  // tham số 1: props, tham số 2: [] khi muốn render 1 lần duy nhất, [tham số] khi muốn rerender khi tham số thay đối
  // tương tự useEffect dùng cho component did update

  return (
    <div className='ant-card'>
      <div className='ant-card-body'>
        <p>{number} like</p>
        <button onClick={handleIncrease} className='ant-btn-group-lg'>Like</button>
      </div>
      <br/>
      <ChildUseCallback renderNotify={handleUseCallback}/>
    </div>
  )
}

export default UseCallback
