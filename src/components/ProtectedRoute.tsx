import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// https://www.robinwieruch.de/react-router-private-routes/
export function ProtectedRoute() {
  const [auth, setAuth] = useState<boolean>(false);

  return auth ? <Outlet /> : <Navigate to="/login" replace />
}
