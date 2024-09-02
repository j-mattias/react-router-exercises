import { useState } from "react";
import { Navigate } from "react-router-dom";

// interface IAccountProps {
//   auth: boolean;
// }
// { auth }: IAccountProps
export function Account() {

  const [auth, setAuth] = useState<boolean>(false);

  return (
    <>
      {!auth && <Navigate to="/login" replace={true} />}
      <main className="account">
        <h1>Secret Account Info</h1>
        <ul>
          <li>Account id: 41299</li>
          <li>Password: *******</li>
        </ul>
      </main>
    </>
  );
}
