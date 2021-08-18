import React from 'react'
import UseCallback from './UseCallback'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseReducer from './UseReducer'
import UseRef from './UseRef'
import UseState from './UseState'

const Hooks = () => {
  return (
    <div>
      <p>UseState</p>
      <UseState />
      <hr />
      <p>UseEffect</p>
      <UseEffect />
      <hr />
      <p>Use Callback</p>
      <UseCallback />
      <hr />
      <p>Use UseMemo</p>
      <UseMemo />
      <hr />
      <p>Use Ref</p>
      <UseRef />
      <hr />
      <p>Use Reducer</p>
      <UseReducer />
    </div>
  )
}

export default Hooks
