import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#cce7e7] p-2 grid place-content-center space-y-4 py-14 ">
      <div className="md:hidden">
        <h1 className="text-[#3A643B] font-semibold text-xl">Get in touch</h1>
        <p className="text-[#474747]">support@amrutam.co.in</p>
        <p className="text-[#474747]">Amrutam Pharmaceuticals Pvt Ltd.,</p>
        <p className="text-[#474747]">chitragupt ganj, Nai Sadak, Lashkar, </p>
        <p className="text-[#474747]"> Gwalior - 474001 </p>
        <p className="text-[#474747]"> +91 9713171999</p>
      </div>
      <div>
        <h1 className="text-[#3A643B] font-semibold text-xl">Information</h1>
        <ul className="text-[#474747]">
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Privacy Policy for Mobile Apps</li>
          <li>Shipping and Returns Policy</li>
          <li>International Delivery</li>
          <li>For Businesses, Hotels and Resorts</li>
        </ul>
      </div>
      <div className="md:hidden">
        <h1 className="text-[#3A643B] font-semibold text-xl mb-3">
          Subscribe to our Newsletter and join Amrutam Family today!
        </h1>

        <form className="w-11/12 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900   rounded-lg "
              placeholder=""
              required
            />
            <button
              type="submit"
              className="text-white bg-gray-900 mt-1 rounded-full px-6 py-1 absolute end-2.5 bottom-2.5 bg-slate-900 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
