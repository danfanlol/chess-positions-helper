
type userProps = {
    rank: any,
    file: any,
}
export default function Home({ file, rank}: userProps ){

    return (
        <div className = "absolute w-[12.5%] h-[12.5%]" style={{ //not setting this to absolute cost me probably about 2 hours worth of debugging 
            transform: `translate(${rank * 80}px, ${file * 80}px)`,
        }}>
            <div
                className="absolute bg-black bg-opacity-10 rounded-full opacity-100"
                style={{
                  width: '40px',
                  height: '40px',
                  left: '25%',
                  top: '25%',
                }}
            ></div>
        </div>
    )
}

