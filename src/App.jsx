import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MissionVision from "./pages/MissionVision";
import ManagementTeam from "./pages/ManagementTeam";
import SavingsAccounts from "./pages/SavingsAccounts";
import LoanProducts from "./pages/LoanProducts";
import InvestmentPlans from "./pages/InvestmentPlans";
import Insurance from "./pages/Insurance";
import NewsEvents from "./pages/NewsEvents";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Membership from "./pages/Membership";
import Downloads from "./pages/Downloads";
import ContactUs from "./pages/ContactUs";
import AppFooter from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header id="header">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/management-team" element={<ManagementTeam />} />
            <Route path="/savings-accounts" element={<SavingsAccounts />} />
            <Route path="/loan-products" element={<LoanProducts />} />
            <Route path="/investment-plans" element={<InvestmentPlans />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/career-opportunities" element={<Careers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </header>
        <main></main>
        <footer id="footer">
          <AppFooter/ >
        </footer>
       

      </div>
    </Router>
  );
};

export default App;
