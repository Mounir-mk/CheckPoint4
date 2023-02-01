function Header() {
  return (
    <header className="w-full flex justify-between px-3 py-6 border-b-2 border-slate-400">
      <div className="h-6 w-6 bg-black rounded-full" />
      <nav>
        <ul className="flex gap-4">
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/about">About</a>
          </li>
          <li>
            <a to="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
