import Header from "./Header";

const Calculation = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-black">1</h1>{" "}
              <div className="capitalize text-2xl">
                <a
                  href="/zakatAssets"
                  className="text-green-400 font-bold underline"
                >
                  Enter My Zakatable Assets
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <h1 className="text-7xl font-black">2</h1>{" "}
              <div className="capitalize font-bold text-2xl">
                <a href="/qualifyForZakat" className="text-green-400 underline">
                  do i qualify to give zakat?
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {" "}
            <div className="flex items-center gap-3">
              <h1 className="text-7xl font-black">3</h1>{" "}
              <div className="capitalize font-bold text-2xl">
                <a href="/zakatLiability" className="text-green-400 underline">
                  Enter my zakatable Liabilities
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <h1 className="text-7xl font-black">4</h1>{" "}
              <div className="capitalize underline text-2xl">
                {" "}
                <a
                  className="text-green-400 font-bold undeline"
                  href="/mainCalculations"
                >
                  calculate my zakat
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
