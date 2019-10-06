import React from "react"
import "./custom-button.styles.scss";
const CustomButton = ({children,type,onClick,isGoogleSignIn}) =>(
    <button onClick={onClick} className={ `${ isGoogleSignIn  ? "google-sign-in"  : ""} custom-button` } type={type}>
        {children}
    </button>
);

export default CustomButton;