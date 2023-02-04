import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex justify-between px-3 py-6 border-b-2 border-slate-400">
      <NavLink
        to="/"
        className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent"
      >
        Moun'S
      </NavLink>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-xl font-semibold text-blue-600"
                  : "text-xl font-semibold hover:text-blue-600 transition duration-300 ease-in-out";
              }}
              to="/posts"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-xl font-semibold text-blue-600"
                  : "text-xl font-semibold hover:text-blue-600 transition duration-300 ease-in-out";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
