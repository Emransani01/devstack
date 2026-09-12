import { useState } from "react";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="lg:mr-auto">
          <img src={logoText} alt="DevStack" className="h-9 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:ml-20 lg:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:ml-auto lg:flex">
          <button
            type="button"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-primary rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-primary rounded-full px-3 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
