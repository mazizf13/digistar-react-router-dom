import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Menentukan apakah item navigasi aktif
  const isActive = (path) => location.pathname === path;

  return (
    <header className="px-36 text-white bg-white sticky top-0 flex justify-between items-center">
      {/* Logo di sebelah kiri */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/logo-padi-umkm.svg"
            alt="Logo"
            className="h-16 w-16 mr-2"
          />
        </Link>
      </div>

      {/* Navigasi di tengah */}
      <nav>
        <ul className="flex space-x-12">
          <li>
            <Link
              to="/"
              className={`text-black ${isActive("/") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-black ${isActive("/about") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Tentang Kami
            </Link>
          </li>

          {/* Dropdown Gabung */}
          <li className="relative group">
            <Link
              to="#"
              className={`text-black ${isActive("/become-seller") || isActive("/become-buyer") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Gabung
            </Link>
            <ul className="absolute left-0 mt-2 bg-white text-sky-600 rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
              <li>
                <Link
                  to="/become-seller"
                  className={`block px-4 py-2 ${isActive("/become-seller") ? "font-bold underline" : "hover:bg-sky-600 hover:text-white"}`}
                >
                  Gabung Jadi Penjual
                </Link>
              </li>
              <li>
                <Link
                  to="/become-buyer"
                  className={`block px-4 py-2 ${isActive("/become-buyer") ? "font-bold underline" : "hover:bg-sky-600 hover:text-white"}`}
                >
                  Gabung Jadi Pembeli
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/help"
              className={`text-black ${isActive("/help") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Bantuan
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className={`text-black ${isActive("/media") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-black ${isActive("/contact") ? "font-bold underline" : "hover:text-sky-300"}`}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link
          to="/shop"
          className="bg-sky-200 text-sky-600 px-4 py-2 rounded hover:bg-sky-300 hover:text-white transition"
        >
          Belanja di PaDi UMKM
        </Link>
      </div>
    </header>
  );
};

export default Header;
