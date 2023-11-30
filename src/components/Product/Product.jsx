import React from "react";
import CheckBox from "../Buttons/CheckBox";

function Product() {
  return (
    <>
    
      <a
        href="#"
        className="flex flex-col items-center w-screen bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
            <div className=' ml-3 mr-3'> <CheckBox/> </div> 

        <img
          className="object-cover  w-28 m-3 rounded-t-lg h-13 md:h-10 md:w-14 md:rounded md:rounded-s-lg"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            BELL Wireless Bluetooth Headphone
          </h1>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </a>
      
    </>
  );
}

export default Product;
