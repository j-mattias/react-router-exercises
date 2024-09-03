import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/account">Account</Link>
      <Link to="/user">Profile</Link>
      <Link to="/old-home">Old Home</Link>
      <Link to="/layout">Layout</Link>
    </nav>
  );
}
