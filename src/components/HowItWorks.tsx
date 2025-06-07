import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Sparkles, ChevronRight, Stethoscope, LogIn, Calendar, PlayCircle, FileText, Mic, FileCheck, Edit, MessageSquare, Send, Play } from 'lucide-react';
import preOpVideo from '../assets/pre-op.mp4';
import appointmentsVideo from '../assets/appointment.mp4';
import aiUnderstandingVideo from '../assets/ai-3.mp4';
import startConsultationVideo from '../assets/start-consultation.mp4';
import loginVideo from '../assets/login.mp4';
import medicalSummaryVideo from '../assets/medical-2.mp4';
import prescriptionVideo from '../assets/prescription (online-video-cutter.com).mp4';
import endVideo from '../assets/end (online-video-cutter.com).mp4';
import { motion, AnimatePresence } from 'framer-motion';

interface PatientStep {
  title: string;
  subtitle: string;
}

interface DoctorStep {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const patientSteps: PatientStep[] = [
  {
    title: 'Scan QR Code',
    subtitle: 'Patient scans a QR code at the hospital or clinic to begin the digital pre-op process.'
  },
  {
    title: 'Fill Pre-Op Form',
    subtitle: 'Patient fills out a secure online form with personal and medical details, guided by AI.'
  },
  {
    title: 'Upload Medical Reports',
    subtitle: 'Upload any existing or recent medical reports for a more complete health profile.'
  },
  {
    title: 'Answer AI Health Questions',
    subtitle: 'AI asks relevant health questions to ensure all necessary information is collected.'
  },
  {
    title: 'Get Appointment Token',
    subtitle: "A unique token is generated for the patient's appointment, streamlining the check-in process."
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
    icon: PlayCircle
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
    subtitle: 'Complete consultation and automatically share prescription via WhatsApp/SMS.',
    icon: Send
  }
];

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTransform, setHoverTransform] = useState('');
  const [floatY, setFloatY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeDoctorStep, setActiveDoctorStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Floating animation using JS
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const y = Math.sin((elapsed / 4000) * 2 * Math.PI) * 12;
      setFloatY(y);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Mouse move handler for 3D parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovering(true);
    const rect = videoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = Math.max(Math.min(-y / 24, 10), -10);
    const rotateY = Math.max(Math.min(x / 24, 10), -10);
    const scale = 1.08;
    setHoverTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverTransform('');
  };

  // Combine floating and hover transforms
  const combinedTransform = `${hoverTransform || 'perspective(900px) scale(1)'} translateY(${floatY}px)`;

  const renderStepIcon = (step: DoctorStep) => {
    const Icon = step.icon;
    return <Icon className="w-16 h-16 text-emerald-500 relative z-10" />;
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-blue-50">
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
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Our platform makes the pre-op process seamless for patients. Follow these simple steps to get started and ensure your information is ready for your doctor.
            </p>
          </div>

          {/* Patient Flow Content */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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

            {/* Right: Video */}
            <div 
              className="flex-1 relative flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '900px' }}
            >
              <div className="relative w-[300px] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl"></div>
                <video
                  ref={videoRef}
                  src={preOpVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto rounded-3xl"
                  style={{ transform: combinedTransform }}
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
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
                          {/* Mobile View Demo Button */}
                          <button 
                            onClick={() => {
                              setActiveDoctorStep(idx);
                              setShowVideo(true);
                            }}
                            className="lg:hidden mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                          >
                            <Play className="w-4 h-4" />
                            <span>View Demo</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line */}
                    {idx < doctorSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-4 bg-gradient-to-b from-emerald-500/50 to-emerald-400/50 group-hover:from-emerald-500 group-hover:to-emerald-400 transition-colors duration-300"></div>
                    )}
                  </div>

                  {/* Mobile Video Section - Inline */}
                  <AnimatePresence>
                    {showVideo && activeDoctorStep === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden w-full mt-4 mb-8 overflow-hidden"
                      >
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="relative w-full"
                        >
                          {/* Video Container */}
                          <motion.div 
                            className="relative w-full"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <video
                              src={
                                activeDoctorStep === 0 ? loginVideo :
                                activeDoctorStep === 1 ? appointmentsVideo :
                                activeDoctorStep === 2 ? startConsultationVideo :
                                activeDoctorStep === 3 ? aiUnderstandingVideo :
                                activeDoctorStep === 4 ? medicalSummaryVideo :
                                activeDoctorStep === 5 ? prescriptionVideo :
                                activeDoctorStep === 6 ? endVideo :
                                ''
                              }
                              autoPlay
                              loop
                              muted
                              playsInline
                              controls
                              className="w-full aspect-video object-contain rounded-2xl"
                            />
                          </motion.div>

                          {/* Close Button */}
                          <motion.button 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            onClick={() => setShowVideo(false)}
                            className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                          >
                            Close Demo
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right: Video Section - Desktop Only */}
            <div className="flex-1 relative min-h-[1000px] hidden lg:block">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-12 left-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                {/* Animated Medical Icons */}
                <Stethoscope className="absolute top-24 right-24 w-12 h-12 text-emerald-400 opacity-60 animate-float-slow" />
                <FileText className="absolute bottom-24 left-24 w-10 h-10 text-emerald-300 opacity-50 animate-float" />
              </div>
              {[0,1,2,3,4,5,6].includes(activeDoctorStep) && (
                <div
                  className="absolute left-0 w-[500px] md:w-[650px] flex flex-col items-center transition-all duration-500"
                  style={{ 
                    top: `calc(${activeDoctorStep} * 100px)`,
                    paddingBottom: '100px'
                  }}
                >
                  {/* Video Container */}
                  <div className="relative w-full">
                    <video
                      src={
                        activeDoctorStep === 0 ? loginVideo :
                        activeDoctorStep === 1 ? appointmentsVideo :
                        activeDoctorStep === 2 ? startConsultationVideo :
                        activeDoctorStep === 3 ? aiUnderstandingVideo :
                        activeDoctorStep === 4 ? medicalSummaryVideo :
                        activeDoctorStep === 5 ? prescriptionVideo :
                        activeDoctorStep === 6 ? endVideo :
                        ''
                      }
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full aspect-video object-contain rounded-2xl"
                    />
                  </div>

                  {/* Description Card */}
                  <div className="mt-6 w-full max-w-md">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 transform transition-all duration-300 group-hover:scale-105">
                      <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                        {doctorSteps[activeDoctorStep]?.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {doctorSteps[activeDoctorStep]?.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    {doctorSteps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === activeDoctorStep
                            ? 'bg-emerald-500 w-4'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;