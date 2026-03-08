import islamicBg from "../assets/islamic-bg.jpeg";
import Header from "./Header";

const Eligibility = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      {/* End the Header */}
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <h1 className="uppercase text-green-800 font-black text-6xl">
            Eligibilitty
          </h1>
          <p className="">
            The amount of Zakat to be paid by an individual depends on the
            amount of money and the type of assets the individual possesses.
          </p>
          <p>
            The Quran does not provide specific guidelines on which types of
            wealth are taxable under the zakat, nor does it specify percentages
            to be given.
          </p>
          <p>
            The customary practice is that the amount of zakat paid on capital
            assets (e.g. money) is 2.5% (1/40).
          </p>
          <p>
            Zakat is additionally payable on agricultural goods, precious
            metals, minerals, and livestock at a rate varying between 2.5% and
            20%, depending on the type of goods.
          </p>
          <h1 className="text-black font-bold">Qualification</h1>
          <p> Zakat is usually payable on assets:</p>
          <div>
            <ul className="font-semibold list-disc">
              <li>
                {" "}
                Some scholars consider the wealth of children and insane
                individuals zakatable, others don't.
              </li>
              <li>
                Some scholars consider all agricultural products zakatable,
                others restrict zakat to specific kinds only.{" "}
              </li>
              <li>Some consider debts zakatable, others don't.</li>
              <li>
                Similar differences exists for business assets and women's
                jewelry
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-around gap-7">
          <div className="bg-white/75 p-3 rounded-2xl bg-blend-darken">
            <img
              src={islamicBg}
              alt="islamic-bg"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
