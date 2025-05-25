import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>VendingMachine Home!</h1>
      <p>
        <Link to="/soda">GET SODA </Link>
      </p>
      <p>
        <Link to="/candy">GET CANDY </Link>
      </p>
      <p>
        <Link to="/chips"> GET ChIPS </Link>
      </p>
    </div>
  );
}

export default Home;
