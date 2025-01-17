'use client'
import {useRouter} from "next/navigation"
import {useState, useEffect} from "react"

export default function Home() {
  const router = useRouter();
  const handleSignInRedirect = () => {
    router.push("/signin"); // Navigate to the Sign In page
  };
  
  return (
    <div>
      <h1> Home Page</h1>
      <button className = 'border-2' onClick={handleSignInRedirect}> Sign in Page </button>
      <h1> This is the key </h1>
      <main className = "mb-10 flex flex-col items-center">
        <h1 className = "text-5xl font-bold m-10"> Add Data to Firestore Database </h1>
        <form className = "bg-gray-300 p-4 shadow-md rounded-lg">
          <div className = "mb-4">
            <label className = "block text-gray-700 font-bold mb-2"> Name: </label>
            <input className = "w-full px-3 py-2 rounded-lg focus:outline-none border focus:border-blue-500"/>
          </div>
          <div className = "mb-4">
            <label className = "block text-gray-700 font-bold mb-2"> Email: </label>
            <input className = "w-full px-3 py-2 rounded-lg focus:outline-none border focus:border-blue-500"/>
          </div>
          <div className = "mb-4">
            <label className = "block text-gray-700 font-bold mb-2"> Message </label>
            <textarea className = "w-full px-3 py-2 rounded-lg focus:outline-none border ">
            </textarea>
          </div>
          <div className = "text-center">
            <button className = "font-bold px-2 py-2 bg-gray-400 rounded-lg"> Submit </button>
          </div>
        </form>
      </main>
    </div>
  );
}
