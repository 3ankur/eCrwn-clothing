import React from 'react';
//import logo from './logo.svg';
import HomePage  from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component"
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={Shop}></Route>
      </Switch>
    </div>
    
  );
}

export default App;
