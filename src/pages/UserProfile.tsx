import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function UserProfile() {
  const [value, setValue] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <main className="user-profile">
      <h1>User Profile</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        navigate(`/user/${value}`);
      }}>
        <label htmlFor="set-id">Test different ids:</label>
        <input type="text" id="set-id" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <section>
        <p>Id: { id }</p>
        <p>Username</p>
        <p>Followers: 2</p>
        <p>Posts: 100</p>
      </section>
    </main>
  );
}
