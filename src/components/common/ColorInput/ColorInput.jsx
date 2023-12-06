<<<<<<< HEAD
/* eslint-disable react/prop-types */

const InputBox = ({ disabled, required, onchange, name, value, type }) => {
  return (
    <input
      type={type || "text"}
      name={name}
      value={value}
      // className="border-[2px]  pb-2.5 pt-4 w-full text-sm
      // text-gray-900 bg-transparent rounded-lg
      // focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      id="floating_outlined"
      className="border-[2px] px-4  pb-2.5 pt-4 w-full text-sm 
        text-gray-900 bg-transparent rounded-lg 
        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      onChange={onchange}
      disabled={disabled ? disabled : false}
      required={required ? required : true}
    />
  );
};

export default InputBox;
=======
import React from "react";

const InputBox = ({label, disabled, required, onchange, name, value, type, color}) => {
  return (     
      <input
        type={type || "text"}
        name={name}
        value={value}
        // className="border-[2px]  pb-2.5 pt-4 w-full text-sm 
        // text-gray-900 bg-transparent rounded-lg 
        // focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        id="floating_outlined"
        className="border-[2px]  pb-2.5 pt-4 w-full text-sm 
        text-gray-900 bg-transparent rounded-lg 
        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={onchange}
        disabled = {disabled ? disabled : false}
        required = {required ? required : true}
      />      
  );
};

export default InputBox;
>>>>>>> d1c27e7b2dedc7b8ab130bd88d29adfd99dbc2b9
