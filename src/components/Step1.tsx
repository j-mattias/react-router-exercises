import { Link } from "react-router-dom";

export function Step1() {
  return (
    <>
      <h2>Personal (Step 1)</h2>
      <form className="signup-form step1">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Address" />
      </form>
      <Link to="step2">Next</Link>
    </>
  )
}
