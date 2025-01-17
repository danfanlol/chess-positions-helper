"use client"

import Pieces from "./Pieces/Pieces";

const vertical = [1,2,3,4,5,6,7,8]
const horizontal = ["a","b","c","d","e","f","g","h"]
export default function Home() {
    let board = [];

    for (let i = 0; i < horizontal.length;i++){
        for (let j =vertical.length-1 ; j >= 0;j--){
            if ((j+i+2) % 2 == 0){
                board.push(<div className = "w-[100px] h-[100px] bg-[#B48764]" key={`${horizontal[i]}${vertical[j]}`}>  </div>)

            }
            else{
                board.push(<div className = "w-[100px] h-[100px] bg-[#F0D8B7]" key={`${horizontal[i]}${vertical[j]}`}> </div>)
            }
        }
    }
    return (
        <div className = "grid place-content-center h-[100vh]">
            <div className = "relative w-[800px] h-[800px] grid grid-cols-[repeat(8,100px)] grid-rows-[repeat(8,100px)]">
                {board} 
                <Pieces/>
            </div>
        </div>
    )
}
