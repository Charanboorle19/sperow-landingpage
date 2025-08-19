'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCreditCard, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaSpinner,
  FaPhone,
  FaLock
} from 'react-icons/fa';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'processing' | 'success' | 'failed'>('loading');
  const [paymentData, setPaymentData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the payment data from URL params
    const paymentDataParam = searchParams.get('data');
    
    if (paymentDataParam) {
      try {
        const paymentData = JSON.parse(decodeURIComponent(paymentDataParam));
        console.log('🔍 Payment page loaded with data:', paymentData);
        setPaymentData(paymentData);
        
        // Check if we have the PhonePe token URL
        if (paymentData.token_url) {
          console.log('🚀 Loading PhonePe payment gateway...');
          setPaymentStatus('success'); // Show the payment form directly
        } else {
          console.error('❌ No PhonePe token URL found');
          setError('Payment gateway URL not found');
          setPaymentStatus('failed');
        }
      } catch (error) {
        console.error('❌ Error parsing payment data:', error);
        setError('Invalid payment data');
        setPaymentStatus('failed');
      }
    } else {
      setError('No payment data found');
      setPaymentStatus('failed');
    }
  }, [searchParams]);



  const renderPaymentContent = () => {
    switch (paymentStatus) {
      case 'loading':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <FaSpinner className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Initializing Payment</h2>
            <p className="text-gray-600">Please wait while we set up your payment...</p>
          </motion.div>
        );

      case 'processing':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="relative mb-6">
              <FaSpinner className="w-16 h-16 text-blue-600 animate-spin mx-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Payment Gateway</h2>
            <p className="text-gray-600">Please wait while we load the PhonePe payment gateway...</p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                <FaShieldAlt className="text-green-500" />
                <span>Secure SSL encryption</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                <FaLock className="text-green-500" />
                <span>PCI DSS compliant</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-blue-500">
                <FaPhone className="text-blue-500" />
                <span>PhonePe Payment Gateway</span>
              </div>
            </div>
          </motion.div>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhone className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Payment</h2>
            <p className="text-gray-600 mb-6">Please complete your payment using the PhonePe gateway below.</p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono text-gray-900">{paymentData?.merchant_order_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-green-600">₹{paymentData?.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-blue-600 font-semibold">Payment Pending</span>
                </div>
              </div>
            </div>

            {/* Embedded PhonePe Payment Gateway */}
            {paymentData?.token_url && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-center">PhonePe Payment Gateway</h3>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4">
                  <iframe
                    src={paymentData.token_url}
                    title="PhonePe Payment Gateway"
                    className="w-full h-96 border-0 rounded-lg"
                    sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  If the payment form doesn't load, you can also{' '}
                  <button
                    onClick={() => window.open(paymentData.token_url, '_blank')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    open it in a new tab
                  </button>
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Return to Homepage
              </button>
            </div>
          </motion.div>
        );

      case 'failed':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
            <p className="text-gray-600 mb-6">{error || 'Something went wrong with your payment.'}</p>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/#pricing'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Return to Homepage
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sperow Payment</h1>
          <p className="text-gray-600">Secure payment processing</p>
        </motion.div>

        {/* Payment Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          {renderPaymentContent()}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLock className="text-green-500" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <span>PhonePe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
