import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import HomePage  from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component"
import {Switch,Route,Redirect} from "react-router-dom";
import Header from "./components/header/header.componenet";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.componenet";
import {auth,createUserProfileDocument,addCoolectionAndDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import CheckoutPage from './pages/checkout/checkout.component';
//import {selectCollectionPreview} from "./redux/shop/shop.selectors";

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser:null
  //   };
  // }

   unsubscibeFromAuth = null;

  componentDidMount(){
    const {collectionArray} = this.props;
    console.log(this.props,"================>")
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

    //addCoolectionAndDocument("collections",collectionArray.map( (obj)=>{return {title:obj.title,items:obj.items}} ))
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
          <Route path="/shop"  component={Shop}></Route>
          <Route path="/signIn" exact render={ ()=> this.props.currentUser ? (<Redirect to="/" />) : <SignInAndSignUp/> }  ></Route>
          <Route path="/checkout"  exact component={CheckoutPage}></Route>
        </Switch>
      </div>
      
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
 // collectionArray : selectCollectionPreview
});

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
