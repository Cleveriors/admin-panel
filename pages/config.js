import { useState, useEffect } from "react";

export default function Config() {
  const [cfg, setCfg] = useState({});

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("dp_data") || "{}");
    setCfg(d.app_status || {});
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Config</h2>

      <textarea
        value={cfg.message || ""}
        onChange={(e) => setCfg({ ...cfg, message: e.target.value })}
      />

      <button>Save</button>
    </div>
  );
}
