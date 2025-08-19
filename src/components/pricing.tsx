'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMicrophone, 
  FaRobot, 
  FaComments,
  FaCrosshairs,
  FaArrowRight
} from 'react-icons/fa';

const Pricing = () => {
  const [selectedBundlePlan, setSelectedBundlePlan] = useState<{name: string; description: string} | null>(null);
  
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
        '5GB Secure Patient Data Storage (up to 20,000 patients)',
        '2 Hrs Voice Assistant per Month',
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
      description: 'Advanced tools for growing medical practices',
      price: '₹15,999',
      period: '/year',
      features: [
        'All Basic Features',
        '5GB Secure Patient Data Storage (up to 20,000 patients)',
        '2 Hrs Voice Assistant per Month',
        'AI-Powered Chatbot',
        'Auto Prescription Generation',
        'Appointment Booking System',
        'AI Doctor Notes Generation',
        'Priority Support'
      ],
      buttonText: 'Choose Pro',
      buttonStyle: 'bg-white text-purple-600 hover:bg-gray-50',
      popular: true
    },
    {
      name: 'Premium AI Bundle',
      description: 'Unlock advanced AI speed, accuracy, and voice-powered consultations — built for doctors who want peak performance and zero friction.',
      price: '',
      period: '',
      bundlePlans: [
        {
          name: 'Pro Boost - 3 Months Plan',
          description: 'Serve up to 3000 patients with premium voice AI access and priority processing Perfect for high-volume clinics.'
        },
        {
          name: 'Pro Boost - 1 Months Plan', 
          description: 'Serve up to 1000 patients with premium voice AI access and priority processing Perfect for high-volume clinics.'
        },
        {
          name: 'Voice Top-Up',
          description: 'Extra 2 hours voice AI, Flexible usage'
        }
      ],
      features: [
        'AI Performance Boost',
        'Priority AI processing Queue', 
        'Real-Time transcription',
        'Multi-language voice support'
      ],
      buttonText: '',
      buttonStyle: '',
      popular: false,
      bundle: true
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  : plan.bundle
                    ? 'bg-gradient-to-br from-white via-blue-50 via-purple-50 to-indigo-100 border border-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 text-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm'
                    : 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    Most Popular
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

              {/* Bundle Badge */}
              {plan.bundle && !selectedBundlePlan && (
                <div className="absolute -top-4 right-6">
                  <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
                    ✨ Premium Bundle
                  </div>
                </div>
              )}

              {/* Plan Header */}
              {!plan.bundle || !selectedBundlePlan ? (
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  {!plan.bundle && (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-base ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Bundle Plans Section */}
              {plan.bundle && !selectedBundlePlan && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center mb-6">Plans on Bundle plan</h4>
                  <div className="space-y-4">
                    {plan.bundlePlans.map((bundlePlan, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-2xl p-5 text-white cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                        onClick={() => setSelectedBundlePlan(bundlePlan)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <div className="flex-1">
                            <h5 className="font-bold text-sm mb-2 group-hover:text-blue-100 transition-colors duration-300">{bundlePlan.name}</h5>
                            <p className="text-xs text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">{bundlePlan.description}</p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                              <FaArrowRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected Bundle Plan Detail View */}
              {plan.bundle && selectedBundlePlan && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  {/* Back Button */}
                  <div className="flex items-center mb-4">
                    <button 
                      onClick={() => setSelectedBundlePlan(null)}
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <FaArrowRight className="w-4 h-4 rotate-180 mr-2" />
                      <span className="text-sm font-medium">Back to plans</span>
                    </button>
                  </div>

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedBundlePlan.name}</h3>
                    {selectedBundlePlan.name.includes('Voice Top-Up') && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">
                        Need more voice time? Instantly add 2 more hours of AI-powered transcription.
                        <br />
                        <span className="font-medium">Flexible and pay-as-you-go.</span>
                      </p>
                    )}
                    {selectedBundlePlan.name.includes('3 Months') && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">
                        Serve up to 3000 patients with premium voice AI access and priority processing
                        <br />
                        <span className="font-medium">Perfect for high-volume clinics.</span>
                      </p>
                    )}
                    {selectedBundlePlan.name.includes('1 Months') && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">
                        Serve up to 1000 patients with premium voice AI access and priority processing
                        <br />
                        <span className="font-medium">Perfect for high-volume clinics.</span>
                      </p>
                    )}
                  </div>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-4 text-white cursor-pointer hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">
                          {selectedBundlePlan.name.includes('3 Months') 
                            ? '3,599 rs / 3 Months'
                            : selectedBundlePlan.name.includes('1 Months')
                            ? '₹1,439 / 1 Month'
                            : '₹80 / 2 Hours'
                          }
                        </span>
                        <FaArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="mb-6">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <h4 className="text-lg font-bold text-teal-700 uppercase mx-4">
                          {selectedBundlePlan.name.includes('Voice Top-Up') ? 'Features' : 'Benefits'}
                        </h4>
                        <div className="flex-1 h-px bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {selectedBundlePlan.name.includes('Voice Top-Up') ? (
                        // Voice Top-Up specific features
                        <>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <FaMicrophone className="w-3 h-3 text-teal-600" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">2 hours of AI voice transcription</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <FaRobot className="w-3 h-3 text-teal-600" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">Instant activation</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <FaComments className="w-3 h-3 text-teal-600" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">Multi-language voice support</span>
                          </div>
                        </>
                      ) : (
                        // Regular benefits for Pro Boost plans
                        plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <FaCrosshairs className="w-3 h-3 text-teal-600" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {selectedBundlePlan.name.includes('1 Months') 
                                ? feature.replace('3000', '1000')
                                : feature
                              }
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get started
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}

              {/* Features - Compact List */}
              {(!plan.bundle || !selectedBundlePlan) && !plan.bundle ? (
                <div className="space-y-3 mb-6 flex-1">
                  {plan.features.slice(0, 6).map((feature, featureIndex) => (
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
              ) : null}

              {/* CTA Button */}
              {!plan.bundle && (
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
              )}
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
