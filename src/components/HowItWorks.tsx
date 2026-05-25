import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Stethoscope, LogIn, Calendar, FileText, FileCheck, Edit, MessageCircle, Ticket, Database, QrCode, ClipboardList, Upload, Plus, Send } from 'lucide-react';

interface PatientStep {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DoctorStep {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const patientSteps: PatientStep[] = [
  {
    title: 'Scan QR Code',
    subtitle: 'Patient scans a QR code at the hospital or clinic to begin the digital pre-op process.',
    icon: QrCode
  },
  {
    title: 'Fill Pre-Op Form',
    subtitle: 'Patient fills out a secure online form with personal and medical details, guided by AI.',
    icon: ClipboardList
  },
  {
    title: 'Upload Medical Reports',
    subtitle: 'Upload any existing or recent medical reports for a more complete health profile.',
    icon: Upload
  },
  {
    title: 'Answer AI Health Questions',
    subtitle: 'AI asks relevant health questions to ensure all necessary information is collected.',
    icon: MessageCircle
  },
  {
    title: 'Get Appointment Token',
    subtitle: "A unique token is generated for the patient's appointment, streamlining the check-in process.",
    icon: Ticket
  }
];

const doctorSteps: DoctorStep[] = [
  {
    title: 'Secure Login',
    subtitle: 'Doctor securely logs in to the platform with encrypted credentials.',
    icon: LogIn
  },
  {
    title: 'View Appointment List',
    subtitle: 'Access the dashboard showing upcoming appointments with token numbers and patient details.',
    icon: Calendar
  },
  {
    title: 'Start Consultation',
    subtitle: 'Begin the consultation process by accessing the patient\'s pre-op information.',
    icon: Plus
  },
  {
    title: 'Review AI Analysis',
    subtitle: 'View AI-generated summary of patient\'s pre-op form responses and health assessment.',
    icon: FileText
  },
  {
    title: 'AI Medical Summary',
    subtitle: 'Record the consultation conversation and receive detailed AI-generated medical summary.',
    icon: FileCheck
  },
  {
    title: 'Edit & Prescribe',
    subtitle: 'Review, edit the AI summary and generate the final prescription.',
    icon: Edit
  },
  {
    title: 'Close & Share',
            subtitle: 'Complete consultation and automatically share prescription.',
    icon: Send
  },
  {
    title: 'Patient Database & Reports',
    subtitle: 'Access comprehensive patient database, view historical reports, and query patient information using AI.',
    icon: Database
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeDoctorStep, setActiveDoctorStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const patientScrollRef = useRef<HTMLDivElement>(null);
  const doctorScrollRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-cycle for mobile
  useEffect(() => {
    if (!isMobile) return;

    const patientInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % patientSteps.length);
    }, 2000);

    const doctorInterval = setInterval(() => {
      setActiveDoctorStep((prev) => (prev + 1) % doctorSteps.length);
    }, 2000);

    return () => {
      clearInterval(patientInterval);
      clearInterval(doctorInterval);
    };
  }, [isMobile]);



