import React from "react";
import "./cart-dropdown.styles.scss";
import {connect}  from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import  {selectCartItem} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
const CartDropDown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {

                cartItems.length ? cartItems.map(cartItem=>(<CartItem key={cartItem.id}
                    item={cartItem} />)) : 
                    <span className="empty-message">Your cart is empty</span>
            }
        
        </div>
        <CustomButtom onClick={()=>{
            dispatch(toggleCartHidden())   
            history.push("/checkout")
        }
            
            } >Checkout</CustomButtom>
    </div>
);

const mapStateToProps = (state)=>({cartItems:selectCartItem(state)})

export default withRouter(connect(mapStateToProps)(CartDropDown));