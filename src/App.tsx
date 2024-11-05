import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Stays } from "./components/Stays";
import { Experiences } from "./components/Experience";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 ml-5 mr-5">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
