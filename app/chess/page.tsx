"use client"

import Pieces from "./Pieces/Pieces";

const vertical = [1,2,3,4,5,6,7,8]
const horizontal = ["a","b","c","d","e","f","g","h"]
export default function Home() {
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
        <div>
            <div className = "grid place-content-center h-[80vh]">
                <div className = "relative w-[640px] h-[640px] grid grid-cols-[repeat(8,80px)] grid-rows-[repeat(8,80px)]">
                    {board} 
                    <Pieces/>
                </div>
            </div>
            <div>
                <h1 className = "text-2xl font-bold text-center"> This is what you have clicked </h1>
            </div>
        </div>

    )
}
