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

import {HeaderContainer,OptionLink,OptionContainerDiv,OptionsContainer,LogoContainer} from "./header.styles";

const Header = ({currentUser,hidden})=>(
<HeaderContainer>
<LogoContainer to="/">
  <Logo className="logo"/>
</LogoContainer>

<OptionsContainer>
<OptionLink to="/shop">
SHOP
</OptionLink>
<OptionLink to="/shop">
CONTACT 
</OptionLink>
{
  currentUser ? <OptionContainerDiv onClick={()=>auth.signOut()}>SignOut</OptionContainerDiv> :
   <OptionLink to="/signin" ><span>SignIn</span></OptionLink>
}
<CartIcon/>
</OptionsContainer>
{
  hidden ? null : <CartDropDown />
}

</HeaderContainer>
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