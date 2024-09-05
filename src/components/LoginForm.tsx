import { useAuthContext } from "../contexts/AuthContext";

export function LoginForm() {
  const { auth, setAuth } = useAuthContext();

  return (
    <button onClick={() => setAuth((a) => !a)}>{auth ? "Log out" : "Log in"}</button>
  );
}
