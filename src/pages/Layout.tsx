import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="layout">
      <h1>Layout</h1>
      <nav className="nav-layout">
        <NavLink to="one">One</NavLink>
        <NavLink to="two">Two</NavLink>
        <NavLink to="three">Three</NavLink>
      </nav>
      <Outlet />
    </main>
  )
}
