import { Outlet } from "react-router-dom";
import { Navbar } from ".";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
