export const addItemsToCart = (cartItems,itemToAdd)=>{
    const existingItem = cartItems.find(item=>item.id===itemToAdd.id)

    if(existingItem){

        return cartItems.map(cartItem=>
            (cartItem.id===itemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} :cartItem ))

    }else{
        return [...cartItems,{...itemToAdd,quantity:1}];
    }
}