import Header from "./Header";

const Distribution = () => {
  return (
    <div className="App flex flex-col h-screen">
      {/* Fix Header Here */}
      <Header />
      {/* End Header */}
      <div className="bg-green-300/75 md:min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-20 lg:px-40 items-center gap-8 w-full py-10">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="capitalize text-green-700 font-black text-3xl sm:text-5xl md:text-6xl text-center md:text-left">
            Zakat Assets
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">1</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Cash at Home/Bank
                </h1>
                <p className="text-sm sm:text-base">
                  If interest has been earned on your liquid investments, then
                  record only the principal investment amount.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">2</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Gold and Silver
                </h1>
                <p className="text-sm sm:text-base">
                  Gold and silver, in whichever form (jewellery, coin, ingots
                  etc.) are zakat.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">3</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Trading Business
                </h1>
                <p className="text-sm sm:text-base">
                  Cash Goods for sale (Wholesale Price), Inventory (Wholesale
                  Price), Work in Progress (at cost), Raw Materials (at cost).
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">4</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Retirement & Savings Plan
                </h1>
                <p className="text-sm sm:text-base">
                  For RRSP you can deduct withdrawal tax. For RESP, you should
                  minus early withdrawal deductions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">5</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Properties
                </h1>
                <p className="text-sm sm:text-base">
                  The house in which you live is not subject to Zakat. For a
                  rental property then you only have to pay Zakat on the rental
                  income minus the expenses related to the rental income.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">6</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Shares
                </h1>
                <p className="text-sm sm:text-base">
                  Calculate value based on the trading value at the date of
                  Zakat calculation. In the case of none listed shares calculate
                  on the basis of the company's balance sheet.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">7</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Agricultural Produce
                </h1>
                <p className="text-sm sm:text-base">
                  Zakat is payable on agricultural goods, and livestock at a
                  rate varying between 2.5% and 20%, depending on the type of
                  goods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">8</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Debts Owed To You
                </h1>
                <p className="text-sm sm:text-base">
                  Zakat is payable on the strong debts, i.e. money owed to you
                  that you are confident will be returned back to you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">9</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {" "}
                  Other Assets
                </h1>
                <p className="text-sm sm:text-base">
                  Any Other cash equivalent or liquid assets that are not
                  mentioned above, This could include (but not limited to) the
                  face value of your cryptocurrency
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Distribution Link */}
        <div>
          <a
            className="text-green-600 text-lg sm:text-xl md:text-2xl font-bold underline"
            href="/zakatDistribution/0"
          >
            Distribute my zakat
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Distribution;
