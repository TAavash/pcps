import React from "react";

const EventHandling = ({onButtonClick}) => {


  return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mx-6 m-2 shadow" >
      Click Me
        </button>
    </div>
  );
};

export default EventHandling;
