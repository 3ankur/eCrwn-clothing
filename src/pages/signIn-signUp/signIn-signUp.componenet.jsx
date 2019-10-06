import React from "react";
import "./signIn-signUp.componenet.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signUp/signUp-component";
const SignInAndSignUp = ()=>(
<div className="signin-and-signup">
    <SignIn/>
    <SignUp />
    </div>
);
export default SignInAndSignUp;