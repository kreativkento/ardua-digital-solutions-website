import { Link, NavLink } from "react-router-dom";

function linkClass({ isActive }) {
  return isActive ? "underline" : "hover:underline";
}

export default function Header() {
  return (
    <header className="p-6 border-b border-black">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link to="/" className="text-2xl font-bold shrink-0">
          AD ARDUA
        </Link>
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <NavLink to="/services" className={linkClass}>
            Solutions
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition"
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
