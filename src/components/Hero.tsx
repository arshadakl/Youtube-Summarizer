function Hero({
  link,
  setlink,
  submit,
  isLoad
}: {
  link: string;
  setlink: any;
  submit: any;
  isLoad:boolean
}) {
  return (
    <div>
      <div className="font-sans container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/*Left Col*/}
        <div className="flex flex-col w-full xl:w-2/2 justify-center  lg:items-center overflow-y-hidden">
          <h1 className="my-1 text-3xl md:text-6xl text-white opacity-75 font-bold leading-tight text-center  md:text-left">
            Unlock
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Time-Saving
            </span>
            Insights
          </h1>
          <p className=" leading-normal text-base md:text-2xl text-white mb-8 text-center md:text-left">
            Let Us Summarize Your YouTube Content!
          </p>

          <form
            onSubmit={(e) => submit(e)}
            className="bg-gray-900 opacity-75  xl:w-2/6 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border mt-5 rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                onChange={(e) => setlink(e.target.value)}
                type="text"
                placeholder="Enter Youtube Link"
                value={link}
              />
            </div>
            <div className="flex items-center  place-content-center  justify-between pt-2">
              <button
                className=" bg-gradient-to-r  mx-auto from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 w-full rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="submit"
              >
                {!isLoad ? 
                "Summarize" :
                <div className="loader place-content-center">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                }
                
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
