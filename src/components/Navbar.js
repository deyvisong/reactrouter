// 2 - links with react router
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/*<Link to="/">Home</Link>
      <Link to="/about">About</Link>*/}
      <NavLink
        to="/"
        // className={(isActive) => (isActive ? "is-active" : "not-active")}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
