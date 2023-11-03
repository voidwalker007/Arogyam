
export const Header = () => {
  return (
    <>
      <header className="relative z-[999] bg-white">
        <nav className=" fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2  
                    sm:top-[1.7rem] sm:h-[initial]  lg:w-[50%] w-[80%] mx-auto  rounded-full 
                  clay-card  py-[0.2rem]">
          <ul className="flex justify-around items-center text-delft_blue-500 text-lg py-[0.5rem]">
            <li className="clay-button text-floral_white-900 font-robo py-2 px-3">Home</li>
            <li className="font-robo py-2 px-3">About</li>
            <li className="font-robo py-2 px-3">Contact</li>
            <li className="font-robo py-2 px-3">Register</li>
          </ul>
        </nav>
      </header>
    </>
  )
}
