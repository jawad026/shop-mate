/* eslint-disable react/prop-types */
import { FaBoxArchive } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
const MobileSidebar = ({ isDrawerOpen, closeDrawer }) => {
  return (
    <div>
      {isDrawerOpen && (
        <div className="drawer-container bg-white ">
          <div
            id="drawer-example"
            className="drawer-content"
            tabIndex="-1"
            aria-labelledby="drawer-label"
          >
            <button
              type="button"
              onClick={closeDrawer}
              className="drawer-close-btn"
            >
              <IoIosClose size={32} />
            </button>
            <div className="w-28 h-screen  shadow-md ">
              <div className="flex flex-col gap-3 items-center text-sm">
                <NavLink to={"/shop"}>
                  <div className="p-5 flex flex-col items-center mt-2">
                    <div className="icon">
                      <svg
                        width="40"
                        height="48"
                        viewBox="0 0 49 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.0007 3.77487e-05C21.0316 -0.00702484 17.1235 0.97705 13.631 2.86298C10.1386 4.74891 7.17225 7.477 5.00122 10.7997C7.54861 7.20144 11.1766 4.50872 15.3584 3.11255C19.5403 1.71638 24.0582 1.68943 28.2564 3.03561C32.4546 4.3818 36.1145 7.03104 38.7046 10.5987C41.2948 14.1664 42.6803 18.4667 42.6602 22.8754C42.51 28.2898 40.2536 33.432 36.3708 37.2086C32.4881 40.9851 27.2852 43.0981 21.8688 43.0981C16.4523 43.0981 11.2495 40.9851 7.36671 37.2086C3.48394 33.432 1.22754 28.2898 1.07733 22.8754V22.0454C1.01318 22.6947 0.987807 23.3471 1.00133 23.9994C1.00133 28.746 2.40887 33.3861 5.04595 37.3327C7.68303 41.2794 11.4312 44.3555 15.8165 46.1719C20.2018 47.9884 25.0273 48.4636 29.6827 47.5376C34.3382 46.6116 38.6144 44.3259 41.9708 40.9695C45.3272 37.6131 47.6129 33.3369 48.5389 28.6814C49.4649 24.026 48.9897 19.2006 47.1732 14.8152C45.3568 10.4299 42.2807 6.68174 38.334 4.04466C34.3873 1.40758 29.7473 3.77487e-05 25.0007 3.77487e-05Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M23.9491 36.6041C21.3243 36.6171 18.7469 35.9056 16.5005 34.5479C14.2541 33.1902 12.4259 31.239 11.2172 28.9091C10.0084 26.5792 9.46598 23.9609 9.64959 21.3425C9.83321 18.7241 10.7357 16.2072 12.2578 14.0688C13.7799 11.9304 15.8626 10.2534 18.2764 9.22254C20.6903 8.19164 23.3419 7.8468 25.9391 8.22597C28.5364 8.60513 30.9787 9.6936 32.9971 11.3716C35.0155 13.0495 36.5318 15.2519 37.3791 17.7362C36.1941 13.7131 33.5541 10.2751 29.9732 8.09189C26.3924 5.90865 22.127 5.13645 18.008 5.9257C13.889 6.71494 10.2112 9.00912 7.69102 12.3614C5.17081 15.7137 3.98862 19.884 4.3747 24.0601C4.76078 28.2363 6.6875 32.1192 9.77957 34.9526C12.8716 37.786 16.9077 39.3671 21.1016 39.3878C25.2955 39.4085 29.3469 37.8674 32.4669 35.0647C35.5868 32.262 37.5518 28.3983 37.9791 24.2261C37.5311 27.6364 35.8632 30.769 33.2839 33.0446C30.7047 35.3201 27.3886 36.5846 23.9491 36.6041Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M36.0964 14.8298C36.0964 14.8298 29.9084 17.4718 29.2964 29.3958H25.9824C25.9824 29.3958 27.3404 18.6798 36.0964 14.8298Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M21.4528 33.1695C22.2448 33.1695 22.8868 32.5275 22.8868 31.7355C22.8868 30.9435 22.2448 30.3015 21.4528 30.3015C20.6608 30.3015 20.0188 30.9435 20.0188 31.7355C20.0188 32.5275 20.6608 33.1695 21.4528 33.1695Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M27.2646 33.1695C28.0565 33.1695 28.6986 32.5275 28.6986 31.7355C28.6986 30.9435 28.0565 30.3015 27.2646 30.3015C26.4726 30.3015 25.8306 30.9435 25.8306 31.7355C25.8306 32.5275 26.4726 33.1695 27.2646 33.1695Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M20.773 20.2638C21.905 20.3398 22.585 20.2638 23.489 20.2638L24.6889 23.2077C26.0469 21.3957 27.2549 19.8078 28.5389 18.3018H18.887L19.641 29.2457H23.943L21.687 22.7537L20.773 20.2638Z"
                          fill="#1996FC"
                        ></path>
                        <path
                          d="M25.981 29.3216H29.3809L29.9089 21.2456C28.2313 23.7423 26.9092 26.4604 25.981 29.3216Z"
                          fill="#1996FC"
                        ></path>
                      </svg>
                    </div>
                    <div className="">CareCart</div>
                  </div>
                </NavLink>
                <NavLink to={"/shop"}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
