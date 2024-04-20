import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#cce7e7] grid place-content-center space-y-4 py-14">
      <div>
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
    </div>
  );
};

export default Footer;
