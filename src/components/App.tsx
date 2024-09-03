import { Outlet } from "react-router-dom";
import { Navbar, NavLinks } from ".";

export function App() {

  return (
    <>
      <Navbar />
      <NavLinks />
      <Outlet />
    </>
  );
}
