import { useEffect, useState } from "react";

export default function Logs() {
  const [logs, setLogs] = useState({});

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("dp_data") || "{}");
    setLogs(d.logs || {});
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Logs</h2>

      {Object.entries(logs).map(([k, log]) => (
        <div key={k}>
          <b>{log.model}</b>
          <div>{log.android}</div>
          <div>{log.time}</div>
        </div>
      ))}
    </div>
  );
}
