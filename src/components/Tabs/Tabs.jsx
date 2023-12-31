/* eslint-disable react/prop-types */
import { useState } from "react";
import BasicSetup from "./BasicSetup";
import BrandSetup from "./BrandSetup";
import InstallationInstruction from "./InstallationInstruction";
import MemberShip from "./MemberShip";
import Faq from "./Faq";

const Tab = ({ label, active, onClick }) => {
  return (
    <li className="me-2">
      <a
        href="#"
        className={`inline-block p-4 ${
          active
            ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        }`}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </a>
    </li>
  );
};

const SettingTabs = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="text-sm font-medium text-start  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px border-b-[1px] border-gray-400">
        <Tab
          label="Basic Setup"
          active={activeTab === "tab1"}
          onClick={() => handleTabClick("tab1")}
        />
        <Tab
          label="Bot Setup"
          active={activeTab === "tab2"}
          onClick={() => handleTabClick("tab2")}
        />
        <Tab
          label="Installation Instructions"
          active={activeTab === "tab4"}
          onClick={() => handleTabClick("tab4")}
        />
           <Tab
          label="Membership"
          active={activeTab === "tab5"}
          onClick={() => handleTabClick("tab5")}
        />
         <Tab
          label="FAQ"
          active={activeTab === "tab6"}
          onClick={() => handleTabClick("tab6")}
        />
      </ul>

      {/* Tab Content */}
      <div className="mt-1">
        {activeTab === "tab1" && (
          <div>
            <BasicSetup />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <BrandSetup />
          </div>
        )}
        {activeTab === "tab4" && (
          <div>
            <InstallationInstruction />
          </div>
        )}
        {activeTab === "tab5" && (
          <div>
            <MemberShip />
          </div>
        )}
             {activeTab === "tab6" && (
          <div>
            <Faq />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingTabs;