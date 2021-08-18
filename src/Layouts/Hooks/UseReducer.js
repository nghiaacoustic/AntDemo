import React, { useReducer } from 'react'

const initialCart = []

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(cart => cart.id === action.item.id)
      if (index !== -1) {
        cartUpdate[index].quantity += 1
      } else {
        const itemCart = { ...action.item, quantity: 1 }
        cartUpdate.push(itemCart)
      }
      return cartUpdate
  }
  return [...state]
}

let arrProduct = [
  { id: 1, name: 'iphone', price: 1200 },
  { id: 2, name: 'samsung', price: 1000 },
  { id: 3, name: 'xiaomi', price: 1100 },
]

const UseReducer = () => {

  let [cart, dispatch] = useReducer(cartReducer, initialCart)

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {
          arrProduct.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <button onClick={() => {
                  dispatch({
                    type: 'ADD_CART',
                    item
                  })
                }}>Addcart</button>
              </div>
            )
          })
        }
      </div>
      <br />
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

export default UseReducer
