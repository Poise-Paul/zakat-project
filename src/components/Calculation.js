import { useSelector } from "react-redux";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const Calculation = () => {
  const user = useSelector((state) => state.register.user);

  const navigate = useNavigate();

  const handleProtectedNavigation = (e) => {
    // If no user exists
    if (!user) {
      e.preventDefault(); // Stop the link from opening
      alert("Please Login to Enter Zakat Assets");
      navigate("/"); // Re-route to home
    }
  };
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="bg-green-300/75 min-h-screen flex justify-center px-4 sm:px-8 md:px-16 lg:px-40 items-center gap-5 w-full py-10">
        <div className="w-full text-left flex flex-col gap-6">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black">1</h1>
              <div className="capitalize text-lg sm:text-xl md:text-2xl">
                <Link
                  to="/zakatAssets"
                  onClick={handleProtectedNavigation}
                  className="text-green-600 font-bold underline"
                >
                  Enter My Zakatable Assets
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black">2</h1>
              <div className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
                <Link
                  to="/qualifyForZakat"
                  onClick={handleProtectedNavigation}
                  className="text-green-600 font-bold underline"
                >
                  Do I qualify to give zakat?
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black">3</h1>
              <div className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
                <Link
                  to="/zakatLiability"
                  onClick={handleProtectedNavigation}
                  className="text-green-600 font-bold underline"
                >
                  Enter My Zakatable Liabilities
                </Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black">4</h1>
              <div
                My
                Zakatable
                Liabilitiesiv
                className="capitalize font-bold text-lg sm:text-xl md:text-2xl"
              >
                <Link
                  to="/mainCalculations"
                  onClick={handleProtectedNavigation}
                  className="text-green-600 font-bold underline"
                >
                  Calculate My Zakat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
