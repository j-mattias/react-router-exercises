import { Link } from "react-router-dom";

export function Step3() {
  return (
    <>
      <h2>Summary (Step 3)</h2>
      <section>
        <p>First name: Steve</p>
        <p>Last name: Kent</p>
        <p>Address: Someplace</p>
        <p>Username: SteveK</p>
      </section>
      <div className="nav-wrapper">
        <Link to="../step2">Back</Link>
        <Link to=".." relative="path">Submit</Link>
      </div>
    </>
  );
}
