import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import MainLogo from "../../../assets/main-logo.png";
const Sidebar = () => {
  return (
    <div className="w-28 h-screen  bg-white-500 shadow-md ">
      <div className="flex flex-col gap-3 items-center text-sm">
        <NavLink to={"/shop/home"}>
          <div className="p-5 flex flex-col items-center mt-2">

            <img src={MainLogo} alt="" className=" h-[4rem]"/>
            <div className="text-black font-bold mt-[-10px]">ShopMate</div>
          </div>
        </NavLink>
        <NavLink to={"/shop/home"}>
          <div className="p-5 flex flex-col items-center active:text-blue-500 hover:text-blue-500 gap-2">
            <div className="icon">
              <MdDashboard size={32} />
            </div>
            <div>DASHBOARD</div>
          </div>
        </NavLink>
        <NavLink to={"/shop/chatbot"}>
          <div className="p-5 flex flex-col items-center active:text-blue-500 hover:text-blue-500 gap-2">
            <div className="icon">
              <IoMdSettings size={32} />
            </div>
            <div className="">SETTING</div>
          </div>
        </NavLink>
        <NavLink to={"/shop/order"}>
          <div className="p-5 flex flex-col items-center active:text-blue-500 hover:text-blue-500 gap-2">
            <div className="icon">
              <FaBoxArchive size={32} />
            </div>
            <div className="">PRODUCT</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
