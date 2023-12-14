import { RiLuggageCartLine, RiSendPlane2Line } from "react-icons/ri";
import CheckOutButton from "../Buttons/CheckOutButton";
import MyImage from "../../assets/something.gif";
import { FaHandPointDown } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { BiMessage } from "react-icons/bi";
const InstallationInstruction = () => {
  return (
    <>
      <div className="flex justify-center md:flex-col flex-col mt-10 gap-10">
        <div className="grid  md:grid-cols-2  md:gap-20 border border-gray-300 p-4 rounded-md pb-20">
          <div className="grid gap-4">
            <div className="flex md:flex-row flex-col gap-5">
              <div
                role="status"
                className="col-auto flex items-center justify-center h-56 w-64 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <RiLuggageCartLine size={40} />
                <span className="sr-only">Loading...</span>
              </div>
              <div className="w-full mt-3">
                <div className="">
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-6"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[360px]"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[250px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div>
                  <button className="bg-gray-300 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500 transition duration-150 ease-in-out py-2 px-4 rounded-full relative">
                    <span className="absolute inset-0 bg-gray-400 opacity-50 rounded-full"></span>
                    <div className="flex gap-3">
                      <span className="relative z-10">+</span>
                      <span className="relative z-10">1</span>
                      <span className="relative z-10">-</span>
                    </div>
                  </button>
                </div>
                <div className="flex gap-3 mt-3">
                  <button className="border-gray-400 border hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500 transition duration-150 ease-in-out py-2 px-4 rounded-full relative">
                    <span className="absolute inset-0 border-gray-400 opacity-50 rounded-full"></span>
                    <span className="relative z-10">Add to Cart</span>
                  </button>

                  <button className="bg-gray-300 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500 transition duration-150 ease-in-out py-2 px-4 rounded-full relative">
                    <span className="absolute inset-0 bg-gray-400 opacity-50 rounded-full"></span>
                    <span className="relative z-10">Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
              <div className="grid place-content-center">
                {" "}
                <div
                  role="status"
                  className="col-auto flex  items-center justify-center h-32 w-32 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                ></div>{" "}
                <div
                  role="status"
                  className="mt-2 max-w-sm animate-pulse flex items-center flex-col"
                >
                  <div className="h-3 bg-gray-200 rounded-md w-24 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] w-32 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-32 mb-2.5"></div>
                </div>
              </div>
              <div className="grid place-content-center">
                {" "}
                <div
                  role="status"
                  className="col-auto flex  items-center justify-center h-32 w-32 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                ></div>{" "}
                <div
                  role="status"
                  className="mt-2 max-w-sm animate-pulse flex items-center flex-col"
                >
                  <div className="h-3 bg-gray-200 rounded-md w-24 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] w-32 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-32 mb-2.5"></div>
                </div>
              </div>
              <div className="grid place-content-center">
                {" "}
                <div
                  role="status"
                  className="col-auto flex  items-center justify-center h-32 w-32 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                ></div>{" "}
                <div
                  role="status"
                  className="mt-2 max-w-sm animate-pulse flex items-center flex-col"
                >
                  <div className="h-3 bg-gray-200 rounded-md w-24 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] w-32 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-32 mb-2.5"></div>
                </div>
              </div>
              <div className="grid place-content-center">
                {" "}
                <div
                  role="status"
                  className="col-auto flex  items-center justify-center h-32 w-32 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                ></div>{" "}
                <div
                  role="status"
                  className="mt-2 max-w-sm animate-pulse flex items-center flex-col"
                >
                  <div className="h-3 bg-gray-200 rounded-md w-24 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] w-32 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-32 mb-2.5"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className="max-w-md w-full  bg-white rounded-lg shadow-md overflow-hidden relative">
              {/* <!-- Header --> */}
              <div className="bg-blue-700 text-white px-4 py-2 flex justify-between items-center">
                <span className="text-lg font-semibold">Chat with Support</span>
                <button className="focus:outline-none">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* <!-- Profile and Message Box --> */}
              <div className="p-4">
                {/* <!-- Profile Skeleton --> */}
                <div className="grid grid-flow-col space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>

                  {/* <!-- Message Box --> */}
                  <div className="bg-gray-200 p-4 rounded-md">
                    <div className="font-semibold mb-2">John Doe</div>
                    <div className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>

                {/* <!-- Action Buttons --> */}
                <div className="flex items-end justify-end space-x-4 mt-4">
                  <button className="border-blue-500  text-blue-500 border px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                    Shop Now
                  </button>
                  <button className="border-blue-500  text-blue-500 border px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                    Need Help
                  </button>
                </div>
              </div>

              {/* <!-- Input Box --> */}
              <div className="w-full border-t border-gray-300 y-4">
                <div className="flex gap-1 items-center border-t border-gray-300 p-4">
                  <button className=" text-white px-1 py-2 rounded-md  focus:outline-none mr-2">
                    <GrEmoji color="grey" size={20} />
                  </button>
                  <div className="flex-1 pr-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button className=" text-white px-1 py-2 rounded-md  focus:outline-none">
                    <RiSendPlane2Line color="grey" size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute md:right-52 right-14  flex mt-3  justify-end bg-blue-700 p-4 rounded-full">
              <BiMessage color="white" size={20} />
            </div>
            <div></div>
          </div>
        </div>

        <div className="border rounded-md my-5 p-4">
          <div className="my-3">
            <h1 className="font-semibold text-xl text-black">
              Select a theme to add chat bubble
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="border rounded-md px-6 py-5 border-gray-300">
              <p>
                Click Green Button <FaHandPointDown />{" "}
              </p>
              <CheckOutButton text={"PREVIEW AND ACTIVATE BOT IN THEME"} />
            </div>
            <div className="border rounded-md px-6 py-5 border-gray-300">
              <p>In theme editor toggle ON ShopMate App embed</p>
              <p>Press Save button</p>
            </div>
          </div>
        </div>

        {/* add video */}

        <div className="flex justify-center ">
          <img src={MyImage} alt="Loading..." />
        </div>
      </div>
    </>
  );
};

export default InstallationInstruction;
