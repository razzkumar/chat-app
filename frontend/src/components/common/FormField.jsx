import React from "react";

export default ({ type, name, value, placeholder, changeHandler }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        required={true}
        value={value}
      />
    </div>
  );
};
