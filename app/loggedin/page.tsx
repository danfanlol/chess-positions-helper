'use client'
import { parseCookies } from "nookies"; // A utility for parsing cookies
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.auth_token; // Check for JWT in cookies
    if (!token) {
      router.push("/signin"); // Redirect to login if no JWT is found
    }
  }, [router]);
  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    router.push("/signin");  // Redirect to login after logout
  };

  return (
    <div>
      <h1> You'ved Logged in!</h1>
      <button onClick = {handleLogout}> Logout </button>

    </div>
  );
}
