import {createSelector} from "reselect";

const selectCart = state=> state.cart;


export const selectCartItem = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartHidden = createSelector(
[selectCart],
(cart)=>cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems=>cartItems.reduce((ac,itm)=>ac+itm.quantity ,0)
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    (cartItems)=> cartItems.reduce((ac,item)=>ac+(item.price*item.quantity),0)
)