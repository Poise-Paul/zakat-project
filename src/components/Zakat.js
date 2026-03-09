import islamicBg from "../assets/islamic-bg.jpeg";
import Header from "./Header";

const Zakat = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      {/* Header Ends here */}
      <div className="bg-green-300/75 h-full flex justify-center px-40 items-center gap-10 w-full">
        <div className="w-[60%] text-left flex flex-col gap-5">
          {/* Heading matching the bold orange/gold style from the image */}
          <h1 className="capitalize text-green-800 font-black text-7xl mb-4">
            What is Zakat?
          </h1>

          <div className="grid grid-cols-2 gap-8 text-gray-800 leading-relaxed">
            {/* Left Column Text */}
            <div className="flex flex-col gap-4">
              <p>
                Zakat (Arabic: زكاة; [za'ka:t], "that which purifies", also
                Zakat al-mal [za'ka:t al'ma:l] زكاة المال, "zakat on wealth", or
                Zakah) is a form of almsgiving, often collected by the Muslim
                Ummah treated in Islam as a religious obligation, which, by
                Quranic ranking, is next after prayer (salat) in importance.
              </p>
              <p>
                As one of the Five Pillars of Islam, zakat is a religious duty
                for all Muslims who meet the necessary criteria of wealth to
                help the needy.
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  It is a mandatory charitable contribution, often considered to
                  be a tax.
                </li>
                <li>
                  Zakat on wealth is based on the value of all of one's
                  possessions.
                </li>
              </ul>
            </div>

            {/* Right Column Text */}
            <div className="flex flex-col gap-4">
              <p>
                • It is customarily **2.5% (or 1/40)** of a Muslim's total
                savings and wealth above a minimum amount known as{" "}
                <span className="text-blue-500 italic font-semibold">
                  nisab
                </span>{" "}
                each lunar year.
              </p>

              <h2 className="font-semibold text-lg mt-2">
                According to Islamic doctrine, the Zakat amount should be paid
                to:
              </h2>

              <ul className="list-disc pl-5 flex flex-col gap-1 font-medium">
                <li>The poor and the needy,</li>
                <li>Zakat collectors,</li>
                <li>Recent converts to Islam,</li>
                <li>Those to be freed from slavery,</li>
                <li>Those in debt,</li>
                <li>In the cause of Allah, and</li>
                <li>Benefit the stranded traveler.</li>
              </ul>
            </div>
          </div>

          {/* The Footer Statement from the image */}
          <p className="mt-8 text-purple-700 font-semibold text-xl italic">
            Zakat is considered part of the covenant between God and a Muslim.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-[40%] flex flex-col justify-center">
          <div className="bg-white/75 p-4 rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={islamicBg}
              alt="islamic-bg"
              className="w-full h-auto rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zakat;
