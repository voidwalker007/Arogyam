const HowToSection = () => {
  return (
    <>
        <section className="h-[90vh] how-to-section mt-[30rem]">
            <div className="font-robo font-extrabold text-4xl text-ghost_white-300 text-center">
                <h2>What to do from here ? </h2>
            </div>
            <div className="flex justify-center items-center gap-[5rem] mt-[4rem]">
                <div className="how-to-clay-card h-[15rem] w-[20rem]"></div>
                <div className="how-to-clay-card h-[15rem] w-[20rem]"></div>
                <div className="how-to-clay-card h-[15rem] w-[20rem]"></div>
            </div>
        </section>
    </>
  )
}

export default HowToSection