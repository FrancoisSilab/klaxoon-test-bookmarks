import React from "react";

import "./form-group.styles.scss";

const FormGroup = ({handleChange, label, options, type, ...otherProps }) => (
  <div className="formGroup">
    {label ? <label>{label}</label> : null}
    {
      (type === "section" ? (
        <select onChange={handleChange} {...otherProps}>
          {
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))
          }
        </select>
      ) : (
        <input onChange={handleChange} type={type} {...otherProps} />
      ))
    }
  </div>
);

export default FormGroup;
