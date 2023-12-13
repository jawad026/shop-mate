import InputBox from "../../components/common/InputBox/InputBox";
import Button from "../../components/Buttons/CheckOutButton";
import image from "../../assets/logo-full.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nevigate = useNavigate();
  const handleLogin = () => {
    nevigate("/shop");
  };
  return (
    <div className=" bg-opacity-[0.2] bg-bgImg bg-blue-100 bg-cover bg-black-500 h-screen flex items-center flex-col">
      <div className="max-w-[180px]">
        <img src={image} />
      </div>
      <div
        className=" text-[14px] text-center mt-2 max-h-fit p-[3rem] m-2
                 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className=" mb-3 text-[24px] font-500 tracking-tight text-black dark:text-white ">
          Connect To ChatBot
        </h5>
        <p className="mb-[3rem] font-normal text-gray-700 dark:text-gray-400">
          Choose your platform to get started
        </p>
        <div className="mb-[1.5rem]">
          <InputBox label={"Store Url"} />
        </div>
        <div className="mb-5 flex align-middle items-baseline justify-between">
          <p className="mb-[3rem] font-normal text-gray-700 dark:text-gray-400">
            Are you on Shopify?
          </p>
          <Button text={"Login"} onClick={handleLogin} />
        </div>
        <p className=" mt-[3rem] mb-3 font-normal text-gray-700 dark:text-gray-400">
          Start Using Spin Wheel To Get More Subscriber Today
        </p>
      </div>
      <div>
        <p className=" mt-[3rem] mb-1 font-normal text-[12px] text-black-700 dark:text-gray-400">
          Copyright 2021 Carecart
        </p>
      </div>
    </div>
  );
};

export default Login;
