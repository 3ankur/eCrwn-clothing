import React from "react";
import {Route} from "react-router-dom";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
const  ShopPage  = ({match})=>{
    console.log(match);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}   component={CollectionOverView} ></Route>
                <Route  path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
                
            </div>
        )
}
export default ShopPage;