import CheckOutButton from "../common/Buttons/CheckOutButton";
import SimpleButton from "../common/Buttons/SimpleButton";
import RadioButton from "../common/Buttons/RadioButton";

const ProductSetup = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex px-4 gap-3 justify-end py-6">
          <SimpleButton text={"Reset"} />
          <CheckOutButton text={"Save Changes"} />
        </div>
      </div>
      <div
        className=" w-[75vw]
        text-[14px] mt-2 max-h-fit p-[3rem] 
        m-2 bg-white border border-gray-200 rounded-lg 
        shadow dark:bg-gray-500 dark:border-gray-700"
      >
        <h5 className=" mb-3 text-[24px] font-bold tracking-tight text-black dark:text-white ">
          Product Setup
        </h5>

        <p className=" font-bold text-[16px] text-black-700 dark:text-gray-400 mb-2">
          Set the products you want bot to recommend
        </p>

        <div className="flex">
          <RadioButton />
          <p className="font-normal text-black-500 dark:text-gray-400 pl-4 pt-1 mb-1">
            Recommend all products
          </p>
        </div>
        <p className="font-normal text-[#7B7B7B] dark:text-gray-400 pl-4 mb-4">
          our chat bot will learn all products as recommended products. (Product
          limit:500)
        </p>

        <div className="flex">
          <RadioButton />
          <p className="font-normal text-black-00 dark:text-gray-400 pl-4 pt-1 mb-1">
            Select recommended products one by one
          </p>
        </div>
        <p className="font-normal text-[#7B7B7B] dark:text-gray-400 pl-4 mb-4">
          if you want to recommend more than (Product limit:500) products, email
          us heicarbook@gmail.com for help
        </p>
      </div>
    </div>
  );
};

export default ProductSetup;
