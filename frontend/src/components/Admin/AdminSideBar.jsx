import { NavLink } from "react-router-dom";

function AdminSideBar() {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-800">
      <h1 className="text-slate-200 text-4xl w-full text-center mt-10 pb-8 border-b-2 border-slate-200 font-bold">
        Admin Pannel
      </h1>
      <nav className="pl-4">
        <ul className="mt-10">
          <li className="text-slate-200 text-xl font-bold">
            <NavLink
              to="/admin/posts"
              className="pl-4 border-l-2 text-slate-200 border-slate-200 hover:border-l-2 hover:border-blue-500 hover:text-blue-500 h-12 flex items-center"
            >
              Posts
            </NavLink>
          </li>
          <li className="text-slate-200 text-xl font-bold">
            <NavLink
              to="/admin/description"
              className="pl-4 border-l-2 text-slate-200 border-slate-200 hover:border-l-2 hover:border-blue-500 hover:text-blue-500 h-12 flex items-center"
              activeClassName="border-l-2 border-blue-500 text-blue-500"
            >
              Description
            </NavLink>
          </li>
          <li className="text-slate-200 text-xl font-bold">
            <NavLink
              to="/admin/projects"
              className="pl-4 border-l-2 text-slate-200 border-slate-200 hover:border-l-2 hover:border-blue-500 hover:text-blue-500 h-12 flex items-center"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSideBar;
