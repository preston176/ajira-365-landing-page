// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import Contact from './pages/contact';
import About from "./pages/about";
import Careers from "./pages/careers";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import CookiePolicy from "./pages/cookie-policy";
import DataProcessing from "./pages/data-processing";
import { useScrollToHash } from './hooks/useScrollToHash';
import LogoTicker from './components/LogoTicker';
import { VideoShowcase } from './components/VideoShowcase';
// import { Testimonials } from './components/Testimonials'; // TODO: revisit, hidden for now

function Home() {

  useScrollToHash();
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <VideoShowcase />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-canvas w-full overflow-x-hidden font-sans text-ink">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-processing" element={<DataProcessing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;