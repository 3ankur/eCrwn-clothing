import React from "react";
import { ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg.svg";
import "./cart-icon.styles.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        {console.log("kya biua",itemCount)}
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps = (state)=>
( {itemCount: selectCartItemsCount(state)  } )//cartItems.reduce((ac,itm)=>ac+itm.quantity ,0)

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);