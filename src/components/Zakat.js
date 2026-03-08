import islamicBg from "../assets/islamic-bg.jpeg";
import Header from "./Header";

const Zakat = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      {/* Header Ends here */}
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <h1 className="capitalize text-green-800 font-black text-6xl">
            What is Zakat?
          </h1>
          <p>
            Zakat (Arabic:); [za'ka:t], "that which purifies", also Zakat al-mal
            [za'ka:t al'ma:l] (Writing) "zakat on wealth ", or Zakah) is a form
            of almsgiving, often collected by the Muslim Ummah treated in Islam
            as religious obligation, which, by Quranic ranking, is next after
            prayer (salat) in importance.
          </p>
          <p>
            As one of the Five Pillars of Islam, zakat is a religious duty for
            all Muslims who meet the necessary criteria of wealth to help the
            needy.
          </p>
          <p>
            - It is a mandatory charitable contribution, often considered to be
            a tax.
          </p>
          <p>
            - Zakat in Wealth is based on the value of all of one's possessions.
          </p>
          <p>
            - It is a customarily 2.5% (or 1/40) of a Muslim's total savings and
            wealth above a minimum amount known as nisab
          </p>
          <h1 className="font-semibold">
            According to Islamic doctrine, the Zakat amount should be paid to:
          </h1>

          <div>
            <ul className="font-semibold list-disc">
              <li>The poor and the needy.</li>
              <li>Zakat Collectors</li>
              <li>Recent Converts to Islam,</li>
              <li>Those to be freed from slavery.</li>
              <li>Those in debt</li>
              <li>In the cause of Allah, and</li>
              <li>Benefit the stranded traveler.</li>
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

export default Zakat;
