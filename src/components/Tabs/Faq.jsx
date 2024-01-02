import { useState } from "react";
import CheckOutButton from "../../components/common/Buttons/CheckOutButton";
import InputBox from "../../components/common/InputBox/InputBox";
import SimpleButton from "../common/Buttons/SimpleButton";

function Faq() {
  const [inputFields, setInputFields] = useState([""]); // Initial state with one empty input field
  const [formData, setFormData] = useState([""]);
  const addInputField = () => {
    if (inputFields.length < 4) {
      setInputFields([...inputFields, ""]);
    }
  };

  const handleInputChange = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields);

    const newFormData = [...formData];
    newFormData[index] = value;
    setFormData(newFormData);
  };

  const removeInputField = (index) => {
    if (inputFields.length > 1) {
      const newInputFields = [...inputFields];
      newInputFields.splice(index, 1);
      setInputFields(newInputFields);
    }

    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };
  const handleSave = (event) => {
    event.preventDefault();
    // Send the formData to the backend
    console.log("Data to be sent to the backend:", formData);
    // Add your API call or logic to send data to the backend here
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className="flex px-4 gap-3 justify-end py-6">
          <SimpleButton text={"Reset"} type="button" />
          <CheckOutButton type="submit" text={"Save Changes"} />
        </div>
        <div className="shadow-xl border rounded-lg border-color: black-800 md:mx-16 ">
          <div className="flex flex-col items-center mt-12  h-96  ">
              {" "}
            <div className="flex items-center">
              <div className="md:w-[900px]">
              <h1 className="text-start">Question {1}     <InputBox
                  maxLength={40}
                  type="text"
                  value={inputFields[0]}
                  onchange={(e) => handleInputChange(0, e.target.value)}
                /></h1>   
              </div>
              <div className="ml-8 mt-5 ">
                <CheckOutButton onClick={addInputField} text={"+"} />
              </div>
            </div>
            <div>
              {inputFields.slice(1).map((value, index) => (
                <div key={index}>
                  <h1>Question {index + 2} </h1>{" "}
                  <div className="flex mt-2" key={index}>
                    <div className=" md:w-[900px]">
                      <InputBox
                        maxLength={40}
                        type="text"
                        value={value}
                        onchange={(e) =>
                          handleInputChange(index + 1, e.target.value)
                        }
                      />
                    </div>
                    <div className="ml-8 mt-1">
                      <CheckOutButton
                        onClick={() => removeInputField(index + 1)}
                        text={"–"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Faq;
