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
        case 'DELETE_CART':
            let newCart1 = [...state.cart];
            newCart1.splice(action.index, 1)
            state.cart = newCart1;
            return { ...state }
        case 'CHANGE_QUANTITY':
            const {status} = action;
            let newCart2 = [...state.cart];
            let index1 = newCart2.findIndex(product => product.id === action.cartItem.id)
            if(status){
                newCart2[index1].quantity+=1;
            }else{
                newCart2[index1].quantity -= 1;
            }
            state.cart = newCart2;
            return { ...state }
    }
    return { ...state }
}