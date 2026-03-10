import { Link, useLocation } from "react-router-dom";
import logo from "../assets/zakat-logo.png";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavClass = (path) => {
    // Removed border-r-2 for mobile to prevent weird vertical lines
    const baseClass =
      "p-2 cursor-pointer transition duration-500 ease-in-out whitespace-nowrap";
    const activeClass = "text-green-700 font-bold";
    const inactiveClass = "text-gray-400 hover:text-green-700";
    return `${baseClass} ${currentPath === path ? activeClass : inactiveClass}`;
  };

  const navLinks = [
    { name: "What is Zakat", path: "/zakatMeaning" },
    { name: "Eligibility", path: "/eligibility" },
    { name: "Calculation", path: "/calculation" },
    { name: "Distribution", path: "/distribution" },
  ];

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex gap-3 items-center">
          <img src={logo} alt="logo" className="h-12 md:h-16 object-contain" />
          <div className="uppercase text-center md:text-left">
            <h1 className="font-black text-xl md:text-2xl leading-none">
              al-fattah
            </h1>
            <h1 className="font-semibold text-lg md:text-xl leading-none">
              Foundation
            </h1>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center md:justify-start gap-3 overflow-x-auto w-full md:w-auto no-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={getNavClass(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex text-green-900 p-2 items-center gap-1 font-bold shrink-0">
            Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
