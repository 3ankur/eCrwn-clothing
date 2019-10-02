import React from "react";
import SHOP_DATA from "./shop-data"
import PreviewCollection from "../../components/preview-collection/preview-collection.componenet";
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
      const {collections} =  this.state;
      console.log(collections);
        return (
            <div className="shop-page">
                { // 
                   collections.map((collection)=>(
                    <PreviewCollection key={collection.id} title={collection.title} items={collection.items}  />
                   ))
                }
            </div>
        )
    }
}
export default ShopPage;