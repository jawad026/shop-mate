import { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-whtie">
      <button
        id="dropdownAvatarNameButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center relative text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600  md:me-0 focus:ring-4 focus:ring-gray-100 "
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src="/vite.svg"
          alt="user photo"
        />
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownAvatarName"
          className="z-20 absolute right-2 mt-0.5  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div className="font-medium ">Pro User</div>
            <div className="truncate">name@flowbite.com</div>
          </div>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
