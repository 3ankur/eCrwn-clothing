import React from "react";
import {connect} from "react-redux";
import PreviewCollection from "../../components/preview-collection/preview-collection.componenet";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";
const  ShopPage  = ({collections})=>{
        return (
            <div className="shop-page">
                { 
                   collections.map((collection)=>(
                    <PreviewCollection key={collection.id} title={collection.title} items={collection.items}  />
                   ))
                }
            </div>
        )
}

  


const mapStateToProps = createStructuredSelector({
    collections:selectCollections
});
export default connect(mapStateToProps)(ShopPage);