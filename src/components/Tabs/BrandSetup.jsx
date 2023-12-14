/* eslint-disable react/no-unescaped-entities */
import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";
import ToggleButton from "../Buttons/ToggleButton";
import InputBox from "../common/InputBox/InputBox";
import SelectBox from "../common/SelectBox/SelectBox";
import { PiRobotFill } from "react-icons/pi";
import { Formik } from "formik";
import { useState } from "react";
import ColorInput from "../common/ColorInput/ColorInput";

const initialValues = {
  positionButton: "",
  calloutTitle: "👋Need Help?",
  calloutMessage: "Click here and start chatting with us",
  calloutToggle: false,
  colorToggle: false,
  color: "#8d3d80",
  greetings: "Hi there 👋How can I help you today?",
  shopName: "",
};

const BrandSetup = () => {
  const [colorString, setColorString] = useState("#2196F3");
  const [toggleCallout, setToggleCallout] = useState(false);

  const submitForm = async (values) => {
    //   await axios.post("/api", {
    //     positionButton: values.positionButton,
    //     calloutTitle: values.calloutTitle,
    //     calloutMessage: values.calloutMessage,
    //     calloutToggle: values.calloutToggle,
    //     colorToggle: values.colorToggle,
    //     color: values.color,
    //     greetings: values.greetings,
    //     shopName: values.shopName,
    // })
    // .then((res) => console.log("Basic Page Submission done"));
    values.color = colorString;
    console.log("Values:", values);
  };

  const handleColorChange = (e) => {
    setColorString(e);
  };

  console.log(toggleCallout);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex px-4 gap-3 justify-end py-6">
              <SimpleButton text={"Reset"} type="button" />
              <CheckOutButton type="submit" text={"Save Changes"} />
            </div>

            <div className="border-spacing-1 border-2 rounded-md p-4 mb-10 shadow-sm">
              <div className="pb-4">
                <h3 className="text-2xl py-3 font-semibold">Button</h3>
                <SelectBox
                  value={values.positionButton}
                  onChange={handleChange}
                  name="positionButton"
                  options={["Bottom right", "Bottom left"]}
                  label={"Position"}
                />
              </div>
            </div>
            <div className="border-spacing-1 mb-4 grid md:grid-cols-2 grid-cols-1 gap-40 border-2 rounded-md p-4 shadow-sm">
              <div>
                <div className="pb-4">
                  <h3 className="text-2xl py-3 font-semibold">Brand</h3>
                  <div className="Callout ">
                    <div className="flex justify-between items-center">
                      <h3 className="py-3 text-lg font-semibold relative">
                        Callout
                      </h3>
                      <ToggleButton
                        value={toggleCallout}
                        onChange={() => setToggleCallout(!toggleCallout)}
                        name={"calloutToggle"}
                      />
                    </div>
                    <div className="flex gap-4 flex-col">
                      <div>
                        <InputBox
                          label={"Title"}
                          value={values.calloutTitle}
                          onchange={handleChange}
                          name={"calloutTitle"}
                          maxLength={30}
                        />
                      </div>
                      <div>
                        <InputBox
                          label={"Message"}
                          value={values.calloutMessage}
                          onchange={handleChange}
                          name={"calloutMessage"}
                          maxLength={30}
                        />
                      </div>
                    </div>
                    {toggleCallout ? (
                      <div className="md:hidden rounded-full border-2 w-fit px-3 py-2 shadow-lg mt-3">
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
                    ) : (
                      <div className="md:hidden rounded-full border-2 flex  justify-between ps-5 pe-1 py-2 shadow-lg mt-3">
                        <div>
                          <h1 className="text-black font-semibold">
                            👋Need Help?
                          </h1>
                          <h5 className="text-sm">
                            Click here and start chatting with us
                          </h5>
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
                    )}
                  </div>
                  <hr className="py-4" />
                  <div className="Color ">
                    <div className="flex justify-between items-center">
                      <h3 className="py-3 text-lg font-semibold relative">
                        Color
                      </h3>
                    </div>
                    <div className="flex gap-4 flex-col">
                      <div className="relative">
                        <span className="">
                          <input
                            className="absolute top-[9px] right-[10px] w-[1.4rem] h-[1.4rem] mt-1 bg-transparent"
                            value={colorString}
                            onChange={(e) => {
                              handleColorChange(e.target.value);
                            }}
                            type="color"
                          ></input>
                        </span>
                        <ColorInput
                          // name="color"
                          className="px-4"
                          value={colorString}
                          onchange={() => {}}
                        />
                      </div>

                      <div>
                        <InputBox
                          label={"Greetings"}
                          value={values.greetings}
                          onchange={handleChange}
                          name={"greetings"}
                          maxLength={255}
                        />
                        <p className="text-gray-600 text-sm">
                          Greetings will be the first message when customer
                          click bot,you can add some emoji 😊 to make greetings
                          better
                        </p>
                      </div>
                      <div>
                        <InputBox
                          label={"Shop Name"}
                          value={values.shopName}
                          onchange={handleChange}
                          name={"shopName"}
                          maxLength={40}
                        />
                      </div>
                    </div>
                    <div className="md:hidden block mt-3">
                      <div className="rounded-lg ">
                        <div
                          className="rounded-t-lg h-7"
                          style={{ backgroundColor: colorString }}
                        />
                        <div className="px-4 py-5">
                          <div className="flex items-end gap-3">
                            <div
                              className="p-2 rounded-sm"
                              style={{ backgroundColor: colorString }}
                            >
                              <PiRobotFill color="white" />
                            </div>
                            <div className="px-4 pb-5 pt-3 rounded-md bg-gray-200">
                              Hi there 👋
                              <br /> How can I help you today?
                            </div>
                          </div>
                        </div>
                        <div className=" flex justify-end">
                          <p
                            className="text-white py-3 px-1 rounded-md "
                            style={{ backgroundColor: colorString }}
                          >
                            Hello, how are you?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* for large screen */}
              <div className="md:block hidden">
                {toggleCallout ? (
                  <div className="rounded-full border-2 w-fit px-3 py-2 shadow-lg mt-32">
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
                ) : (
                  <div className="rounded-full border-2 flex w-80 justify-between ps-5 pe-1 py-2 shadow-lg mt-32">
                    <div>
                      <h1>{values.calloutTitle}</h1>
                      <h5 className="text-sm">{values.calloutMessage}</h5>
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
                )}

                <div className="mt-52">
                  <div className="rounded-lg w-3/4">
                    <div
                      className={` rounded-t-lg h-7`}
                      style={{ backgroundColor: colorString }}
                    />
                    {/* <div className="bg-[#000000] rounded-t-lg h-7" /> */}
                    <div className="px-4 py-5">
                      <div className="flex items-end gap-3">
                        <div
                          className={` p-2 rounded-sm`}
                          style={{ backgroundColor: colorString }}
                        >
                          {/* {console.log(colorString)} */}
                          <PiRobotFill color="white" />
                        </div>
                        <div className="px-4 pb-5 pt-3 rounded-md bg-gray-200">
                          {values.greetings}
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-end">
                      <p
                        className={`text-white py-3 px-1 rounded-md ]`}
                        style={{ backgroundColor: colorString }}
                      >
                        {/* <p className="text-white py-3 px-1 rounded-md bg-blue-500"> */}
                        Hello, how are you?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default BrandSetup;
