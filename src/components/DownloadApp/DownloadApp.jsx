import React from "react";
import phone from "../../assets/phone.png";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";

const DownloadApp = () => {
  return (
    <div className="bg-[#FFF7E2] text-start">
      <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 py-2">
        <div className="w-5/6 mx-auto my-auto">
          <h1 className="text-3xl md:text-4xl capitalize font-semibold text-[#3A643B]">
            Amrutam home App{" "}
          </h1>
          <p className="my-4 text-[#676767]">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <h3 className="text-black font-semibold text-xl md:text-2xl capitalize mb-4">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe
          </h3>
          <div className="flex space-x-4">
            <img src={playstore} alt="" width={160} />
            <img src={appstore} alt="" width={160} />
          </div>
        </div>
        <div>
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
