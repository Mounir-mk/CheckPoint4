import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex justify-between px-3 py-6 border-b-2 border-slate-400">
      <NavLink to="/" className="h-6 w-6 bg-black rounded-full" />
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
