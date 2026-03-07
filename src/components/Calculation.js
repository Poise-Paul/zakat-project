import Header from "./Header";

const Calculation = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <div className="grid grid-cols-2">
            <div className="flex gap-3">
              <h1 className="text-7xl font-black">1</h1>{" "}
              <div className="capitalize text-2xl">
                <a href="/zaktAssets" className="text-green-400 underline">
                  Enter My Zakatable Assets
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <h1 className="text-7xl font-black">2</h1>{" "}
              <div className="capitalize text-3xl">
                do i qualify to give zakat?
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {" "}
            <div className="flex gap-3">
              <h1 className="text-7xl font-black">3</h1>{" "}
              <div className="capitalize text-2xl">
                <a href="/zaktLiabilities" className="text-green-400 underline">
                  Enter my zakatable Liabilities
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <h1 className="text-7xl font-black">4</h1>{" "}
              <div className="capitalize text-2xl">
                {" "}
                <a className="text-green-400 undeline" href="/QuickCalc">
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
