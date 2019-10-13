import React from "react";
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {clearItemFromCart,removeItem,addItem} from "../../redux/cart/cart.actions";

const CheckoutItems = ({cartItem,clearItem,removeItemFromCart,addItemToCart})=>{
    const {name,imageUrl,price,quantity} = cartItem
    return (
    
    
        <div className="checkout-item">
            <div className="image-container">
        <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={()=>removeItemFromCart(cartItem)} className="arrow">&#10094;</div>

              <span className="value">{quantity}</span>  

            <div onClick={()=>addItemToCart(cartItem)} className="arrow">&#10095;</div>
            
            </span>
            <span className="price">{price}</span>
            <div onClick={()=>clearItem(cartItem)} className="remove-button"> &#10005; </div>
        </div>
    )
};

const  mapDispatchToProps = (dispatch)=>({
  clearItem : (item)=> dispatch(clearItemFromCart(item)),
  removeItemFromCart: (item)=> dispatch(removeItem(item)),
  addItemToCart: (item)=> dispatch(addItem(item)),
})
export default  connect(null,mapDispatchToProps)(CheckoutItems);