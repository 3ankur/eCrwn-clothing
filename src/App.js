import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import HomePage  from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component"
import {Switch,Route} from "react-router-dom";
import Header from "./components/header/header.componenet";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.componenet";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={Shop}></Route>
        <Route path="/signIn" exact component={SignInAndSignUp}></Route>
        
      </Switch>
    </div>
    
  );
}

export default App;
