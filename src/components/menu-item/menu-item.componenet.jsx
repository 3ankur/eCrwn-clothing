import React from "react";
import './menu-item.styles.scss';
import {withRouter} from  "react-router-dom"
const MeuItem = ({title,imageUrl,size,history,match,linkUrl})=>(
    
<div className={`${size} menu-item` } >
    {console.log("=========>",imageUrl)}
    <div
     className="background-image"
     style={{backgroundImage:`url(${imageUrl})`} }
     onClick={()=>history.push(`${match.url}${linkUrl}`)}
     
    />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
);
export default withRouter(MeuItem);