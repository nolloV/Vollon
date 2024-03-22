import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import { DarkModeProvider } from "./context";

function App() {
  return (
    <DarkModeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
