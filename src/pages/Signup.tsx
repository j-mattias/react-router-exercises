import { NavLink, Outlet } from "react-router-dom";

export function Signup() {
  const disableClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
  };

  return (
    <main className="signup">
      <h1>Signup</h1>
      <div className="breadcrumbs">
        <NavLink to="." end onClick={(e) => disableClick(e)}>
          Step 1
        </NavLink>
        <NavLink to="step2" onClick={(e) => disableClick(e)}>
          Step 2
        </NavLink>
        <NavLink to="step3" onClick={(e) => disableClick(e)}>
          Step 3
        </NavLink>
      </div>
      <Outlet />
    </main>
  );
}
