/* eslint-disable react/no-unescaped-entities */
import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";
import ToggleButton from "../Buttons/ToggleButton";
import InputBox from "../common/InputBox/InputBox";
import SelectBox from "../common/SelectBox/SelectBox";
import { PiRobotFill } from "react-icons/pi";
const BrandSetup = () => {
  return (
    <div className=" text-gray-600">
      <div className="flex px-4 gap-3 justify-end py-6">
        <SimpleButton text={"Reset"} />
        <CheckOutButton text={"Save Changes"} />
      </div>
      <div className="border-spacing-1 border-2 rounded-md p-4 mb-10 shadow-sm">
        <div className="pb-4">
          <h3 className="text-2xl py-3 font-semibold">Button</h3>
          <SelectBox
            options={["Bottom right", "Bottom left"]}
            label={"Position"}
          />
        </div>
      </div>
      <div className="border-spacing-1 mb-4 grid md:grid-cols-2 gap-40 border-2 rounded-md p-4 shadow-sm">
        <div>
          <div className="pb-4">
            <h3 className="text-2xl py-3 font-semibold">Brand</h3>
            <div className="Image">
              <h3 className="py-3 text-lg font-semibold relative">Logo</h3>
              <div className="border-[1px] border-gray-300 border-dashed flex items-center p-4 flex-col">
                <h4 className="text-blue-500">
                  <label htmlFor="logoUpload" className="cursor-pointer">
                    Upload Logo
                    <input
                      type="file"
                      id="logoUpload"
                      className="absolute hidden"
                    />
                  </label>
                </h4>
                <p className="text-gray-300">Best Size 150x150</p>
                <p className="text-gray-300">
                  Best Formate are jpeg,jpg,png,or gif
                </p>
              </div>
            </div>
            <div className="Callout ">
              <div className="flex justify-between items-center">
                <h3 className="py-3 text-lg font-semibold relative">Callout</h3>
                <ToggleButton />
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"Title"} />
                </div>
                <div>
                  <InputBox label={"Message"} />
                </div>
              </div>
              <div className="md:hidden rounded-full border-2 flex  justify-between ps-5 pe-1 py-2 shadow-lg mt-3">
            <div>
              <h1 className="text-black font-semibold">👋Need Help?</h1>
              <h5 className="text-sm">Click here and start chatting with us</h5>
            </div>

            <div className="rounded-full bg-blue-500 w-10 h-10 grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.4em"
                width="1.4em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                ></path>
              </svg>
            </div>
          </div>
            </div>
            <hr className="py-4" />
            <div className="Color ">
              <div className="flex justify-between items-center">
                <h3 className="py-3 text-lg font-semibold relative">Callout</h3>
                <ToggleButton />
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"Color"} type={"color"} />
                </div>
                <div>
                  <InputBox label={"Greetings"} />
                  <p className="text-gray-600 text-sm">
                    Greetings will be the first message when customer click
                    bot,you can add some emoji 😊 to make greetings better
                  </p>
                </div>
                <div>
                  <InputBox label={"Shop Name"} />
                </div>
              </div>
              <div className="md:hidden block mt-3">
            <div className="rounded-lg ">
              <div className="bg-blue-500 rounded-t-lg h-7" />
              <div className="px-4 py-5">
                <div className="flex items-end gap-3">
                  <div className="bg-blue-500 p-2 rounded-sm">
                    <PiRobotFill color="white" />
                  </div>
                  <div className="px-4 pb-5 pt-3 rounded-md bg-gray-200">
                    Hi there 👋
                    <br /> How can I help you today?
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                <p className="text-white py-3 px-1 rounded-md bg-blue-500">
                  Hello, how are you?
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="rounded-full border-2 flex w-2/3 justify-between ps-5 pe-1 py-2 shadow-lg mt-32">
            <div>
              <h1 className="text-black font-semibold">👋Need Help?</h1>
              <h5 className="text-sm">Click here and start chatting with us</h5>
            </div>

            <div className="rounded-full bg-blue-500 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.4em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mt-52">
            <div className="rounded-lg w-3/4">
              <div className="bg-blue-500 rounded-t-lg h-7" />
              <div className="px-4 py-5">
                <div className="flex items-end gap-3">
                  <div className="bg-blue-500 p-2 rounded-sm">
                    <PiRobotFill color="white" />
                  </div>
                  <div className="px-4 pb-5 pt-3 rounded-md bg-gray-200">
                    Hi there 👋
                    <br /> How can I help you today?
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                <p className="text-white py-3 px-1 rounded-md bg-blue-500">
                  Hello, how are you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* <div className="border-spacing-1 mb-4 grid grid-cols-1 gap-3 border-2 rounded-md p-4 shadow-sm">
        <div>
          <div className="pb-4">
            <h3 className="text-2xl py-3 font-semibold">Function Button</h3>
            <div className="Callout ">
              <div className="flex justify-between w-1/2 items-center">
                <h3 className="py-3 text-lg font-semibold relative">
                  Shop name
                </h3>
                <ToggleButton />
              </div>
              <div className="text-gray-600 text-sm">
                When customer click “Shop Now”, our chatbot will provide
                recommendations for 10 products, and customers can view product
                images and prices for purchase.This is one of the buttons with
                the highest click-through rates. If you don’t want this function
                button showed up, you can turn it off.
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"BUtton Text"} />
                </div>
              </div>
            </div>
            <hr className="py-4" />
            <div className="Color ">
              <div className="flex justify-between w-1/2 items-center">
                <h3 className="py-3 text-lg font-semibold relative">
                  Need Help
                </h3>
                <ToggleButton />
              </div>
              <div className="text-gray-600 text-sm">
                When customer click “Need Help”, our chatbot will ask customers
                to fill in their email address. Once filled, we will send the
                customer's chat logs to the customer service supervisor's email
                address provided in the basic setup. If customers click this
                button, it means that the chatbot is unable to handle the
                request temporarily and human intervention is required. If you
                don’t want this function button showed up, you can turn it off.
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"Color"} type={"color"} />
                </div>
                <div>
                  <InputBox label={"Greetings"} />
                  <p className="text-gray-600 text-sm">
                    Greetings will be the first message when customer click
                    bot,you can add some emoji 😊 to make greetings better
                  </p>
                </div>
                <div>
                  <InputBox label={"Button text"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BrandSetup;
