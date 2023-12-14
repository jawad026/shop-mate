import InputBox from "../../components/common/InputBox/InputBox";
import Button from "../../components/Buttons/CheckOutButton";
import image from "../../assets/logo-full.png";
import carecartLogo from "../../assets/carecart_logo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nevigate = useNavigate();
  const handleLogin = () => {
    nevigate("/shop/home");
  };
  return (
    <>
    <div className="bg-opacity-[0.2] bg-blue-100 bg-cover bg-black-500 h-screen flex items-center flex-col">
      <div className=" mt-12 lg:mt-0 max-w-[250px]">
        <img src={image} />
      </div>
      <div
        className="text-[14px] text-center mt-2 lg:max-h-fit sm:max-h-[70vh] p-[3rem] pb-1 m-2
        sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/3 
         bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-3 text-[18px] sm:text-[24px] font-500 tracking-tight text-black dark:text-white ">
          Connect To ShopMate
        </h5>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
        Choose your shop to get started:
        </p>
        <div className="sm:mb-[1.5rem] mb-[0.5rem]">
          <InputBox label={"Store Url"} />
        </div>
        <div className="mb-5 flex align-middle items-baseline justify-between">
          <p className="md:mb-[6rem] md:pb-3 font-normal text-gray-700 dark:text-gray-400">
            Are you on Shopify?
          </p>
          <Button text={"Login"} onClick={handleLogin} />
        </div>
        <p className=" lg:mt-[3rem] md:mb-3 font-normal text-gray-700 dark:text-gray-400">
        Start Using ShopMate Today
        </p>
      </div >


      <div className="flex justify-center pt-10">
      <p className="absolute bottom-0 sm:mb-0 mb-20 font-normal text-[12px] text-black-700 dark:text-gray-400  md:mr-[-83px] md:right-1/2">
            Copyright 2021 Carecart
      </p>
    <div className="absolute bottom-0 sm:mb-0 mb-5 sm:right-0 ">
      <p className="   font-normal text-[12px] text-black-700 dark:text-gray-400 first-letter:right-0">
        Powered By
      </p>
    <div className=" flex justify-center align-middle items-center">
        <img src = {carecartLogo} alt=""/>
    </div>
    </div>
  </div>


    </div>


  {/* <div>
      <p className="  font-normal text-[12px] text-black-700 dark:text-gray-400 absolute mr-[-83px] right-1/2">
            Copyright 2021 Carecart
      </p>
    <div className="absolute lg:right-0 right-1/2">
      <p className="   font-normal text-[12px] text-black-700 dark:text-gray-400 first-letter:right-0">
        Powered By
      </p>
    <div className=" flex justify-center align-middle items-center">
        <img src = {carecartLogo} alt=""/>
    </div>
    </div>
  </div> */}

    </>
  );
};

export default Login;
