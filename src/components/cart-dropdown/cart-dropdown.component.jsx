import React from "react";
import "./cart-dropdown.styles.scss";
import {connect}  from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import  {selectCartItem} from "../../redux/cart/cart.selectors";
const CartDropDown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems&& cartItems.map(cartItem=>(<CartItem key={cartItem.id}
                    item={cartItem} />))
            }
        
        </div>
        <CustomButtom >Checkout</CustomButtom>
    </div>
);

const mapStateToProps = (state)=>({cartItems:selectCartItem(state)})

export default connect(mapStateToProps)(CartDropDown);