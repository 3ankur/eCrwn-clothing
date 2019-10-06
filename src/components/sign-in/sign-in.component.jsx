import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton  from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils" 
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }

    googleSignIn = () =>{
        console.log(1);
        signInWithGoogle();
    }

    handelSubmit = (e)=>{
        e.preventDefault();
    }


    handelChange = (e) =>{
        let {name,value} = e.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="sign-in">
            <h2>I alrady have an account</h2>
            <span>sign in with username and password</span>
            <form onSubmit={this.handelSubmit}>
                {/* <input onChange={this.handelChange}  name="email" type="email" value={this.state.email} required />
                */}
               <FormInput 
               handelChange={this.handelChange}
             //   label="Email"
               value={this.state.email} 
               placeholder="Email"
               required
               name={"email"}
               type="email"
               />
               
                {/* <label>Email</label> */}

                {/* <input onChange={this.handelChange} name="password" type="password" value={this.state.password} required />
                <label>Password</label> */}

<FormInput 
               handelChange={this.handelChange}
            //    label={"password"}
            placeholder="Password"
               value={this.state.password} 
               required
               name={"password"}
               type="password"
               />

                {/* <button type="submit">Login</button> */}
                <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton isGoogleSignIn={true} onClick={this.googleSignIn}>Sign In with Google</CustomButton>
               
                </div>
                
            </form>
        </div>
        )
    }
}

export default SignIn;