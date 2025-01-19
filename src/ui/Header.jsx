import React from "react";
import { Link } from "react-router-dom";
import SearchOredr from "../features/order/SearchOredr";

function Header() {
  return (
    <header>
      <Link to={"/"}>Fast react pizza Co.</Link>
      <SearchOredr />
      <p>masoud</p>
    </header>
  );
}

export default Header;
