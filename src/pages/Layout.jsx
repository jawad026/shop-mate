import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="w-screen">
        {/* Topbar */}
        <Topbar />

        {/* Other Components */}
        <div className="mx-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
