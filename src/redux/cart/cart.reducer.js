import {CartTypes} from "./cart.types"
import {addItemsToCart,removeItemFromCart} from "./cart.utils"
const INITAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITAL_STATE,action)=>{
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
            case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems,action.payload)
            }
             case CartTypes.REMOVE_ITEM:
                 return{
                     ...state,
                     cartItems: removeItemFromCart(state.cartItems,action.payload)
                 }
            case CartTypes.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
                }


            
        default:
          return state;
    }
}
export default cartReducer;