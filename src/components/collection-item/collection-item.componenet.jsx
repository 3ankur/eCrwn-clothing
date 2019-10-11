import React from "react";
import "./collection-item.styles.scss";
import CustomButtom from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux" 
// item
const CollectionItem = ({item , addItem})=>{
const {id,name,imageUrl,price} = item;
return (
<div className="collection-item" key={id}>
            <div className="image"  style={{backgroundImage:`url(${imageUrl})`}} />
        
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButtom onClick={()=> addItem(item)}>Add to cart</CustomButtom>
        </div>
        )
};

const mapDispatchToProps = (dispatch)=>({
 addItem : (item)=>dispatch(addItem(item))
})

export default  connect(null,mapDispatchToProps)(CollectionItem) ;