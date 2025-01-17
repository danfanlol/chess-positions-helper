'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../firebase-connection"

export default function Home() {
  const router = useRouter();
  const [first, setFirst] = useState<string>("");  // initialize as empty string
  const [last, setLast] = useState<string>("");     // initialize as empty string



  const handleSubmit = async (e: any) =>{
    e.preventDefault();
    await addDoc(collection(db,"students"), {"first-name": first, "last-name": last})
    setFirst("");
    setLast("");
  }
  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    router.push("/signin");  // Redirect to login after logout
  };

  return (
    <div>
      <h1> You'ved Logged in!</h1>
      <button onClick = {handleLogout}> Logout </button>
      <br></br>
      <form onSubmit = {handleSubmit}>
        <label> First Name </label>
        <input value  = {first} onChange = {(e) => {setFirst(e.target.value)}}/>
        <label> Last Name </label>
        <input  value = {last} onChange = {(e) => {setLast(e.target.value)}} />
        <button> Submit </button>
      </form>
    </div>
  );
}
