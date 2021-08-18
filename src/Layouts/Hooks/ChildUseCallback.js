import React, { memo } from 'react'

const ChildUseCallback = (props) => {

  console.log('child use callback')
  return (
    <div>
      {props.renderNotify()}
    </div>
  )
}

export default memo(ChildUseCallback)