  const scrollPatientLeft = () => {
    if (patientScrollRef.current) {
      patientScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollPatientRight = () => {
    if (patientScrollRef.current) {
      patientScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollDoctorLeft = () => {
    if (doctorScrollRef.current) {
      doctorScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollDoctorRight = () => {
    if (doctorScrollRef.current) {
      doctorScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="howitworks" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-blue-50">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Patient Flow Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm animate-fade-in group hover:shadow-md transition-all duration-300">
              <Sparkles className="w-4 h-4 text-blue-500 mr-2 group-hover:animate-spin" />
              <span className="text-sm font-medium text-blue-600">Patient Flow</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight mt-4">
              <span className="block text-gray-900">Getting Started is</span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
                Quick & Easy
              </span>
            </h2>
            <h3 className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Our platform makes the pre-op process seamless for patients. Follow these simple steps to get started and ensure your information is ready for your doctor.
            </h3>
          </div>

          {/* Patient Flow Content */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Mobile: Horizontal scrollable layout */}
            <div className="lg:hidden w-full">
              <div ref={patientScrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {patientSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80"
                  >
                    {/* Content Container */}
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Icon and Number Container */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-blue-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <step.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Text Content */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-800 text-sm leading-relaxed">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation Arrows */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button 
                  onClick={scrollPatientLeft}
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button 
                  onClick={scrollPatientRight}
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden lg:flex lg:flex-row gap-12 items-center w-full">
              {/* Left: Steps */}
              <div className="flex-1 space-y-3">
                {patientSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="group relative"
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number with Gradient Border */}
                      <div className="flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1 relative">
                        {/* Content Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                            {step.title}
                            <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line */}
                    {idx < patientSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-blue-400/50 group-hover:from-blue-500 group-hover:to-blue-400 transition-colors duration-300"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right: Icon Display */}
              <div className="flex-1 relative flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    {(() => {
                      const Icon = patientSteps[activeStep]?.icon || Sparkles;
                      return <Icon className="w-16 h-16 text-blue-500 mx-auto mb-4 transition-all duration-300" />;
                    })()}
                    <p className="text-blue-600 font-medium">
                      {patientSteps[activeStep]?.title || "Patient Journey"}
                    </p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Flow Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm animate-fade-in group hover:shadow-md transition-all duration-300">
              <Stethoscope className="w-4 h-4 text-emerald-500 mr-2 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-emerald-600">Doctor Flow</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight mt-4">
              <span className="block text-gray-900">Streamlined</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mt-2">
                Doctor's Interface
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Our AI-powered platform enhances the consultation process, making it more efficient and comprehensive for healthcare providers.
            </p>
          </div>

          {/* Doctor Flow Content */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Mobile: Horizontal scrollable layout */}
            <div className="lg:hidden w-full">
              <div ref={doctorScrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {doctorSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80"
                  >
                    {/* Content Container */}
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Icon and Number Container */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-emerald-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <step.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-lg font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Text Content */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-800 text-sm leading-relaxed">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation Arrows */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button 
                  onClick={scrollDoctorLeft}
                  className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button 
                  onClick={scrollDoctorRight}
                  className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden lg:flex lg:flex-row gap-16 items-center w-full">
              {/* Left: Steps */}
              <div className="flex-1 max-w-2xl space-y-3 relative">
                {doctorSteps.map((step, idx) => (
                  <div key={idx}>
                    <div 
                      className={`group relative`}
                      onMouseEnter={() => setActiveDoctorStep(idx)}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step Number with Gradient Border */}
                        <div className="flex-shrink-0 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-lg font-bold bg-gradient-to-br from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1 relative">
                          {/* Content Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {/* Content */}
                          <div className="relative p-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2">
                              {step.title}
                              <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Connecting Line */}
                      {idx < doctorSteps.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-4 bg-gradient-to-b from-emerald-500/50 to-emerald-400/50 group-hover:from-emerald-500 group-hover:to-emerald-400 transition-colors duration-300"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Icon Display */}
              <div className="flex-1 relative min-h-[600px] flex items-center justify-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                  <div className="absolute top-12 left-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 animate-blob"></div>
                  <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                  {/* Animated Medical Icons */}
                  <Stethoscope className="absolute top-24 right-24 w-12 h-12 text-emerald-400 opacity-60 animate-float-slow" />
                  <FileText className="absolute bottom-24 left-24 w-10 h-10 text-emerald-300 opacity-50 animate-float" />
                </div>
                
                <div className="relative w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    {(() => {
                      const Icon = doctorSteps[activeDoctorStep]?.icon || Stethoscope;
                      return <Icon className="w-20 h-20 text-emerald-500 mx-auto mb-4 transition-all duration-300" />;
                    })()}
                    <p className="text-emerald-600 font-medium text-lg">
                      {doctorSteps[activeDoctorStep]?.title || "Doctor's Workflow"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;