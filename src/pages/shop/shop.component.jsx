import React from "react";
import {Route} from "react-router-dom";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {connect} from "react-redux";

import {firestore,convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";

import {UpdateCollections} from "../../redux/shop/shop.actions";
class ShopPage extends React.Component{
   unsubscribeFromSnapShot = null;
   
    componentDidMount(){

        const collectionRef = firestore.collection("collections");
        this.unsubscribeFromSnapShot =   collectionRef.onSnapshot( async (snapshot)=>{
            const collections = convertCollectionSnapshotToMap(snapshot);
           this.props.updateCollections(collections);
        })
    }

    render(){
      const {match} = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}   component={CollectionOverView} ></Route>
                <Route  path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
                
            </div>
        )
    }
}     

const mapDispatchToProps = (dispatch)=> {
    return {
        updateCollections : (collectionItem) => dispatch(UpdateCollections(collectionItem))
    };
}
export default  connect(null,mapDispatchToProps)(ShopPage) ;