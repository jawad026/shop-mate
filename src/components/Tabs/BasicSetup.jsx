import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";
import InputBox from "../common/InputBox/InputBox";

const BasicSetup = () => {
  return (
    <div className=" px-5">
      <div className="flex px-4 gap-3 justify-end py-6">
        <SimpleButton />
        <CheckOutButton text={'Save Changes'} />
      </div>
      <div className="border-spacing-1 border-2 rounded-md p-4 mb-10 shadow-sm text-start">
        <div className="pb-4">
          <InputBox label={"BotName"} />
          <p className="text-gray-600 text-sm">
            This section gives you Give a name to bot and your customer will
          </p>
        </div>
        <InputBox label={"Store Introduction"} />
        <p className="text-gray-600 text-sm">
          Our bot will automatically learn your store policy,so add most
          important things here and bot will learn it with high priority
        </p>
      </div>
      <div className="border-spacing-1 border-2 rounded-md p-4 shadow-sm text-start">
        <div className="pb-4">
          <InputBox label={"Discount"} />
          <p className="text-gray-600 text-sm">
            If customer intends to buy, our bot will provide a discount code to
            encourage placing an order.
          </p>
        </div>
        <InputBox label={"Customer service supervisor's email"} />
        <p className="text-gray-600 text-sm">
          When our bot determines that the customer needs more assistance, or
          when the customer actively requests to escalate the issue to a higher
          level of customer service, we will send an email to the address
          provided here, which will contain the chat context and relevant
          information about the customer.
        </p>
      </div>
    </div>
  );
};

export default BasicSetup;
