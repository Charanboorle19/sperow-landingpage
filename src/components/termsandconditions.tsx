import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, Lock, AlertTriangle, Calendar, Mic, MessageSquare, ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
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

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions – For Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These Terms & Conditions govern the use of the Sperow AI platform by registered and verified doctors.
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
            These Terms & Conditions ("Terms") govern the use of the Sperow AI platform by registered and verified doctors. By using our services, you agree to comply with these Terms.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Eligibility & Account Access */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              1. Eligibility & Account Access
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Only licensed and verified medical professionals approved by Sperowerse Pvt. Ltd. may access the doctor portal.</li>
                <li>Login credentials are strictly personal and must not be shared with anyone, including hospital staff.</li>
                <li>You are responsible for all activity under your account.</li>
              </ul>
            </div>
          </section>

          {/* Appointment & Patient Data Access */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              2. Appointment & Patient Data Access
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You will have access only to patients who have booked or been assigned to you.</li>
                <li>All patient details, uploaded medical reports, AI-generated answers, and appointment data are confidential and must be used solely for clinical purposes.</li>
                <li>Unauthorized storage, copying, or sharing of patient data outside the platform is strictly prohibited.</li>
              </ul>
            </div>
          </section>

          {/* Voice Recording Feature */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              3. Voice Recording Feature
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex items-start gap-3">
                <Mic className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900">Voice Recording Requirements</p>
                  <p className="text-blue-800 text-sm mt-1">
                    Before starting a voice recording, you must obtain explicit patient consent for audio capture.
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Recorded conversations will be processed by AI to generate consultation notes.</li>
              <li>The accuracy of AI-generated notes is not guaranteed; you must review and correct them before use.</li>
            </ul>
          </section>

          {/* Non-Recording Feature */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              4. Non-Recording Feature (AI Analysis)
            </h2>
            <p className="mb-4">If you choose the non-recording option, AI will generate notes based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The patient's pre-filled answers,</li>
              <li>Uploaded medical reports,</li>
              <li>Or both combined.</li>
            </ul>
            <p className="mt-4">
              All AI-generated notes are editable and must be reviewed before prescribing treatment.
            </p>
          </section>

          {/* AI Chatbot in Doctor Notes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              5. AI Chatbot in Doctor Notes
            </h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900">AI Assistant Tool</p>
                  <p className="text-green-800 text-sm mt-1">
                    The integrated chatbot can answer queries related to the patient's case. The chatbot is an assistive tool and must not replace your professional medical judgment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prescription Generation & Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              6. Prescription Generation & Delivery
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI can generate prescriptions within ~10 seconds based on notes and analysis.</li>
                <li>You must verify and approve every prescription before it is sent to the patient.</li>
                <li>Follow-up appointments can be scheduled through the platform at your discretion.</li>
              </ul>
            </div>
          </section>

          {/* Patient Database & Historical Records */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              7. Patient Database & Historical Records
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You may access previous visit records of patients you have treated or have authorization to view.</li>
                <li>Each patient record contains a chatbot for quick queries — the output must be verified before clinical use.</li>
              </ul>
            </div>
          </section>

          {/* Data Privacy & Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              8. Data Privacy & Security
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900">Data Protection Requirements</p>
                  <p className="text-blue-800 text-sm mt-1">
                    You must comply with all applicable medical confidentiality laws and ethics.
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Patient data must not be exported or shared outside the platform without proper authorization.</li>
              <li>Any data breach or suspicious activity must be reported immediately to Sperow AI support.</li>
            </ul>
          </section>

          {/* Prohibited Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              9. Prohibited Conduct
            </h2>
            <p className="mb-4">You must not:</p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share your login credentials with unverified individuals.</li>
                <li>Use patient data for non-clinical purposes.</li>
                <li>Bypass platform security or manipulate AI-generated outputs for unethical purposes.</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              10. Limitation of Liability
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-900">Important Notice</p>
                  <p className="text-yellow-800 text-sm mt-1">
                    Sperow AI provides AI tools to assist in note-taking, analysis, and prescription generation. We are not liable for medical errors, misdiagnosis, or patient harm resulting from reliance on AI-generated outputs.
                  </p>
                </div>
              </div>
            </div>
            <p className="font-medium text-gray-900">
              Final responsibility for all diagnoses, treatment plans, and prescriptions lies solely with you, the doctor.
            </p>
          </section>

          {/* Suspension & Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              11. Suspension & Termination
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We may suspend or terminate your access if you violate these Terms or misuse the platform.</li>
                <li>Upon termination, all access to patient data will be revoked.</li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              12. Changes to Terms
            </h2>
            <p>
              We may update these Terms periodically. Continued use of the platform means you accept the revised Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              13. Contact Information
            </h2>
            <p className="mb-4">For support or questions:</p>
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
            By using SPEROWERSE services, you acknowledge that you have read, understood, and agree to be 
            bound by these Terms and Conditions for Doctors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
