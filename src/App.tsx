import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { BLOG_ROUTES, HOME_PATH } from './constants/routes';

import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';

import Payment from './components/payment';
import PrivacyAndPolicy from './components/Privacyandpolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsAndConditions from './components/termsandconditions';

import BlogAIClinicalDocs from './components/BlogAIClinicalDocs';
import BlogClinicManagement from './components/BlogClinicManagement';
import BlogEMRIndia from './components/BlogEMRIndia';
import BlogPreview from './components/BlogPreview';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import Speciality from './components/Speciality';

/* =========================
   Reusable Landing Page
========================= */

function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Features />

        <HowItWorks />

        <Speciality />

        <Benefits />

        <BlogPreview />

        <FAQ />

        <AboutUs />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        <Routes>

          <Route
            path="/"
            element={<Navigate to={HOME_PATH} replace />}
          />

          {/* =========================
              Landing Page
          ========================= */}
          <Route
            path={HOME_PATH}
            element={
              <>
                <Helmet>
                  <title>
                    OPD Management Software for Clinics & Doctors | Sperow AI
                  </title>

                  <meta
                    name="description"
                    content="AI-powered OPD management software for clinics and hospitals. Manage appointments, patient records, prescriptions, billing, and workflows efficiently with Sperow AI."
                  />

                  <meta
                    name="keywords"
                    content="OPD management software, clinic management software, hospital software, EMR software, doctor software, patient management system"
                  />

                  <link
                    rel="canonical"
                    href="https://yourdomain.com/opd-management-software"
                  />
                </Helmet>

                <LandingPage />
              </>
            }
          />

          {/* =========================
              Blogs
          ========================= */}

          <Route
            path="/blogs/ai-clinical-documentation"
            element={<Navigate to={BLOG_ROUTES.aiClinicalDocs} replace />}
          />

          <Route
            path="/blogs/best-emr-software-india"
            element={<Navigate to={BLOG_ROUTES.emrIndia} replace />}
          />

          <Route
            path="/blogs/clinic-management-software"
            element={<Navigate to={BLOG_ROUTES.clinicManagement} replace />}
          />

          <Route
            path="/blogs/How-AI-Helps-Doctors-Reduce-Clinical-Documentation-Time"
            element={<Navigate to={BLOG_ROUTES.aiClinicalDocs} replace />}
          />

          <Route
            path="/blogs/Best-EMR-Software-for-Doctors-in-India"
            element={<Navigate to={BLOG_ROUTES.emrIndia} replace />}
          />

          <Route
            path="/blogs/How-to-Choose-the-Right-Clinic-Management-Software"
            element={<Navigate to={BLOG_ROUTES.clinicManagement} replace />}
          />

          <Route
            path={BLOG_ROUTES.aiClinicalDocs}
            element={<BlogAIClinicalDocs />}
          />

          <Route
            path={BLOG_ROUTES.emrIndia}
            element={<BlogEMRIndia />}
          />

          <Route
            path={BLOG_ROUTES.clinicManagement}
            element={<BlogClinicManagement />}
          />

          {/* =========================
              Payment Page
          ========================= */}

          <Route
            path="/payment"
            element={
              <>
                <Helmet>
                  <title>
                    Secure Payment | Sperow AI
                  </title>

                  <meta
                    name="description"
                    content="Complete secure payments for Sperow AI healthcare software services."
                  />

                  <link
                    rel="canonical"
                    href="https://yourdomain.com/payment"
                  />
                </Helmet>

                <Payment />
              </>
            }
          />

          {/* =========================
              Terms & Conditions
          ========================= */}

          <Route
            path="/terms-and-conditions"
            element={
              <>
                <Helmet>
                  <title>
                    Terms and Conditions | Sperow AI
                  </title>

                  <meta
                    name="description"
                    content="Read the terms and conditions for using Sperow AI clinical software and healthcare services."
                  />

                  <link
                    rel="canonical"
                    href="https://yourdomain.com/terms-and-conditions"
                  />
                </Helmet>

                <TermsAndConditions />
              </>
            }
          />

          {/* =========================
              Privacy Policy
          ========================= */}

          <Route
            path="/privacy-policy"
            element={
              <>
                <Helmet>
                  <title>
                    Privacy Policy | Sperow AI
                  </title>

                  <meta
                    name="description"
                    content="Learn how Sperow AI protects patient and healthcare data through secure privacy practices."
                  />

                  <link
                    rel="canonical"
                    href="https://yourdomain.com/privacy-policy"
                  />
                </Helmet>

                <PrivacyAndPolicy />
              </>
            }
          />

          {/* =========================
              Refund Policy
          ========================= */}

          <Route
            path="/refund-policy"
            element={
              <>
                <Helmet>
                  <title>
                    Refund Policy | Sperow AI
                  </title>

                  <meta
                    name="description"
                    content="Read the refund and cancellation policy for Sperow AI healthcare software services."
                  />

                  <link
                    rel="canonical"
                    href="https://yourdomain.com/refund-policy"
                  />
                </Helmet>

                <RefundPolicy />
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;