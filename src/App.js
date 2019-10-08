import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import HomePage  from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component"
import {Switch,Route,Redirect} from "react-router-dom";
import Header from "./components/header/header.componenet";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.componenet";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser:null
  //   };
  // }

   unsubscibeFromAuth = null;

  componentDidMount(){
  this.unsubscibeFromAuth =  auth.onAuthStateChanged(async userAuth=> {
      console.log(userAuth);

      if(userAuth){
        const userRef =await  createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          if(snapShot.data()){

            console.log(snapShot.data());
     this.props.setCurrentUser({
            id:snapShot.id,
             ...snapShot.data()
           });
          }
          
        });

      }
      else{
        this.props.setCurrentUser(null);
      }
      

      this.props.setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render(){

    return (
      <div>
        {
          // currentUser={this.state.currentUser}
        }
        <Header  />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/signIn" exact render={ ()=> this.props.currentUser ? (<Redirect to="/" />) : <SignInAndSignUp/> }  ></Route>
          
        </Switch>
      </div>
      
    );
  }
 
}

const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
});

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
