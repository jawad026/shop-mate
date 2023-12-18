import CheckOutButton from "../Buttons/CheckOutButton";
import MyImage from "../../assets/something.gif";
import Second from "../../assets/step2.png";
import First from "../../assets/step1.png";

import { FaHandPointDown } from "react-icons/fa";
const InstallationInstruction = () => {
  return (
    <>
      <div className="flex justify-center md:flex-col flex-col mt-10 gap-10">
        <div className="border rounded-md my-5 p-4">
          <div className="my-3">
            <h1 className="font-semibold text-xl text-black">
              Select a theme to add chat bubble
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="border rounded-md px-6 py-5 relative border-gray-300">
              <img
                className="h-15 w-28 absolute left-0 top-1"
                src={First}
                alt="Step 1"
              />
              <div className="flex mt-9">
                <p>Click Blue Button</p>

                <FaHandPointDown />
              </div>

              <CheckOutButton text={"PREVIEW AND ACTIVATE BOT IN THEME"} />
            </div>

            <div className="border rounded-md px-6 py-5 relative border-gray-300 ">
              <img
                className="h-15 w-28 absolute left-0 top-1 "
                src={Second}
                alt="Step 2"
              />
              <p className="mt-9">
                In theme editor toggle ON ShopMate App embed
              </p>
              <p>Press Save button</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={MyImage} alt="Loading..." />
        </div>
      </div>
    </>
  );
};

export default InstallationInstruction;
