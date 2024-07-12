import React from "react";

const CardComponent = () => {
  

  return (
    <>
      <div className="flex flex-wrap justify-around items-center my-2 ">
         
            <div className="max-w-sm rounded-lg w-full  overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover p-5 bg-cover rounded "
                src="https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="fashion beauty"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> Title</div>
                <p className="text-gray-700 text-base">Description</p>
              </div>
              <div className="px-6 py-4 text-left">
                <button className="bg-black text-white px-5 py-2 text-center">
                  Learn more..
                </button>
              </div>
            </div>
       
      
      </div>
    </>
  );
};

export default CardComponent;