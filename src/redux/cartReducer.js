const initialState = {
    cart: []
}

export const GioHangReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            let newCart = [...state.cart];
            let index = newCart.findIndex(product => product.id === action.cartItem.id)
            if (index !== -1) {
                newCart[index].quantity += 1;
                newCart[index].totalPrice = newCart[index].quantity * newCart[index].price;
            } else {
                action.cartItem.totalPrice = action.cartItem.price
                newCart.push(action.cartItem);
            }
            state.cart = newCart;
            return { ...state }
    }
    return { ...state }
}