import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import HomePage  from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component"
import {Switch,Route} from "react-router-dom";
import Header from "./components/header/header.componenet";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.componenet";

import {auth,createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    };
  }

   unsubscibeFromAuth = null;

  componentDidMount(){
  this.unsubscibeFromAuth =  auth.onAuthStateChanged(async userAuth=> {
      console.log(userAuth);

      if(userAuth){
        const userRef =await  createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          if(snapShot.data()){
            console.log(snapShot.data());
          this.setState({
       currentUser:{
             id:snapShot.id,
              ...snapShot.data()
            }
          })
          }
          
        });

      }
      else{
        this.setState({currentUser:null});
      }
      

    this.setState({currentUser:userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render(){

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/signIn" exact component={SignInAndSignUp}></Route>
          
        </Switch>
      </div>
      
    );
  }
 
}

export default App;
