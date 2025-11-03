import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import NewsEvents from "./pages/NewsEvents";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream text-text">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
