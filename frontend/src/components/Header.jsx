import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex justify-between px-3 py-6 border-b-2 border-slate-400">
      <NavLink
        to="/"
        className="text-blue-300 font-bold italic text-3xl font-serif"
      >
        Moun'S
      </NavLink>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink className="text-xl font-bold" to="/posts">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="text-xl font-bold" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
