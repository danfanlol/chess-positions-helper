"use client"
import { useState } from "react";
import {useRouter} from "next/navigation"


export default function Home() {
  const router = useRouter();
  
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700 h-[100vh] pt-[2rem]">
      <div className = "text-[40px] text-center font-bold mt-[50px]"> What is a Knight's Tour?</div>
      <div className = "text-[20px] text-center font-bold mt-[20px]"> 
        A knight's tour is a sequence of moves that a knight makes on a chessboard such that every square is visited exactly once.
        <br/> <br/>
        Creating a program to find a knight's tour is frequently given to computer science students as both a recreational challenge and a serious problem. 
        <br/><br/>To prove if a knight can even visit 
        every square once on a chessboard while traversing it is a challenge in of itself, 
        <br/> but to find a systematic way to perform a knight's tour given any starting square is even harder. 
        <br/><br/> Many different strategies exist to perform a knight's tour, ranging from brute force trial-and-error, to intuition-based heuristic methods. 

      </div>
      <div className = "text-[40px] text-center font-bold mt-[50px]"> Can it be solved?</div>
      <div className = "text-[20px] text-center font-bold mt-[20px]"> 
        It was proven in 1991 that a knight's tour is in fact always possible for any starting square on an 8x8 chessboard <br/> (thanks to one Allen J. Schwenk of Western Michigan University). 
        <br/> <br/>
        The technique demonstrated here is a heuristic based on Warnsdorf's rule.
        <br/><br/>Under Warnsdorf's rule, the knight is moved so that it always proceeds to the square from which it will have the fewest possible moves.
        <br/> If there are multiple squares that have the same number of minimum onward moves, a random one is chosen. 
      </div>
      <div onClick = {() => router.push("/")}  className = "cursor-pointer absolute top-[2rem] left-[95rem] bg-[#333] py-5 px-10 rounded-2xl text-2xl">
                <button> Back </button>
            </div>
    </div>
    
  );
}