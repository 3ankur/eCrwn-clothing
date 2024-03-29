import React from "react";
import MenuItem from "../menu-item/menu-item.componenet";
import './directory.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirecorySections} from "../../redux/directory/directory.selectors";

const Directory = ({sections})=>(
  <div className="directory-menu">
                {
                    sections.map(({title,imageUrl,id,size,linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                        )
                    )
                }
    </div>
)
    

const mapStateToProps = createStructuredSelector({
 sections:selectDirecorySections
}) 
export default  connect(mapStateToProps)(Directory) ;