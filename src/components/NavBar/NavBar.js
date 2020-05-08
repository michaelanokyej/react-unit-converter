import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navBar">
    <Link to={`/`}>
      <img src="homeIcon.png" alt="home" className="navImage" />
    </Link>
  </div>
  )
}

export default Nav;