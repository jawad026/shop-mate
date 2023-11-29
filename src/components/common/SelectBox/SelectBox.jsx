/* eslint-disable react/prop-types */
import { Select, Option } from "@material-tailwind/react";
 
const SelectBox = ({options}) => {
  return (
    <div className="">
      <Select color="blue" label="Select Version">
        {options && options.map((option, index) => (
            <Option key={index}>{option}</Option>
        ))}
      </Select>
    </div>
  );
}

export default SelectBox
