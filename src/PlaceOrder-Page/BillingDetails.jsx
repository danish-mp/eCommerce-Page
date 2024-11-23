import React from "react";

function BillingDetails() {
  const handleSubmit = () => {
    // console.log("Hello");
  };

  return (
    <div className="flex gap-x-60 pl-40 pr-40 p-20">
      <div className="w-96">
        <h2 className="text-3xl font-semibold mb-6">Billing details</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  className="p-1 outline rounded mt-2 outline-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  className="p-1 outline rounded mt-2 outline-1"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Company Name (optional)</label>
              <input
                className="p-1 outline rounded mt-2 outline-1"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label>Country / Region</label>
              <select className="p-1 outline rounded outline-1 mt-2">
                <option value="india">India</option>
                <option value="sri Lanka">Sri Lanka</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>
                <option value="france">France</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Street address</label>
              <input
                className="p-1 outline rounded mt-2 outline-1"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label>Town / City</label>
              <input
                className="p-1 outline rounded mt-2 outline-1"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label>Province</label>
              <select className="p-1 outline rounded mt-2 outline-1">
                <option value="western province">Western Province</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>ZIP code</label>
              <input
                className="p-1 outline rounded mt-2 outline-1 outline-gray-500"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label>Phone</label>
              <input
                className="p-1 outline rounded mt-2 outline-1 outline-gray-500"
                type="number"
              />
            </div>

            <div className="flex flex-col">
              <label>Email address</label>
              <input
                className="p-1 outline rounded mt-2 outline-1 outline-gray-500"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                placeholder="Additional information"
                className="p-2 outline rounded mt-6 outline-1 outline-gray-500"
                type="text"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      <div className="w-auto">
        <div className="flex justify-between">
          <h3 className="text-x font-medium">Product</h3>
          <h3 className="text-x font-medium">Subtotal</h3>
        </div>

        <div className="flex justify-between mt-2 text-slate-500">
          <p>Asgaard sofa x 1</p>
          <p>Rs. 250,000.00</p>
        </div>

        <div className="flex justify-between text-slate-500">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>

        <div className="flex mt-2 justify-between">
          <p>Total</p>
          <p className="text-orange-400 font-mono mb-4">Rs. 250,000.00</p>
        </div>

        <hr />

        <p className="mt-2">Direct Bank Transfer</p>
        <p className="mt-2 text-slate-500">
          Make your payment directly into our bank account . Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>

        <div className="m-4">
          <div className="flex items-center space-x-2 gap-3">
            <input
              id="option1"
              name="group"
              type="radio"
              className="form-radio h-3 w-3 text-blue-500"
            />
            <label for="option1" className="text-gray-500">
              Direct Bank Transfer
            </label>
          </div>

          <div className="flex items-center space-x-2 gap-3">
            <input
              id="option2"
              name="group"
              type="radio"
              className="form-radio h-3 w-3 text-blue-500"
            />
            <label for="option2" className="text-gray-500">
              Cash On Delivery
            </label>
          </div>
        </div>

        <p className="mt-2 text-slate-500">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="font-medium  text-gray-900">privacy policy.</span>
        </p>

        <div className="flex mt-4 justify-center">
          <button
            type="button"
            className="px-8 py-1 bg-white text-gray-800 rounded outline outline-1"
            onClick={() => alert("Hello")}
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingDetails;
