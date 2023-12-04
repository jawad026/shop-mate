/* eslint-disable react/no-unescaped-entities */
import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";
import ToggleButton from "../Buttons/ToggleButton";
import InputBox from "../common/InputBox/InputBox";
import SelectBox from "../common/SelectBox/SelectBox";
import { PiRobotFill } from "react-icons/pi";
import { Formik } from "formik";

const initialValues = {
  positionButton: '',
  calloutTitle: "👋Need Help?",
  calloutMessage: "Click here and start chatting with us",
  calloutToggle: false,
  colorToggle: false,
  color: "#8d3d80",
  greetings: "Hi there 👋How can I help you today?",
  shopName: "",
};

const BrandSetup = () => {

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
    console.log("Values:",values)
  }


  return (
    <div className=" text-gray-600">
      <div className="flex px-4 gap-3 justify-end py-6">
        <div className="px-5 text-gray-600">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm(values);
      }}>
{({ values, errors, handleBlur, handleChange, handleSubmit,resetForm }) => (
  <form onSubmit={handleSubmit}>
      <div className="flex px-4 gap-3 justify-end py-6">
        <SimpleButton text={'Reset'} type='button'/>
        <CheckOutButton type="submit" text={'Save Changes'} />
      </div>

      <div className="border-spacing-1 border-2 rounded-md p-4 mb-10 shadow-sm">
        <div className="pb-4">
          <h3 className="text-2xl py-3 font-semibold">Button</h3>
          <SelectBox
            value = {values.positionButton}
            onChange={handleChange}
            name="positionButton"
            options={["Bottom right", "Bottom left"]}
            label={"Position"}
          />
        </div>
      </div>


      <div className="border-spacing-1 mb-4 grid grid-cols-2 gap-40 border-2 rounded-md p-4 shadow-sm">
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
                <ToggleButton
                value={values.calloutToggle}
                onChange={()=>values.calloutToggle =! values.calloutToggle}
                name={"calloutToggle"} 
                />
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"Title"} 
                    value={values.calloutTitle}
                    onchange={handleChange}
                    name={"calloutTitle"} 
                  />
                </div>
                <div>
                  <InputBox label={"Message"} 
                  value={values.calloutMessage}
                  onchange={handleChange}
                  name={"calloutMessage"}
                  />
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
                <h3 className="py-3 text-lg font-semibold relative">Color</h3>
                <ToggleButton 
                  value={values.colorToggle}
                  onChange={()=>values.colorToggle =! values.colorToggle}
                  name={"colorToggle"} />
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <InputBox label={"Color"} type={"color"} 
                  value={values.color}
                  onchange={handleChange}
                  name={"color"}
                  />
                </div>
                <div>
                  <InputBox label={"Greetings"} 
                  value={values.greetings}
                  onchange={handleChange}
                  name={"greetings"} 
                  />
                  <p className="text-gray-600 text-sm">
                    Greetings will be the first message when customer click
                    bot,you can add some emoji 😊 to make greetings better
                  </p>
                </div>
                <div>
                  <InputBox label={"Shop Name"} 
                  value={values.shopName}
                  onchange={handleChange}
                  name={"shopName"} 
                  />
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
          <div className="mt-52">
            <div className="rounded-lg w-3/4">
              <div className="bg-blue-500 rounded-t-lg h-7" />
              <div className="px-4 py-5">
                <div className="flex items-end gap-3">
                  <div className="bg-blue-500 p-2 rounded-sm">
                    <PiRobotFill color="white" />
                  </div>
                  <div className="px-4 pb-5 pt-3 rounded-md bg-gray-200">
                    {values.greetings}
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
</form>
)}
      </Formik>
    </div>
    </div>
    </div>
  );
};

export default BrandSetup;
