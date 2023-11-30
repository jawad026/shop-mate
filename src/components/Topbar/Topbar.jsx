import { FaBell } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import Drawer from "../Drawer/Drawer";
const Topbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-end w-full pe-3 py-4">
        <div className="flex items-center ">
          <div className="px-3 relative">
            <FaBell size={24}></FaBell>
            <span className="Highlight"></span>
          </div>
          <div className="px-5">
            <IoIosHelpCircle size={24} />
          </div>
        </div>
        <div className=" border-l-2 px-5">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
