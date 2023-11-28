import React, { useState } from "react";

const InputBox = ({ id, label, disabled, required, height, width, onchange, register}) => {
  return (
    <div className="relative" style={{height:height, width:width}} >
      <input
        type="text"
        id="floating_outlined"
        className="border-[2px] border-gray block px-2.5 pb-2.5 pt-4 w-full text-sm 
        text-gray-900 bg-transparent rounded-lg 
        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={onchange}
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 
        top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2
        peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
        peer-placeholder-shown:top-1/2 peer-focus:top-2
        peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
        rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default InputBox;