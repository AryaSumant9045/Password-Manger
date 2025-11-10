import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
      <div>
        <h1 className="text-1xl text-center">
          <span className="text-green-600"> &lt;</span>
          Pass
          <span className="text-green-600"> OP/&gt;</span>
        </h1>
      </div>
      <div className="flex">
        Created With <img src="/icons/love.png" alt="love" />
        by AryaSumant
      </div>
    </div>
  );
};

export default Footer;
