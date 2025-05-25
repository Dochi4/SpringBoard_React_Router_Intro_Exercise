import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h1>CANDY! </h1>
      <Link to="/"> Return to VendingMachine </Link>
    </div>
  );
}

export default Candy;
