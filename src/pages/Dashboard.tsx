import { Link, Outlet } from "react-router-dom";
// import { Settings, Stats } from "../components";

export function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <Link to="/dashboard/stats">Stats</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet />
    </main>
  );
}
