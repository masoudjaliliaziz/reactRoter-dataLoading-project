import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}>Fast react pizza Co.</Link>
      <p>masoud</p>
    </header>
  );
}

export default Header;
