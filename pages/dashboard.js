import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState({ users: {} });

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("dp_data") || "{}");
    setData(d);
  }, []);

  const users = data.users || {};

  return (
    <div style={{ padding: 20 }}>
      <h2>User Manager</h2>

      {Object.entries(users).map(([id, u]) => (
        <div key={id} style={{ border: "1px solid #333", padding: 10 }}>
          <b>{u.name}</b>
          <div>{id}</div>
          <div>{u.status}</div>
          <div>{u.expiry}</div>
        </div>
      ))}
    </div>
  );
}
