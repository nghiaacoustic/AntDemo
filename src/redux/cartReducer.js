const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
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
        case 'DELETE_CART':
            let newCart1 = [...state.cart];
            newCart1.splice(action.index, 1)
            state.cart = newCart1;
            return { ...state }
        case 'CHANGE_QUANTITY':
            const { status, cartItem } = action;
            // console.log(status)
            let newCarts = [...state.cart];
            let cartIndex = newCarts.findIndex((item) => item.id === cartItem.id)
            if (status) {
                newCarts[cartIndex].quantity += 1;
            } else if (newCarts[cartIndex].quantity > 1) {
                newCarts[cartIndex].quantity -= 1;
            }
            newCarts[cartIndex].totalPrice = newCarts[cartIndex].quantity * newCarts[cartIndex].price;
            state.cart = newCarts;
            return { ...state }
        default:
            return { ...state }
    }
}