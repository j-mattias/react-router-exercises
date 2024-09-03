import { Link } from "react-router-dom";

export function Step2() {
  return (
    <>
      <h2>Account (Step 2)</h2>
      <form className="signup-form step2">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat password" />
      </form>
      <div className="nav-wrapper">
        <Link to="..">Back</Link>
        <Link to="../step3">Next</Link>
      </div>
    </>
  );
}
