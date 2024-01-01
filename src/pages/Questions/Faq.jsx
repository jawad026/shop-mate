import React, { useState } from "react";
import CheckOutButton from "../../components/common/Buttons/CheckOutButton";
import InputBox from "../../components/common/InputBox/InputBox";

function Faq() {
  const [inputFields, setInputFields] = useState([""]); // Initial state with one empty input field

  const addInputField = () => {
    if (inputFields.length < 5) {
      setInputFields([...inputFields, ""]);
    }
  };

  const handleInputChange = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields);
  };

  const removeInputField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <>
      <div className="flex justify-end mr-12 mt-6 ">
        
        <CheckOutButton text={"Save"} />
      </div>

      <div className="flex flex-col items-center mt-2">
        <div className="flex ">
        
          <InputBox
            type="text"
            value={inputFields[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />

          <CheckOutButton onClick={addInputField} text={"+"} />
        </div>
        <div>
          {inputFields.slice(1).map((value, index) => (
            <div className="flex mt-2 " key={index}>
            
              <InputBox type="text"
                value={value}
                onChange={(e) => handleInputChange(index + 1, e.target.value)} />
              <CheckOutButton
                onClick={() => removeInputField(index + 1)}
                text={"–"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
