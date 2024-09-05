import { Link } from "react-router-dom";

export function SensitiveInfo() {
  return (
    <main className="sensitive-info">
      <h1>Sensitive Information (Protected)</h1>
      <p>This should be protected and not viewable unless authenticated</p>
      <Link to="../account">Account</Link>
      <Link to="../login">Back to Log in</Link>
    </main>
  );
}
