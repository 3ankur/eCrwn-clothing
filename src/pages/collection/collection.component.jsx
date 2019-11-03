import React from "react";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors"
import CollectionItems from "../../components/collection-item/collection-item.componenet";
//import {createStructuredSelector} from "reselect";
import "./collection.styles.scss";
console.log("--------->`12121");
const CollectionPage = ({collection}) =>{
    console.log("--------->",collection);
    const {title,items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map((item)=><CollectionItems item={item}/>)
            }
            </div>
            
            
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default  connect(mapStateToProps)(CollectionPage) ;