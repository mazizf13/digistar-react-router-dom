import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sky-600 p-4 text-white sticky top-0 z-50">
      <nav>
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="hover:text-sky-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-sky-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-sky-300">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/media" className="hover:text-sky-300">
              Media
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
