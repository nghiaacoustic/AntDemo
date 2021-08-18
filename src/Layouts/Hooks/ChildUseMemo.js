import React, { memo } from 'react'

const ChildUseMemo = (props) => {
  console.log('cart')
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {
            props.cart.map((item, index) => {
              return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default memo(ChildUseMemo)
