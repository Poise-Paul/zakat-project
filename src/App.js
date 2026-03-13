import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { RiHandCoinLine, RiUserCommunityFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaQuranSolid } from "react-icons/lia";
import { TbHandStop } from "react-icons/tb";
import { LuPiggyBank } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LogoutModal from "./components/LogoutModal";
import { updateUser } from "./redux/slices/registerSlice";

function App() {
  const user = useSelector((state) => state.register.user);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    console.log("User Detail.s", user);
  }, [user]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token or user data
    localStorage.removeItem("authToken");
    dispatch(updateUser(null));
    // Redirect to login
    navigate("/");
    setShowLogout(false);
  };

  return (
    <div className="App flex flex-col h-screen">
      {/* Fix Header Here */}
      <Header />
      <div className="bg-green-300/75 md:h-full flex flex-col md:flex-row justify-center px-6 md:px-20 items-center gap-5 w-full">
        <div className="w-full md:w-[40%] text-left flex flex-col gap-3">
          <h1 className="uppercase text-green-800 font-black text-3xl sm:text-5xl md:text-6xl">
            zakat
          </h1>
          <h1 className="capitalize font-black text-2xl sm:text-4xl md:text-5xl">
            Calculate and Distribute your zakat
          </h1>
          <h4 className="text-lg sm:text-xl md:text-2xl text-gray-500 font-semibold">
            Zakat literally means{" "}
            <span className="italic text-green-700">'that which purifies'</span>
          </h4>
          <p className="font-semibold text-sm sm:text-base md:text-lg">
            It is a form of sacrifice which purifies wordly goods from thier
            wordly and something impure means of acquisition, and which
            according to God's wish, must be channeled towards the
            community.{" "}
          </p>
          {/* Buttons */}
          {user ? (
            <button
              onClick={() => setShowLogout(true)}
              className="border-2 border-gray-500 max-w-fit font-semibold rounded-lg py-2 px-7 hover:bg-gray-300 transition duration-500 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-wrap gap-4">
              <Link to="/SignIn">
                <button className="border-2 border-gray-500 font-semibold rounded-lg py-2 px-7 hover:bg-gray-300">
                  Login
                </button>
              </Link>
              <Link to="/SignUp">
                <button className="border-2 border-gray-500 font-semibold rounded-lg py-2 px-7 hover:bg-gray-300">
                  Sign up
                </button>
              </Link>
              <Link to="/QuickCalc">
                <button className="bg-gradient-to-r from-green-700 to-green-400 rounded-lg font-semibold text-white p-3">
                  Quick Calculator
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="w-full md:w-[60%] flex flex-col gap-10">
          {/* First Row */}
          <div className="flex flex-col sm:flex-row justify-around gap-8">
            {/* Card 01 */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 pr-5 pt-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-left pl-5 text-white text-3xl mb-3">
                01
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <RiHandCoinLine className="text-orange-500 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  Zakat provides satisfaction to the giver
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-700 pr-5 py-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-white pl-5 text-left text-3xl mb-3">
                02
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <RiUserCommunityFill className="text-purple-600 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  It is a way of improving condition of society
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-700 pr-5 pt-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-white pl-5 text-left text-3xl mb-3">
                03
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <GiReceiveMoney className="text-indigo-700 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  2.5% of a person’s wealth is given for Zakat
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row justify-around gap-8">
            {/* Card 04 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-800 pr-5 pt-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-white pl-5 text-3xl text-left mb-3">
                04
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <LiaQuranSolid className="text-blue-800 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  Zakat can be given to eight types of people
                </p>
              </div>
            </div>

            {/* Card 05 */}
            <div className="bg-gradient-to-r from-gray-200 to-blue-700 pr-5 pt-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-white pl-5 text-left text-3xl mb-3">
                05
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <TbHandStop className="text-blue-700 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  Zakat is a pillar of Islam so it’s compulsory
                </p>
              </div>
            </div>

            {/* Card 06 */}
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 pr-5 py-5 text-center rounded-xl shadow-lg">
              <h1 className="font-black text-left pl-5 text-white text-3xl mb-3">
                06
              </h1>
              <div className="bg-white rounded-r-xl w-48 min-h-[160px] p-4 flex flex-col items-center justify-center space-y-2">
                <LuPiggyBank className="text-gray-600 text-4xl" />
                <p className="font-semibold text-sm text-gray-700">
                  Giving Zakat will not diminish a Muslim’s wealth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout modal */}
      <LogoutModal
        isOpen={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}

export default App;
