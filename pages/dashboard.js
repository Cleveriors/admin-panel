
import {useEffect,useState} from "react";
import {listenRealtime} from "../lib/firebase";

export default function Dashboard(){
 const [data,setData]=useState({users:{},admins:{}});

 useEffect(()=>{
  listenRealtime(d=>d&&setData(d));
 },[]);

 const role="admin"; // demo role

 return(
  <div className="page">
   <h2>Dashboard ({role})</h2>

   {Object.entries(data.users||{}).map(([id,u])=>(
    <div key={id} className="card">
      <b>{u.name}</b>
      <div>{id}</div>
      <div>{u.status}</div>
    </div>
   ))}

   {role==="superadmin" && (
    <div className="card">
      <h3>Admin Management</h3>
      {Object.entries(data.admins||{}).map(([id,a])=>(
        <div key={id}>{a.email} ({a.role})</div>
      ))}
    </div>
   )}
  </div>
 );
}
