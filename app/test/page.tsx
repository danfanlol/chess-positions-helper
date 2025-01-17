'use client'

export default function Home() {

  return (
    <div>
      <header className = "bg-gray-900 py-4">
        <div className = "container mx-auto flex justify-between bg-gray-900 items-center">
          <div>
            <h1 className = "text-white text-xl font-bold"> Daniel Fan </h1>
            <p className = "text-gray-400 text-sm"> Software Engineer </p>

          </div>
          <nav>
            <ul className = "flex space-x-4 text-gray-300 ">
              <li> <a href = "#" className = "hover:text-white"> Home </a> </li>
              <li> <a href = "#" className = "hover:text-white"> Projects </a> </li>
              <li> <a href = "#" className = "hover:text-white"> About </a> </li>
              <li> <a href = "#" className = "hover:text-white"> Contact </a> </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className = "container mx-auto mt-8">
        <h1 className = "font-bold text-2xl mb-3"> About me </h1>
        <p> I am a software engineer with experience in ..........................</p>
      </div>
      <div className = "container mx-auto flex">
        <div className = "container mx-auto mt-8 shadow-lg p-4">
          <h1 className = "font-bold text-2xl mb-3"> Projects </h1>
          <p> I am a software engineer with experience in ..........................</p>
          <ul className = "mt-3 list-disc relative left-4">
                <li> <a href = "#"> Project 1 </a> </li>
                <li> <a href = "#"> Project 2 </a> </li>
                <li> <a href = "#"> Project 3 </a> </li>
                <li> <a href = "#"> Project 4 </a> </li>
          </ul>
          <a className = "text-blue-500 font-bold"> Learn More </a>

        </div>
        <div className = "container mx-auto mt-8 shadow-lg p-4">
          <h1 className = "font-bold text-2xl mb-3"> Projects </h1>
          <p> I am a software engineer with experience in ..........................</p>
          <ul className = "mt-3 list-disc relative left-4">
                <li> <a href = "#"> Project 1 </a> </li>
                <li> <a href = "#"> Project 2 </a> </li>
                <li> <a href = "#"> Project 3 </a> </li>
                <li> <a href = "#"> Project 4 </a> </li>
          </ul>
          <a className = "text-blue-500 font-bold"> Learn More </a>

        </div>
      </div>
      <div className = "container mx-auto mt-20">
        <h1 className = "font-bold text-2xl mb-5"> Contact Me </h1>
        <form>
          <div className = "flex space-x-6">
            <div>
              <label className = "font-bold"> First Name </label>
              <input className = "block w-[16rem] bg-gray-200 py-3 px-4 rounded mt-2" placeholder = 'John' />
            </div>
            <div>
              <label className = "font-bold"> Last Name </label>
              <input className = "w-[16rem] block bg-gray-200 py-3 px-4 rounded mt-2" placeholder = "Doe" />
            </div>
          </div>
          <div className = "mt-6">
            <div className = "">
              <label className = "font-bold"> Email Address </label>
              <input className = "block w-[33.5rem] bg-gray-200 py-3 px-4 rounded mt-2" placeholder = 'jane@example.com' />
            </div>
          </div>
          <div className = "mt-6">
            <div className = "">
              <label className = "font-bold"> Message </label>
              <textarea className = "block w-[33.5rem] bg-gray-200 py-3 px-4 rounded mt-2 h-[4.5rem]" placeholder = 'Enter your message here...' />
            </div>
          </div>
          <button className = "mt-8 bg-blue-500 text-white font-bold px-4 py-[.5rem] rounded"> Send Message </button>
        </form>
      </div>
      <div className = "mt-[6rem] bg-gray-800">
        <div className = "flex space-x-[6rem] container mx-auto h-[12rem] pt-5">
          <div className = "text-white p-5 max-w-[30rem]">
            <h1 className = "font-bold text-xl"> About me </h1>
            <p className = "mt-3 text-sm"> The Constitution of the United States is the supreme law of the United States.[3] It superseded the Articles of Confederation, the nation's first constitution, on March 4, 17 </p>
          </div>
          <div className = "text-white p-5">
            <h1 className = "font-bold text-xl"> Contact Me </h1>
            <p className = "mt-3 text-sm"> balh blah blah </p>
            <p className = "mt-2 text-sm"> balh blah blah </p>
            <p className = "mt-2 text-sm"> balh blah blah </p>

          </div>
          <div className = "text-white p-5 pl-40">
            <h1 className = "font-bold text-xl"> Social Media </h1>
            <p className = "mt-3 text-sm"> balh blah blah </p>
            <p className = "mt-2 text-sm"> balh blah blah </p>
            <p className = "mt-2 text-sm"> balh blah blah </p>
          </div>
        </div>  
        <div className = "container mx-auto text-center text-white border-gray-700 border-t-2 pt-2">
            @2023 Your Name. All Rights Reserved.
        </div>
      </div>

    </div>
  );
}
