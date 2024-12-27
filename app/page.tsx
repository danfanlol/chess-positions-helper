'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();
  const handleSignInRedirect = () => {
    router.push("/signin"); // Navigate to the Sign In page
  };
  return (
    <div>
      <h1> Home Page</h1>
      <button onClick={handleSignInRedirect}> Sign in Page </button>
      <h1> This is the key </h1>
    </div>
  );
}
