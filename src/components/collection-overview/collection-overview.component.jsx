import React from "react";
import "./collection-overview.styles.scss";

import {connect} from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.componenet";
import {createStructuredSelector} from "reselect";
import {selectCollectionPreview} from "../../redux/shop/shop.selectors";

const CollectionOverView = ({collections})=>{
    console.log(collections,"main props");
    return(
        <div className="collections-overview">
            { 
        collections.map((collection)=>  (
         <PreviewCollection key={collection.id} title={collection.title} items={collection.items}  />
        ))
     }
        </div>
    )
   
    
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverView)