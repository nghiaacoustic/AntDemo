import React, { useState } from 'react';

const UseState = () => {

  let [state, setState] = useState({ like: 0 });

  const handleLike = () => {
    setState({ like: state.like + 1 })
  }

  return (
    <div className='ant-card'>
      <div className='ant-card-body'>
        <p>{state.like} like</p>
        <button onClick={handleLike} className='ant-btn-group-lg'>Like</button>
      </div>
    </div>
  )
}

export default UseState
