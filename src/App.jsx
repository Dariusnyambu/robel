import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="py-32" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
