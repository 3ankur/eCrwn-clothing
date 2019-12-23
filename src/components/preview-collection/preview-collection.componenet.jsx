import  React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.componenet";
const PreviewCollection = ({title,items,id})=>(
   
   
    <div className="collection-preview" key={`${id}_${title}`}>
        <h1 className="title">{title.toUpperCase() || "N/A"}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=>idx<4)
                    .map((item)=>(
                    <CollectionItem key={item.id} item={item}  />
                ))
                //name={item.name} imageUrl={item.imageUrl} price={item.price}
            }
        </div>
    </div>
);
export default PreviewCollection;