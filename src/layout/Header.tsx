import logo_white from "../assets/images/common/Logo_White.webp";
import logo from "../assets/images/common/Logo.webp";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";

import { navigationLinks } from "../data/navigation";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 ${
        isHome ? "absolute" : "relative bg-white shadow-md"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={isHome ? logo_white : logo}
            alt="UrbanNest Logo"
            loading="lazy"
            className="object-contain w-auto h-8 md:h-10"
          />
        </NavLink>

        {/* Desktop Navigation */}

        <nav
          className={`hidden md:flex gap-7 ${isHome ? "text-white" : "text-gray-800"}`}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="hover:text-gray-400"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="px-6 py-2 rounded-full">Sign up</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <RiCloseLargeFill className={`text-2xl cursor-pointer ${isHome ? "text-white" : "text-gray-800"}`} />
          ) : (
            <RiMenu3Fill className={`text-2xl cursor-pointer ${isHome ? "text-white" : "text-gray-800"}`} />
          )}
        </button>

        {/* Mobile Menu */}

        <nav
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 ${
            open ? "block" : "hidden"
          }`}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
