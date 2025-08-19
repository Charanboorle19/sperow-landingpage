import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Pricing from './components/pricing';
import Payment from './components/payment';
import Footer from './components/Footer';
import TermsAndConditions from './components/termsandconditions';
import PrivacyAndPolicy from './components/Privacyandpolicy';
import RefundPolicy from './components/RefundPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <AboutUs />
                <HowItWorks />
                <Features />
                <Benefits />
                <Pricing />
                <ContactForm />
              </main>
              <Footer />
            </>
          } />
          
          {/* Payment Page */}
          <Route path="/payment" element={<Payment />} />
          
          {/* Terms and Conditions Page - Standalone */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          
          {/* Privacy Policy Page - Standalone */}
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
          
          {/* Refund Policy Page - Standalone */}
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;