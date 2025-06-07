import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, Mic, Lock, ClipboardList, MessageCircle, Users, Zap, Sparkles, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Save Up to 6 Minutes Per Patient",
    desc: "Significantly reduce administrative time, allowing more focus on diagnosis and patient interaction.",
    color: "text-blue-600 bg-blue-50"
  },
  {
    icon: FileText,
    title: "Diagnosis-Focused Care",
    desc: "AI handles detailed patient history and preliminary analysis, freeing doctors to concentrate on complex diagnostic tasks.",
    color: "text-purple-600 bg-purple-50"
  },
  {
    icon: Mic,
    title: "Voice-to-Text Prescriptions in Seconds",
    desc: "Generate prescriptions instantly through natural speech, eliminating manual typing and potential errors.",
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    icon: ClipboardList,
    title: "Automatic Medical Documentation",
    desc: "Comprehensive patient notes and summaries are auto-generated, ensuring accuracy and compliance with ease.",
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    icon: MessageCircle,
    title: "Real-time AI Medical Assistant",
    desc: "Access an intelligent AI agent for quick answers to medical doubts and information retrieval during consultations.",
    color: "text-cyan-600 bg-cyan-50"
  },
  {
    icon: FileText,
    title: "Quick Access to Critical Data",
    desc: "Instantly retrieve patient reports, summaries, and historical data from anywhere, enhancing informed decision-making.",
    color: "text-pink-600 bg-pink-50"
  },
  {
    icon: Lock,
    title: "Secured, Anywhere Access",
    desc: "All patient data is securely stored and accessible from any location via a web browser, ensuring privacy and convenience.",
    color: "text-blue-700 bg-blue-100"
  },
  {
    icon: Users,
    title: "Versatile for Clinics & Hospitals",
    desc: "The platform is designed to integrate seamlessly into diverse medical environments",
    color: "text-emerald-700 bg-emerald-100"
  },
  {
    icon: Zap,
    title: "Browser-Based, No Installation",
    desc: "Access the full suite of features directly through any web browser, requiring no cumbersome software installations.",
    color: "text-yellow-600 bg-yellow-50"
  }
];

const Benefits = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [floatY, setFloatY] = useState(0);
  const [deviceOrientation, setDeviceOrientation] = useState({ x: 0, y: 0 });

  // Device motion handler
  useEffect(() => {
    const handleDeviceMotion = (event: DeviceMotionEvent) => {
      if (event.rotationRate) {
        const { alpha, beta, gamma } = event.rotationRate;
        if (alpha !== null && beta !== null && gamma !== null) {
          setDeviceOrientation({
            x: Math.max(Math.min(gamma / 10, 10), -10),
            y: Math.max(Math.min(beta / 10, 10), -10)
          });
        }
      }
    };

    // Request permission for iOS devices
    if (typeof DeviceMotionEvent !== 'undefined' && 
        typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      (DeviceMotionEvent as any).requestPermission()
        .then((permissionState: string) => {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', handleDeviceMotion);
          }
        })
        .catch(console.error);
    } else {
      // For non-iOS devices
      window.addEventListener('devicemotion', handleDeviceMotion);
    }

    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
    };
  }, []);

  // Floating animation
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const y = Math.sin((elapsed / 4000) * 2 * Math.PI) * 8;
      setFloatY(y);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = Math.max(Math.min(-y / 24, 10), -10);
    const rotateY = Math.max(Math.min(x / 24, 10), -10);
    setMousePosition({ x: rotateY, y: rotateX });
  };

  return (
    <section 
      id="benefits" 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#f6faff] to-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Why Choose<br />
              <span className="text-blue-600">Sperow</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-center">Discover how our platform revolutionizes healthcare delivery with measurable benefits for both doctors and patients.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{
                transform: isHovering 
                  ? `perspective(900px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px) translateY(${floatY}px)`
                  : `perspective(900px) rotateX(${deviceOrientation.y}deg) rotateY(${deviceOrientation.x}deg) translateZ(10px) translateY(${floatY}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {/* Content Container */}
              <div className="relative p-8 flex flex-col h-full">
                {/* Icon and Number Container */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl ${benefit.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <span className="text-2xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 text-base leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;