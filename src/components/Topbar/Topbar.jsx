/* eslint-disable react/prop-types */
import Drawer from "../Drawer/Drawer";
import { FaBars } from "react-icons/fa6";
const Topbar = ({ set }) => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between md:justify-end w-full pe-3 py-4">
        <div className="md:hidden block px-4">
          <FaBars onClick={set} />
        </div>
        <div className="w-full flex justify-end">
          <div className=" border-l-2 px-5">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
