/* eslint-disable react/prop-types */
import { useState } from "react";
import AutoProductSelection from "../../components/Auto Product Selection/AutoProductSelection";
import CustomSelection from '../../components/CustomSelection/CustomSelection'
import InputBox from "../../components/common/InputBox/InputBox";
import { CiSearch } from "react-icons/ci";

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

const ProductPage = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
    <h1 className="text-[36px]">Orders</h1>
    <div className="pt-3 mb-5">
    <InputBox width='30rem' label={<div className="flex justify-start text-center"><CiSearch/>&nbsp;&nbsp; Search by Product</div> }/>
    </div>
    <div className="shadow-xl border border-color: black-800 text-sm font-medium text-start  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <Tab
          label="Auto Product Selection"
          active={activeTab === "tab1"}
          onClick={() => handleTabClick("tab1")}
        />
        <Tab
          label="Custom Product Selection"
          active={activeTab === "tab2"}
          onClick={() => handleTabClick("tab2")}
        />
      </ul>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "tab1" && (
          <div>
            <AutoProductSelection />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <CustomSelection />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductPage;
