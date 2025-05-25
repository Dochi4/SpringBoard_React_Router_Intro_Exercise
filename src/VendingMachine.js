import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./VendingItems/Home";
import Soda from "./VendingItems/Soda";
import Candy from "./VendingItems/Candy";
import Chips from "./VendingItems/Chips";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
