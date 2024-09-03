import { NavLink } from "react-router-dom";

export function NavLinks() {
  return (
    <nav className="nav-links">
      <NavLink to="/home-two">HomeTwo</NavLink>
      <NavLink to="/about-two">AboutTwo</NavLink>
      <NavLink to="/contact-two">ContactTwo</NavLink>
      {/* <NavLink
        to="/contact-two"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "test" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        ContactTwo
      </NavLink> */}
    </nav>
  );
}
