import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handelChange,label, name, value, type,placeholder}) =>(
    <div className="group">
        
        <input className="form-input" onChange={handelChange}  
        placeholder={placeholder || ""}
        name={name}
        value={value}
        type={type}
        />
        {
         label ? <label className={`${ value && value.length ? 'shrink' : ''} form-input`}>
 </label> : null
        }
    </div>
);
export default FormInput;