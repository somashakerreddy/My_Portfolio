import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFileAlt, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "About Me", path: "/about", icon: <FaUser /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-blue-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-bold text-white tracking-wide"
        >
          SR<span className="text-blue-500">portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-white transition ${open && "rotate-45 translate-y-2"}`} />
          <span className={`w-6 h-0.5 bg-white transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-0.5 bg-white transition ${open && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-gray-900/95 backdrop-blur px-6 py-6 space-y-3">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
