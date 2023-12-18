import MemberShipCard from "../MemberShipCard/MemberShipCard";
import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";

function MemberShip() {
  return (
    <>
      <section className="flex flex-col justify-center relative max-w-6xl min-h-screen px-4 mt-0 mx-auto sm:px-6">
        <div className="flex flex-wrap  justify-center absolute top-10 ">
          <div className="w-full max-w-full  sm:w-2/3 px-4 lg:w-1/3 flex flex-col  ">
            <div className="flex  shadow-lg ">
              <div className="flex flex-col justify-between px-4 py-6 border ">
                <MemberShipCard
                  plan={"Pro"}
                  subscription={"19.9/month"}
                  icon={
                    "https://thumbs.dreamstime.com/z/nuts-seeds-circle-shape-almonds-hazelnuts-raisins-pumpkin-raw-isolated-white-background-46084299.jpg?w=768"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-full mb-8 sm:w-2/3 px-4 lg:w-1/3 flex flex-col  ">
            <div className="flex shadow-lg ">
              <div className="flex flex-col justify-between px-4 py-6 border ">
                <MemberShipCard
                  plan={"Pro Plus"}
                  subscription={"69.9/month"}
                  icon={
                    "https://thumbs.dreamstime.com/z/necklace-red-yellow-glass-23983956.jpg?w=768"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-full mb-8 sm:w-2/3 px-4 lg:w-1/3 flex flex-col">
            <div className="flex  shadow-lg">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 border ">
                <MemberShipCard
                  plan={"Pro Max"}
                  subscription={"78.6/month"}
                  icon={
                    "https://thumbs.dreamstime.com/b/moon-cake-21011861.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberShip;