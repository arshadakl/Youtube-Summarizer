

function Hero() {
  return (
    <div >
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/*Left Col*/}
        <div className="flex flex-col w-full xl:w-2/2 justify-center  lg:items-center overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Unlock
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Time-Saving
            </span>
            Insights
          </h1>
          <p className="leading-normal text-base md:text-2xl text-white mb-8 text-center md:text-left">
          Let Us Summarize Your YouTube Content!
          </p>
          <form className="bg-gray-900 opacity-75 w-2/5 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-blue-300 py-2 font-bold mb-2"
                htmlFor="emailaddress"
              >
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="Enter Youtube Link"
              />
            </div>
            <div className="flex items-center  justify-between pt-2">
              <button
                className="bg-gradient-to-r  from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Summarize
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
