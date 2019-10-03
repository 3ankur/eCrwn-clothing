import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
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
                <input onChange={this.handelChange}  name="email" type="email" value={this.state.email} required />
                <label>Email</label>

                <input onChange={this.handelChange} name="password" type="password" value={this.state.password} required />
                <label>Password</label>

                <button type="submit">Login</button>
            </form>
        </div>
        )
    }
}

export default SignIn;