'use client'
import {useRouter} from "next/navigation"
import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const router = useRouter();
  const handleHomeRedirect = () => {
    router.push("/"); // Navigate to the Sign In page
  };
  const handleLogin = async (e: any) => {
    const formData = new FormData(e.target); // Extract form data
    console.log(formData);
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });


    if (res.ok) {
      router.push("/loggedin");  // Redirect to protected page on successful login
    } else {
      setError("RETARD!");
    }
  };
  return (
    <div>
      <h1> Log in Page</h1>
      <button onClick={handleHomeRedirect}> Home Page </button>
      <div>
      <form onSubmit={handleLogin}>
        <input
          name = "Username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name = "Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
    </div>
  );
}
