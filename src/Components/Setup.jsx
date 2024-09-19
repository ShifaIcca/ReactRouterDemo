import React from "react";

const Setup = () => {
  return (
    <div className="h-screen w-full  text-white text-xl  flex justify-center flex-col ">
      <h1 className="font-bold text-2xl">
        Run the following command in your terminal ::
      </h1>
      <p>npm install react-router-dom</p>
      <p className="my-6">
        make sure you have the following peer dependencies installed:
        <li className="ml-5">react (&gt;=16.8.0)</li>
        <li className="ml-5">react-dom (&lt;=16.8.0)</li>
        </p>
      <p >
        you can check this dependencies by analyzing the <span className="bg-[#ffffff5e] rounded-md px-2 py-1">package.json</span> file. For
        detailed information visit ofiicial documantation
      </p>
    </div>
  );
};

export default Setup;
