

type userProps = {
    rank: any,
    file: any,
    piece: any
}
export default function Home({ file, rank, piece}: userProps ){

    return (
        <div className="absolute w-[12.5%] h-[12.5%] bg-contain bg-no-repeat bg-center" style={{
            transform: `translate(${rank * 80}px, ${file * 80}px)`,
            backgroundImage: `url('/${piece}.png')`
          }}>  
        </div>
    )
}

