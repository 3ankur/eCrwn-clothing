import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../images/crown.svg.svg";
import {Link} from "react-router-dom";
import  {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import {createStructuredSelector} from "reselect";

const Header = ({currentUser,hidden})=>(
<div className="header">
<Link className="logo-container" to="/">
  <Logo className="logo"/>
</Link>

<div className="options">
<Link className="option" to="/shop">
SHOP
</Link>
<Link className="option" to="/shop">
CONTACT 
</Link>
{
  currentUser ? <div className="option" onClick={()=>auth.signOut()}>SignOut</div> :
   <Link className="option" to="/signin" ><span>SignIn</span></Link>
}
<CartIcon/>
</div>
{
  hidden ? null : <CartDropDown />
}

</div>
);

// we  can also do like that 
// const mapStateToProps = (state)=>({
//   currentUser:  selectCurrentUser(state)  ,//state.user.currentUser
//   hidden :  selectCartHidden(state) //state.cart.hidden

// })

const mapStateToProps = createStructuredSelector({
  currentUser:  selectCurrentUser ,
  hidden :  selectCartHidden
});



export default connect(mapStateToProps)(Header);