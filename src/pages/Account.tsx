import { Link } from "react-router-dom";

export function Account() {
  return (
    <>
      <main className="account">
        <h1>Secret Account Info (Protected)</h1>
        <ul>
          <li>Account id: 41299</li>
          <li>Password: *******</li>
        </ul>
        <Link to="../sensitive-info">Sensitive Info</Link>
        <Link to="../login">Back to Log in</Link>
      </main>
    </>
  );
}
