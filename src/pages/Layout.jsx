import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar/Sidebar";
import MobileSidebar from "../components/common/Sidebar/MobileSidebar";
import Topbar from "../components/common/Topbar/Topbar";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  // console.log(isDrawerOpen);
  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <div className="fixed h-full z-20 hidden md:block">
        <Sidebar />
      </div>
      <div className="fixed h-full z-20 block md:hidden">
        <MobileSidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      </div>

      {/* Main Content Area */}
      <div className="w-screen md:ml-5">
        {/* Topbar */}
        <div className="fixed z-10  w-full">
          <Topbar set={openDrawer} />
        </div>

        {/* Other Components */}
        <div className="md:ml-[6rem] mx-5 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
