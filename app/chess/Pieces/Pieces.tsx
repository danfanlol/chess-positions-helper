"use client"

import { useEffect, useRef, useState } from "react";

import Piece from "../Piece/Piece"
import Color from "../Color/Color"
export default function Home({setAnimated, square}:{setAnimated: any, square: string }){
    const mountedRef = useRef(false);
    let path: { x:number, y: number; } [] = [];
    const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });  // Use useRef for tracking last position

    const [position, setPosition] = useState(new Array(8).fill("").map(() => new Array(8).fill("")));

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true;
            const map: { [key in "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"]: number } = {
                "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7
            };
            
            const map2: { [key in "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"]: number } = {
                "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7
            };
                
            // Map the letter and number
            const letter = map[square.charAt(0) as keyof typeof map];  
            const number = 7-map2[square.charAt(1) as keyof typeof map2]; 
            setPosition((prevPosition) => {
                const newPosition = [...prevPosition];
                newPosition[letter][number] = "wn";
                return newPosition;
            }); 
            path.push({ x: letter, y: number }) //not pre-emptively adding a value to the path list cost me around a half hour of debug time. 
            //without this line, the path list didn't have access to the first position of the knight 
            solve(letter, number, 1);

            trace(letter,number);
        }
    }, []);

    

    const trace = (x:number, y:number) => {
        let lastX = x; 
        let lastY = y;
        let i = 0; //in an earlier version, this was -1, and right after the next line, it was incremented. This not only didn't work because of some of the reasons mentioned below, but also because 
        //the path list didn't even have the first position of the knight, so I was effectively skipping a step; the knight appeared to be teleporting to random places on the UI. 
        const intervalId = setInterval(() => {

            setPosition((prevPosition) => { //not realizing this ran multiple times, along with the fact that it ran AFTER all the code below ran (due to asyncronous nature) cost me 
                //another hour or so of debugging, coupled with the other css issue in which I didn't know where the errors were, and which errors were causing which bug
                const newPosition = [...prevPosition];

                newPosition[path[i].x][path[i].y] = "wn";
                //this console.log() that I added in very late was critical in realizing that lastX and path[i].x were the same values for most of the time
                console.log(lastX + " " + path[i].x) 
                newPosition[lastX][lastY] = "s"; 
                return newPosition;
            }); 
            
            lastX = path[i].x; 
            lastY =  path[i].y;

            i += 1; //not understanding where to put this in conjunction with the fact that setPosition didn't occur when I thought it did further cost me more debug time 
            
            if (i == 63){
                clearInterval(intervalId);
                setAnimated(false);
            }
            
        }, 100);
    }
    const knightMoves = [
        { x: 2, y: 1 },
        { x: 1, y: 2 },
        { x: -1, y: 2 },
        { x: -2, y: 1 },
        { x: -2, y: -1 },
        { x: -1, y: -2 },
        { x: 1, y: -2 },
        { x: 2, y: -1 }
    ];
    const isValidMove = (x: number, y: number) => {
        return x >= 0 && x < 8 && y >= 0 && y < 8 && position[x][y] === '';
    };
    
    // Function to count the number of valid moves from a position
    const countValidMoves = (x: number, y: number) => {
        let count = 0;
        for (const move of knightMoves) {
            const newX = x + move.x;
            const newY = y + move.y;
            if (isValidMove(newX, newY)) {
                count++;
            }

        }
        return count;
    };
    function solve(x: number, y: number, moveCount: number){
        if (moveCount === 64) {
            return true;
        }
    

        let bestMove = null;
        let minMoves = Number.MAX_SAFE_INTEGER;

        for (const move of knightMoves) {
            const newX = x + move.x;
            const newY = y + move.y;

            if (isValidMove(newX, newY)) {
                // Count valid moves for each potential move
                const validMoveCount = countValidMoves(newX, newY);
                if (validMoveCount < minMoves) {
                    bestMove = { x: newX, y: newY };
                    minMoves = validMoveCount;
                }
            }
        }

        if (bestMove) {
            const { x: newX, y: newY } = bestMove;
            path.push(bestMove);
            position[newX][newY] = moveCount; // Place knight
            if (solve(newX, newY, moveCount + 1)) {
                return true; // Move is valid, proceed with recursion
            }
        }

        return false; // No valid move found, backtrack
    }
    
    return (
        <div className = "absolute left-0 right-0 top-0 bottom-0 ">
            {position.map((r,rank) => r.map((f, file) => position[rank][file].length == 2 ? <Piece key = {rank + "-" + file} rank = {rank} file = {file} piece = {position[rank][file]} /> : position[rank][file].length == 1 ? <Color key = {rank + '-' + file /*the key used to be just {rank}, which led to many of the dots becoming darker which greatly confused me*/} rank = {rank} file = {file}/> : null))}
        </div>
    )
}