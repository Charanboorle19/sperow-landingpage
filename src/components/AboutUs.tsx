import React from 'react';
import { Sparkles, Users, User, UserPlus, Heart, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-24 w-full relative overflow-hidden bg-gradient-to-br from-white via-green-50/50 to-emerald-50/30">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated Medical Icons */}
      <Users className="absolute left-10 top-10 w-10 h-10 text-green-300 opacity-50 animate-float-slow" />
      <UserPlus className="absolute right-16 top-24 w-9 h-9 text-emerald-300 opacity-40 animate-float" />
      <User className="absolute left-32 bottom-16 w-10 h-10 text-green-300 opacity-40 animate-float-delayed" />
      <Sparkles className="absolute right-24 bottom-10 w-8 h-8 text-emerald-300 opacity-50 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-100 shadow-sm animate-fade-in group hover:shadow-md transition-all duration-300 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2 group-hover:animate-spin" />
            <span className="text-sm font-medium text-green-500">Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Transforming Healthcare with <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">AI Innovation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering healthcare professionals with cutting-edge AI solutions to enhance patient care and streamline medical workflows.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-300 to-emerald-300 shadow-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">About Sperow</h3>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Sperow is an AI-powered platform designed to assist doctors by simplifying patient consultations and Pre-OPD processes. Our AI-powered tools help streamline workflows, improve efficiency, and enhance patient care — so doctors can focus on what matters most.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Patient-First</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Brain className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">AI-Powered</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Efficient</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">Collaborative</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 