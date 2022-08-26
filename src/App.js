import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      {/* Fix Header Here */}
      <Header />
      <div className="bg-green-300/75 h-full flex justify-center p-10 items-center gap-5 w-full">
        <div className="w-[40%] text-left flex flex-col gap-3">
          <h1 className="uppercase text-green-800 font-black text-6xl">
            zakat
          </h1>
          <h1 className="capitalize font-black text-5xl">
            Calculate and Distribute your zakat
          </h1>
          <h4 className="text-2xl text-gray-500 font-semibold">
            Zakat literally means{" "}
            <span className="italic text-green-700">'that which purifies'</span>
          </h4>
          <p className="text-gray-400">
            It is a form of sacrifice which purifies wordly goods from thier
            wordly and something impure means of acquisition, and which
            according to God's wish, must be channeled towards the community.{" "}
          </p>
          <div className="flex gap-4">
            <button className="border-2 border-gray-500 font-semibold rounded-lg p-3 px-7 hover:bg-gray-300 transition duration-500 ease-in-out">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-green-700 to-green-400 rounded-lg font-semibold text-white p-3">
              Quick Calculator
            </button>
            <button className="border-2 font-semibold border-gray-500 rounded-lg p-3 px-7 hover:bg-gray-300 transition duration-500 ease-in-ou">
              Sign up
            </button>
          </div>
        </div>
        <div className="w-[60%] flex flex-col justify-around gap-7">
          <div className="flex justify-around gap-5">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">01</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex py-2 flex-col justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-800 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">02</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex flex-col py-2 justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-purple-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-700 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">03</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex flex-col py-2 justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around gap-5">
            <div className="bg-gradient-to-r from-blue-500 to-blue-800 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">04</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex flex-col py-2 justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-blue-700 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">05</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex py-2 flex-col justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-5 text-center rounded-lg">
              <h1 className="font-black text-white">06</h1>
              <div className="bg-white rounded-lg w-40 p-3">
                <div className="flex flex-col py-2 justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
                  <p className="font-bold">
                    Zakat provides satisfaction to the giver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
