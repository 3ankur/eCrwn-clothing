import React from "react";
import "./signUp-styles.scss";
import  FormInput from "../form-input/form-input.component";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";
import  CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component{
  constructor(props){
        super(props);
        this.state = {
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
        }
    }


    handelChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }

    handelSubmit = async event =>{
        event.preventDefault();
        const { email ,password ,confirmPassword,displayName} = this.state;
        if(password!==confirmPassword){
            alert("Password don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user,{displayName});
            this.setState({
                email :"",
                password:"" ,
                confirmPassword:"",
                displayName:""
            });
        }catch(error){

        }

    }

    render(){
        return(
         <div className="sign-up">
             <h2>I do not have a account</h2>
             <span>Sign up with your email and password</span>
               <form onSubmit={this.handelSubmit}>


               

               <FormInput
                 type="text"
                 handelChange={this.handelChange}
                 value={this.state.displayName}
                 placeholder="Display Name"
                 name = "displayName"
                 />
                 <FormInput
                 type="email"
                 handelChange={this.handelChange}
                 value={this.state.email}
                 placeholder="email"
                 name = "email"
                 />
                 <FormInput
                 type="Password"
                 handelChange={this.handelChange}
                 value={this.state.password}
                 placeholder="password"
                 name="password"
                 />
                 <FormInput
                 type="password"
                 handelChange={this.handelChange}
                 value={this.state.confirmPassword}
                 placeholder="Confirm Password"
                 name="confirmPassword"
                 />

            <CustomButton type="submit" >Sign Up</CustomButton>
             </form>
         </div>   
        )
}

}

export default SignUp;