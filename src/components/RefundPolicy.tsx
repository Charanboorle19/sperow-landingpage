import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, ArrowLeft, XCircle, AlertTriangle, DollarSign } from 'lucide-react';

const RefundPolicy = () => {
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

      {/* Refund Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Refund & Cancellation Policy – For Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Refund & Cancellation Policy applies to subscription fees, service charges, and other payments made by doctors or healthcare institutions.
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
            This Refund & Cancellation Policy ("Policy") applies to subscription fees, service charges, and other payments made by doctors or healthcare institutions for access to Sperow AI features and services. By subscribing to or using our platform, you agree to this Policy.
          </p>
        </div>

        {/* Refund Policy Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Subscription Fees & Payments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              1. Subscription Fees & Payments
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All payments for subscriptions or service packages must be made in advance through the payment methods provided on the platform.</li>
                <li>Prices are subject to change, but any changes will apply from the next billing cycle and will be communicated in advance.</li>
              </ul>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              2. Cancellation Policy
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-blue-600" />
                  Doctor-Initiated Cancellation
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may cancel your subscription at any time from your account settings or by contacting support.</li>
                  <li>Cancellation will stop future billings, but no partial refunds will be issued for unused days in the current billing cycle.</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Sperow AI-Initiated Cancellation
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We reserve the right to cancel or suspend your account for violation of Terms & Conditions or non-payment.</li>
                  <li>No refunds will be issued in case of termination due to policy violations.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              3. Refund Eligibility
            </h2>
            <p className="mb-4">Refunds are considered only in the following cases:</p>
            <div className="bg-green-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Duplicate Payment</strong> – If you are charged twice for the same subscription.</li>
                <li><strong>Technical Issues</strong> – If you are unable to use the service due to platform-side technical faults for more than 5 consecutive days, and the issue is verified by our technical team.</li>
                <li><strong>Service Non-Delivery</strong> – If a paid feature is not activated within 3 working days of payment.</li>
              </ul>
            </div>
          </section>

          {/* Non-Refundable Payments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              4. Non-Refundable Payments
            </h2>
            <div className="bg-red-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fees for partially used subscription periods.</li>
                <li>Setup, onboarding, or training fees (if applicable).</li>
                <li>Payments for one-time services after they have been delivered.</li>
              </ul>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              5. Refund Process
            </h2>
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Eligible refund requests must be submitted to <strong>contact@sperow.in</strong> within 7 days of the payment date.</li>
                <li>Once approved, refunds will be processed within 7–10 working days through the original payment method.</li>
                <li>Processing times may vary depending on your bank or payment provider.</li>
              </ul>
            </div>
          </section>

          {/* Disputes & Chargebacks */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              6. Disputes & Chargebacks
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-900">Important Notice</p>
                  <p className="text-yellow-800 text-sm mt-1">
                    If you initiate a chargeback without first contacting our support team, your account may be suspended until the dispute is resolved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              7. Contact for Refunds
            </h2>
            <p className="mb-4">For cancellation or refund requests, contact:</p>
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
            Refund & Cancellation Policy for Doctors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
