import CheckOutButton from "../common/Buttons/CheckOutButton";
import SimpleButton from "../common/Buttons/SimpleButton";

function MemberShipCard({ onClick, type, text, plan, subscription, icon }) {
  return (
    <>
      <div>
        <section className="bg-white ">
          <div className="">
            <div className="">
              <div className="flex flex-col  text-center">
                <div className=" flex justify-center">
                  <img
                    alt="team"
                    className=" w-16 h-16  bg-gray-100  rounded-full "
                    src={icon}
                  />
                </div>
                <div className="d-flex justify-content-center mt-10">
                  <label className="bg-white text-center text-2xl w-12 font-samibold py-2 px-3 cc_pro text-black shadow-xl">
                    {plan}
                  </label>
                </div>

                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl text-blue-gray-800 ">
                    <span className="text-sm text-gray-700 mb">$</span>
                    {subscription}
                  </span>
                </div>

                <ul
                  role="list"
                  className=" flex flex-col  mb-8  space-y-4 text-left text-blue-gray-700"
                >
                  <li className="flex  items-center space-x-3">
                    <span>Available 24/7, reply in up to 70 languages.</span>
                  </li>
                  <li className="">
                    <span>
                      Understands customer's intent, recommends 500 products
                      within the store.
                    </span>
                  </li>
                  <li className="">
                    <span>3,500k token/month</span>
                  </li>
                  <li className="">
                    <span>Premium support</span>
                  </li>
                </ul>
                {/* button */}

                <div>
                  <button
                    onClick={onClick}
                    type={type}
                    className=" h-12 w-full bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded"
                  >
                    Pick This Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MemberShipCard;
