import aboutImg from "../assets/Al-Fattah.png";
import Header from "./Header";

const About = () => {
  return (
    <div className="App flex flex-col h-screen">
      {/* Fix Header Here */}
      <Header />
      {/* Header Ends Here */}
      <div className="bg-green-300/75 h-full flex justify-center px-40 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <h1 className="uppercase text-green-800 font-black text-6xl">
            About Us
          </h1>
          <p className="">
            Al-Fattah Foundation is a charitable organization aimed at improving
            livelihood.
          </p>
          <p>Drop us a line or two if you want to work together with us!</p>
          <p className="font-bold underline">
            <a href="www://info@al-fattah.org">info@al-fattah.org</a> <br />
            <a href="www://www.alfattah.org">www.alfattah.org</a>
          </p>
        </div>
        <div className="w-[40%] flex flex-col justify-around gap-7">
          <div className="bg-white/75 p-3 rounded-2xl bg-blend-darken">
            <img
              src={aboutImg}
              alt="islamic-bg"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
