import { Navigate } from "react-router-dom";

export function OldHome() {
  return (
    <main className="old-home">
      <h1>This is the old home page</h1>
      {/* https://reactrouter.com/en/main/components/navigate */}
      <Navigate to="/" replace={true} />
    </main>
  );
}
