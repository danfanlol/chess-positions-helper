"use client"
import { useState } from "react";

export default function Home() {
  const boardSize = 8; // 8x8 chessboard
  const squareSize = 100; // Each square is 100px
  const [clickedSquare, setClickedSquare] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent) => {
    const boardRect = event.currentTarget.getBoundingClientRect(); // Get board boundaries
    const x = event.clientX - boardRect.left; // Get the x coordinate of the click relative to the board
    const y = event.clientY - boardRect.top; // Get the y coordinate of the click relative to the board

    // Calculate the row and column of the clicked square
    const row = Math.floor(y / squareSize); // Determine row based on y coordinate
    const col = Math.floor(x / squareSize); // Determine column based on x coordinate

    // Check if the click is inside the board
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
      setClickedSquare(`Row: ${row + 1}, Col: ${String.fromCharCode(97 + col)}`); // Convert column index to letter
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        onClick={handleClick}
        className="grid grid-cols-8 grid-rows-8 bg-[#779556] w-[800px] h-[800px]"
        style={{
          gridTemplateColumns: `repeat(8, 1fr)`,
          gridTemplateRows: `repeat(8, 1fr)`,
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, idx) => {
          const row = Math.floor(idx / boardSize);
          const col = idx % boardSize;
          const isDarkSquare = (row + col) % 2 === 0;

          return (
            <div
              key={idx}
              className={`w-full h-full ${
                isDarkSquare ? "bg-[#3e8e41]" : "bg-[#b4d79e]"
              }`}
            ></div>
          );
        })}
      </div>

      <div className="mt-4 text-xl">
        {clickedSquare ? `You clicked on: ${clickedSquare}` : "Click a square!"}
      </div>
    </div>
  );
}