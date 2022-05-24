import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import SingleMember from "./Pages/SingleMember";
import Portfolio from "./Pages/Portfolio";
import SinglePortfolio from "./Pages/SinglePortfolio";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Portfolio />} />
        <Route path="contact" element={<Portfolio />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:portfolioId" element={<SinglePortfolio />} />
        <Route path="teams" element={<Team />} />
        <Route path="teams/:teamId" element={<SingleMember />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
