import React from "react";
import Comp from "./Comp";
import Sly from "./Sly";

const Thetwo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Comp toggle={toggle} />
      <Sly isOpen={isOpen} toggle={toggle} />
      
    </div>
  );
};

export default Thetwo;

