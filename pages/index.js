
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../lib/firebase";
import {useRouter} from "next/router";

export default function Login(){
 const [email,setEmail]=useState("");
 const [pass,setPass]=useState("");
 const router=useRouter();

 const login=async()=>{
  try{
   await signInWithEmailAndPassword(auth,email,pass);
   router.push("/dashboard");
  }catch{alert("Login gagal");}
 };

 return(
  <div className="page">
   <h1>DPAdmin Premium</h1>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)}/>
   <button onClick={login}>Login</button>
  </div>
 );
}


      <button onClick={addDB}>+ Add Database</button>
    </div>
  );
}
