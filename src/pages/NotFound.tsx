import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main>
      <h1>Page not found (404)</h1>
      <Link to="/">Go Home</Link>
    </main>
  )
}
