import React from "react";
import GreetComponent from "./greetComponent";

const GreetRamComponent = () => {
  const person = [
    {
      name: "ram",
      caste: "yadav",
    },
    {
      name: "shyam",
      caste: "yadav",
    },
  ];

  return <GreetComponent name="ram" caste="yadav" personObj={person} />;
};

export default GreetRamComponent;
