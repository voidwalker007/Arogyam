
export const HeroSection = () => {
  return (
    <>
          {/* Blobs */}
        {/* <div className="blur-[200px] relative">
            <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg"
             className='absolute top-0 left-0 z-[-999]'>
                <path fill="#4381c1" d="M24,-9.2C26.6,0,20.9,10.5,12.6,16.3C4.3,22.1,-6.7,23.2,-23,15.3C-39.3,7.3,-61,-9.8,-58,-19.6C-55.1,-29.3,-27.5,-31.8,-8.4,-29.1C10.7,-26.3,21.5,-18.4,24,-9.2Z" transform="translate(50 10)" />
            </svg>  
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" 
              className='absolute top-0 left-0 z-[-999]' >
                <path fill="#0F62FE" d="M24,-9.2C26.6,0,20.9,10.5,12.6,16.3C4.3,22.1,-6.7,23.2,-23,15.3C-39.3,7.3,-61,-9.8,-58,-19.6C-55.1,-29.3,-27.5,-31.8,-8.4,-29.1C10.7,-26.3,21.5,-18.4,24,-9.2Z" transform="translate(100 10)" />
            </svg>  
        </div> */}
        {/* 3d hand shake illustration */}
        <div className="absolute top-[20rem] left-[70%] ">
          <img src="./src/assets/3d-boy-hand-shaking.png" alt="3d-boy-hand-shaking"  className=""/>
        </div>
        {/* main card */}
        <div className="m-[35vh] mx-auto main-button-card flex flex-col py-[0.2rem] 
        justify-center items-center text-center ">
          <div className="">
            <button className="font-robo py-2 px-3">Schedule a call</button>
          </div>
          <div className="clay-button w-[10rem] h-[3rem] ">
            <button className="text-white font-robo py-2 px-3">Consult Now</button>
          </div>
        </div>
    </>
  )
}
