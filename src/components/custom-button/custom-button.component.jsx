import React from "react"
import "./custom-button.styles.scss";
const CustomButton = ({children,type,onClick,inverted, isGoogleSignIn}) =>(
    <button onClick={onClick} className={ `${inverted ? "inverted" : ""}   ${ isGoogleSignIn  ? "google-sign-in"  : ""} custom-button` } type={type}>
        {children}
    </button>
);

export default CustomButton;