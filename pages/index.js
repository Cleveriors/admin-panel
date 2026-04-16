import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [servers, setServers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setServers(JSON.parse(localStorage.getItem("dp_db_list") || "[]"));
  }, []);

  const addDB = () => {
    const name = prompt("Nama DB");
    let url = prompt("Firebase URL");

    if (!url) return;
    if (!url.startsWith("http")) url = "https://" + url;

    const list = [...servers, { name, url }];
    localStorage.setItem("dp_db_list", JSON.stringify(list));
    setServers(list);
  };

  const connect = async (url) => {
    try {
      const res = await fetch(url + "/.json");
      const data = await res.json();

      localStorage.setItem("dp_url", url);
      localStorage.setItem("dp_data", JSON.stringify(data));

      router.push("/dashboard");
    } catch {
      alert("Connection Failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel by Cleverior</h1>

      {servers.map((s, i) => (
        <div key={i} onClick={() => connect(s.url)}>
          {s.name}
        </div>
      ))}

      <button onClick={addDB}>+ Add Database</button>
    </div>
  );
}
