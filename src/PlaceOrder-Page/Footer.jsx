import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className="w-full h-40 bg-amber-100 flex justify-evenly items-center">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium">High Quality</h3>
            <p>crafted from top materials</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>

      <div className="flex justify-around mb-6 mt-6">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-medium">Furino.</h2>
          <p className="text-slate-600">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-slate-600">Links</p>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-slate-600">Help</p>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-slate-600">Newsletter</p>

          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-y-2 outline-lime-600"
            />
            <button type="button" className="py-1 border-b-2 border-gray-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <hr />

      <p className="ml-28 p-10">2023 furino. All rights reverved</p>
    </>
  );
}

export default Footer;
