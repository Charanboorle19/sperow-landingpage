'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCrosshairs
} from 'react-icons/fa';

const Pricing = () => {
  const handleStartFreeTrial = async () => {
    try {
      console.log('🚀 Starting free trial...');
      const response = await fetch('https://b830064b2d9b.ngrok-free.app/api/payments/phonepe/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N0b3JfaWQiOjEsImVtYWlsIjoidGVzdDFAZ21haWwuY29tIiwicm9sZSI6ImRvY3RvciIsImV4cCI6MTc1NTYyOTg0MX0.pqWEfgDYSXtWoadWeJBhsnCHX67nkzfUJhnzTveP8WU'
        },
        body: JSON.stringify({
          doctor_id: 1,
          purpose: "addon",
          add_on_id: 1,
          client_redirect_path: "/payments/thank-you"
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Free trial started successfully:', data);
        
        // Redirect to payment page with all payment data
        if (data.merchant_order_id) {
          const paymentData = encodeURIComponent(JSON.stringify(data));
          window.location.href = `/payment?data=${paymentData}`;
        } else {
          console.error('❌ No merchant order ID in response');
        }
      } else {
        console.error('❌ Failed to start free trial:', response.status, response.statusText);
        // You can add error handling here (e.g., show error message)
      }
    } catch (error) {
      console.error('❌ Error starting free trial:', error);
      // You can add error handling here (e.g., show error message)
    }
  };

  const plans = [
    {
      name: 'Free Trial Plan',
      description: 'Try all features for 7 days completely free',
      price: '₹0',
      period: '/7 days',
      features: [
        
        'AI-Powered Chatbot',
        'Smart AI Assistant',
        'Auto Prescription Generation',
        'Appointment Booking System',
        'AI Doctor Notes Generation',
        'Editable Notes Panel',
        'Medical Report Analyzer',
        'Chatbot in Doctor Notes',
        'Patient History Access',
        'Follow-up Scheduling'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-green-600 text-white hover:bg-green-700',
      popular: false,
      trial: true
    },
    {
      name: 'Pro',
      description: 'Advanced tools for growing medical practices with multiple clinic support',
      price: '₹5,999',
      period: '/3 months',
      features: [
        'All Basic Features',
        
        'AI-Powered Chatbot',
        'Auto Prescription Generation',
        'Appointment Booking System',
        'AI Doctor Notes Generation',
        'Editable Notes Panel',
        'Multiple Clinic Support',
        'Priority Support'
      ],
      buttonText: 'Choose Pro',
      buttonStyle: 'bg-white text-purple-600 hover:bg-gray-50',
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      {/* Background Dotted Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose The Perfect Plan For Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the ideal plan that matches your healthcare practice requirements
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 h-[600px] ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-2xl scale-105' 
                  : 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    Recommended
                  </div>
                </div>
              )}

              {/* Trial Badge */}
              {plan.trial && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    Try All Features for Free
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-base ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features - Compact List */}
              <div className="space-y-3 mb-6 flex-1">
                {plan.features.slice(0, 8).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <FaCrosshairs className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm leading-relaxed font-medium ${
                      plan.popular ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={plan.trial ? handleStartFreeTrial : undefined}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.trial
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-gray-50' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
