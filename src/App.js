import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Media from "./components/Media";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Details from "./components/Details";
import BecomeSeller from "./components/BecomeSeller";
import BecomeBuyer from "./components/BecomeBuyer";
import Shop from "./components/Shop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // redirect ke halaman login, jika true redirect ke dashboard

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Header />}
        <div className="container mx-auto">
          <Routes>
            {/* Conditional rendering, ngecek sudah login apa belum */}
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <Login onLogin={() => setIsLoggedIn(true)} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={isLoggedIn ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/become-seller"
              element={isLoggedIn ? <BecomeSeller /> : <Navigate to="/login" />}
            />
            <Route
              path="/become-buyer"
              element={isLoggedIn ? <BecomeBuyer /> : <Navigate to="/login" />}
            />
            <Route
              path="/help"
              element={isLoggedIn ? <Help /> : <Navigate to="/login" />}
            />
            <Route
              path="/media"
              element={isLoggedIn ? <Media /> : <Navigate to="/login" />}
            />
            <Route
              path="/contact"
              element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
            />
            <Route
              path="/shop"
              element={isLoggedIn ? <Shop /> : <Navigate to="/login" />}
            />
            <Route path="/details/:subTitle" element={<Details />} />
            <Route path="*" element={<Navigate to="/login" />} />
            {/* Kalau belum login dia hanya bisa akses halaman login */}
            {/* Belum bisa login */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
