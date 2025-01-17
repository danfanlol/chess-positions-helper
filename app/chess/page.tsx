"use client"

import { useState } from "react";
import Pieces from "./Pieces/Pieces";

const vertical = [1,2,3,4,5,6,7,8]
const horizontal = ["a","b","c","d","e","f","g","h"]
export default function Home() {
    const [clickedSquare, setClickedSquare] = useState<string | null>(null);
    const [animated, setAnimated] = useState<boolean | null>(false);

    
    const handleClick = (event: React.MouseEvent) => {
        if (!animated && clickedSquare != null){
            setClickedSquare(null);
        }
        else if (!animated){
            const boardRect = event.currentTarget.getBoundingClientRect(); // Get board boundaries
            const x = event.clientX - boardRect.left; // Get the x coordinate of the click relative to the board
            const y = event.clientY - boardRect.top; // Get the y coordinate of the click relative to the board
    
            const row = Math.floor(y / 80); // Determine row based on y coordinate
            const col = Math.floor(x / 80); // Determine column based on x coordinate
            if (row >= 0 && row < 8 && col >= 0 && col < 8) {
                setClickedSquare(`${String.fromCharCode(97 + col)}${8 -row }`); // Convert column index to letter
                setAnimated(true);
              }
            // console.log("ASD")
        }

    }
    let board = [];

    for (let i = 0; i < horizontal.length;i++){
        for (let j =vertical.length-1 ; j >= 0;j--){
            if ((j+i+2) % 2 == 0){
                board.push(<div className = "w-[80px] h-[80px] bg-[#B48764]" key={`${horizontal[i]}${vertical[j]}`}>  </div>)

            }
            else{
                board.push(<div className = "w-[80px] h-[80px] bg-[#F0D8B7]" key={`${horizontal[i]}${vertical[j]}`}> </div>)
            }
        }
    }
    return (
        <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700 h-[100vh] pt-10">
            <div>
                <h1 className = "text-5xl font-bold text-center"> Schedule A Knight's Tour! </h1>
            </div>
            <div className = "grid place-content-center h-[80vh]">
                <div onClick = {handleClick} className = "relative w-[640px] h-[640px] grid grid-cols-[repeat(8,80px)] grid-rows-[repeat(8,80px)]">
                    {board} 
                    {clickedSquare ? <Pieces setAnimated={setAnimated} square = {clickedSquare}/> : null}
                </div>
            </div>
            <div>
                <h1 className = "text-2xl font-bold text-center"> This is what you have clicked {clickedSquare} </h1>
            </div>
        </div>
    )
}
