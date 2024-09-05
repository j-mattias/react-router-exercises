import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

// https://www.robinwieruch.de/react-router-private-routes/
export function ProtectedRoute() {
  const { auth } = useAuthContext();

  return auth ? <Outlet /> : <Navigate to="/login" replace />
}
