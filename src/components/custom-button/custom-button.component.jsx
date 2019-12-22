import React from "react"
import "./custom-button.styles.scss";
import {CustomButtonContainer} from  "./custom-button.styles";

const CustomButton = ({children,type,onClick,inverted, isGoogleSignIn}) =>(

    <CustomButtonContainer onClick={onClick}  type={type} isGoogleSignIn = {isGoogleSignIn} inverted = {inverted}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;