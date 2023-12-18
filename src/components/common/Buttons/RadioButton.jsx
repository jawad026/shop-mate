import React from "react";

function RadioButton() {
  return (
    <>
      
      <div class="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
        />
        
      </div>
    </>
  );
}

export default RadioButton;
