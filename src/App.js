import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Media from "./components/Media";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
