import { Link, useLocation } from "react-router-dom";
import logo from "../assets/zakat-logo.png";

const Header = () => {
  // 1. Get the current pathname (e.g., "/eligibility")
  const location = useLocation();
  const currentPath = location.pathname;

  // 2. Helper function to apply conditional classes
  const getNavClass = (path) => {
    const baseClass =
      "border-r-2 border-gray-200 p-2 h-10 cursor-pointer transition duration-500 ease-in-out";
    const activeClass = "text-green-700";
    const inactiveClass = "text-gray-400 hover:text-green-700";

    return `${baseClass} ${currentPath === path ? activeClass : inactiveClass}`;
  };

  const navLinks = [
    { name: "What is Zakat", path: "/zakatMeaning" },
    { name: "Eligibility", path: "/eligibility" },
    { name: "Calculation", path: "/calculation" },
    { name: "Distribution", path: "/distribution" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="flex items-center justify-center h-[20%] bg-white border-b">
      <div className="grid grid-cols-2 w-full max-w-7xl px-4">
        <Link to="/">
          <div className="flex gap-4 items-center">
            <img
              src={logo}
              alt="zakat-logo"
              className="h-20 w-20 object-contain"
            />
            <div className="uppercase text-3xl">
              <h1 className="font-black leading-none">al-fattah</h1>
              <h1 className="font-semibold leading-none">Foundation</h1>
            </div>
          </div>
        </Link>

        <div className="flex items-center">
          {navLinks.map((link) => (
            <div key={link.path} className={getNavClass(link.path)}>
              <Link to={link.path}>{link.name}</Link>
            </div>
          ))}

          <div className="flex text-green-900 p-2 items-center gap-1 cursor-pointer">
            My Account
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
        </div>
      </div>
    </div>
  );
};

export default Header;
