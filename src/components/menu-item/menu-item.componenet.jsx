import React from "react";
import './menu-item.styles.scss';
const MeuItem = ({title,imageUrl,size})=>(
    
<div className={`${size} menu-item` } >
    {console.log("=========>",imageUrl)}
    <div
     className="background-image"
     style={{backgroundImage:`url(${imageUrl})`} }
     
    />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
);
export default MeuItem;