import CheckOutButton from "../Buttons/CheckOutButton";
import SimpleButton from "../Buttons/SimpleButton";
import InputBox from "../common/InputBox/InputBox";
import { Formik } from "formik";

const initialValues = {
  botName: "ChatBot",
  storeIntro: "",
  discount: "",
  customerEmail: "",
};

const BasicSetup = () => {

  // const handleCancel = (event, values) => {
  //   event.preventDefault();
  //   // values.botName = "";
    
  //   // values.botName = "";
  // }
 
  const submitForm = async (values) => {
    //   await axios.post("/api", {
    //     botName: values.botName,
    //     storeIntro: values.storeIntro,
    //     discount: values.discount,
    //     customerEmail: values.customerEmail,
    // })
    // .then((res) => console.log("Basic Page Submission done"));
    console.log("Values:",values)
  }

  return (
    <div className=" px-5">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit,resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex px-4 gap-3 justify-end py-6">
              <div onClick={resetForm}>
          <SimpleButton text={'Reset'} type='button' />
        </div>
              <CheckOutButton type="submit" text={"Save Changes"} />
            </div>

            <div className="border-spacing-1 border-2 rounded-md p-4 mb-10 shadow-sm text-start">
              <div className="pb-4">
                <InputBox 
                value={values.botName}
                onchange={handleChange}
                name={"botName"} 
                label={"BotName"} 
                />
                <p className="text-gray-600 text-sm">
                  This section gives you Give a name to bot and your customer
                  will
                </p>
              </div>

              <InputBox 
              onchange={handleChange}
              value={values.storeIntro}
              name={"storeIntro"} 
              label={"Store Introduction"} />
              <p className="text-gray-600 text-sm">
                Our bot will automatically learn your store policy,so add most
                important things here and bot will learn it with high priority
              </p>
            </div>

            <div className="border-spacing-1 border-2 rounded-md p-4 shadow-sm text-start">
              <div className="pb-4">
                <InputBox 
                onchange={handleChange}
                value={values.discount}
                name={"discount"} 
                label={"Discount"} />
                <p className="text-gray-600 text-sm">
                  If customer intends to buy, our bot will provide a discount
                  code to encourage placing an order.
                </p>
              </div>

              <InputBox
              onchange={handleChange}
              value={values.customerEmail}
                name={"customerEmail"}
                label={"Customer service supervisor's email"}
              />
              <p className="text-gray-600 text-sm">
                When our bot determines that the customer needs more assistance,
                or when the customer actively requests to escalate the issue to
                a higher level of customer service, we will send an email to the
                address provided here, which will contain the chat context and
                relevant information about the customer.
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BasicSetup;
