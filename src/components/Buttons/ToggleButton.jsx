import React from "react";

function ToggleButton({checked, value, onChange}) {
  return (
    <>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input onChange={onChange} type="checkbox" checked={checked} value={value} className="sr-only peer" />
          <div
            className="w-10 h-5
           bg-gray-200 peer-focus:outline-none
           rounded-full   peer-checked:after:translate-x-full
            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-blue-700
             after:content-[''] after:absolute  
              after:bg-white after:border-gray-400 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all dark:border-gray-800
               peer-checked:bg-blue-400"
          ></div>
        </label>
      </div>
    </>
  );
}

export default ToggleButton;
