import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Lock, Calendar, Mic, ArrowLeft, Eye, Database, Bell, UserCheck } from 'lucide-react';

const PrivacyAndPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Back Button Only */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy – For Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Privacy Policy explains how we collect, use, store, and protect information when you use our platform.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: {new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>SPEROWERSE PRIVATE LIMITED</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <p className="text-blue-900 font-medium">
            Sperow AI values the privacy and confidentiality of doctors and the patient data they access through our system. This Privacy Policy explains how we collect, use, store, and protect information when you, as a registered and verified doctor, use our platform.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              1. Information We Collect
            </h2>
            <p className="mb-4">We collect and process the following types of information when you use the doctor portal:</p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  Account Information
                </h3>
                <p>Name, contact details, medical registration number, and verification documents provided during onboarding.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  Login & Access Data
                </h3>
                <p>Username, encrypted password, device information, and login activity logs.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Consultation Data
                </h3>
                <p>Patient details, pre-filled answers, uploaded medical reports, AI-generated consultation notes, prescriptions, and follow-up schedules.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-blue-600" />
                  Voice Recording Data (if enabled)
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Audio recordings of doctor-patient consultations (only with patient consent).</li>
                  <li>AI-generated transcriptions from the recordings.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Usage Data
                </h3>
                <p>Platform interaction logs, feature usage patterns, and chatbot queries.</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the collected information to:</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide secure access to your doctor account.</li>
                <li>Display your patient appointments and historical records.</li>
                <li>Generate AI-assisted consultation notes and prescriptions.</li>
                <li>Enable chatbots for patient history queries.</li>
                                 <li>Deliver prescriptions to patients.</li>
                <li>Improve AI models and platform performance (with anonymized data).</li>
                <li>Detect and prevent security breaches or unauthorized access.</li>
              </ul>
            </div>
          </section>

          {/* Data Privacy & Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              3. Data Privacy & Security
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900">Security Measures</p>
                  <p className="text-blue-800 text-sm mt-1">
                    All patient and doctor data is encrypted during storage and transmission.
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to patient records is restricted to authorized and verified doctors only.</li>
              <li>Voice recordings are stored only for the duration needed for transcription and are deleted afterward unless retention is required for compliance.</li>
              <li>We follow industry-standard security practices but cannot guarantee complete protection from cyber threats.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              4. Data Sharing
            </h2>
            <p className="mb-4">We do not sell or share your data with third parties, except:</p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                                 <li>With patient consent for prescription delivery.</li>
                <li>With authorized hospital administrators for operational purposes.</li>
                <li>If required by law to comply with legal obligations or court orders.</li>
              </ul>
            </div>
          </section>

          {/* Your Responsibilities as a Doctor */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              5. Your Responsibilities as a Doctor
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain the confidentiality of all patient data accessed through the platform.</li>
                <li>Ensure that patient consent is obtained before recording or transmitting any personal information.</li>
                <li>Review AI-generated outputs before using them for medical decisions.</li>
                <li>Keep your account credentials secure.</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              6. Data Retention
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Patient records remain stored in the system as part of their medical history, unless deletion is requested in compliance with applicable laws.</li>
                <li>Doctor account information will be retained as long as the account remains active, or longer if required for legal compliance.</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              7. Your Rights
            </h2>
            <p className="mb-4">As a doctor using Sperow AI, you can:</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your account and consultation history.</li>
                <li>Request updates or corrections to your profile data.</li>
                <li>Request deletion of your account (subject to legal retention requirements).</li>
              </ul>
            </div>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              8. Changes to This Privacy Policy
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-900">Policy Updates</p>
                  <p className="text-yellow-800 text-sm mt-1">
                    We may update this Privacy Policy from time to time. You will be notified of significant changes via email or in-platform notifications. Continued use of the platform after updates indicates acceptance of the revised policy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              9. Contact Information
            </h2>
            <p className="mb-4">For privacy-related questions or requests, contact us:</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">SPEROWERSE PRIVATE LIMITED</p>
              <p className="text-gray-600">📧 contact@sperow.in</p>
              <p className="text-gray-600">📍 Banjara hills Road no 3, Hyderabad, Telangana, India</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            By using SPEROWERSE services, you acknowledge that you have read, understood, and agree to our 
            Privacy Policy for Doctors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
