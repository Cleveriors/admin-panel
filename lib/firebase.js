
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClWCaYCBeF4O4nWK4AtaUA-CJL8-r6jPo",
  authDomain: "cleverior-94e2b.firebaseapp.com",
  databaseURL: "https://cleverior-94e2b-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export function listenRealtime(cb){
  onValue(ref(db), snap=>cb(snap.val()));
}
