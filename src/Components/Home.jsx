import React from "react";

const Home = ({ head, p1, p2, children}, ) => {
  return (
    <div className="h-screen w-full  bg-gradient-to-b from-blue-950 to-blue-600 flex gap-32">
      <div id="home" className="h-screen w-96 ">
        <h1 className="text-white font-bold pl-5 pt-6 text-6xl">{head}</h1>
      </div>
      <div className="h-screen w-[50%] gap-10 text-white text-xl flex flex-col items-center justify-center">
        {
          children?children:<><p>{p1}</p> <p>{p2}</p></>
        }
      </div>
    </div>
  );
};

export default Home;
