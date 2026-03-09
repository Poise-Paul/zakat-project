import islamicBg from "../assets/islamic-bg.jpeg";
import Header from "./Header";

const Eligibility = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      {/* End the Header */}
      <div className="bg-green-300/75 h-full flex justify-center px-40 items-center gap-10 w-full">
        <div className="w-full text-left flex flex-col gap-6">
          {/* Heading */}
          <h1 className="capitalize text-green-800 font-black text-8xl mb-4">
            Eligibility
          </h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-12 text-gray-800 leading-relaxed">
            {/* Left Column: General Rules */}
            <div className="flex flex-col gap-5">
              <p>
                The amount of zakat to be paid by an individual depends on the
                amount of money and the type of assets the individual possesses.
              </p>
              <p>
                The Quran does not provide specific guidelines on which types of
                wealth are taxable under the zakat, nor does it specify
                percentages to be given.
              </p>
              <p>
                The customary practice is that the amount of zakat paid on
                capital assets (e.g. money) is 2.5% (1/40).
              </p>
              <p>
                Zakat is additionally payable on agricultural goods, precious
                metals, minerals, and livestock at a rate varying between 2.5%
                and 20%, depending on the type of goods.
              </p>
            </div>

            {/* Right Column: Qualification & Scholar Differences */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">
                  Qualification
                </h2>
                <p className="mb-2">Zakat is usually payable on assets:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>continuously owned over one lunar year</li>
                  <li>
                    that are in excess of the nisab, a minimum monetary value.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-bold text-black leading-tight mb-3">
                  The kinds of wealth that are zakatable are subject to
                  differences among scholars.
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Some scholars consider the wealth of children and insane
                    individuals zakatable, others don't.
                  </li>
                  <li>
                    Some scholars consider all agricultural products zakatable,
                    others restrict zakat to specific kinds only.
                  </li>
                  <li>Some consider debts zakatable, others don't.</li>
                  <li>
                    Similar differences exist for business assets and women's
                    jewelry.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
