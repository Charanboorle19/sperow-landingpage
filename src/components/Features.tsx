import React, { useState, useRef, useEffect } from 'react';
import { Brain, FileUp, History, Mic, Pill, MessageCircle, Smartphone, Users, Zap, Stethoscope, ClipboardList, FileText, Clock, MessageSquare, Send, QrCode } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI-Analysed Pre-Op Data",
    desc: "View structured patient risk factors, vitals, and alerts before starting consultation.",
    appointment: "#",
    price: "#"
  },
  {
    icon: FileUp,
    title: "Uploaded Reports Integration",
    desc: "Patient-uploaded reports are shown to doctor during consultation (PDFs, images, test results).",
    appointment: "#",
    price: "#"
  },
  {
    icon: History,
    title: "Full Patient History Access",
    desc: "Doctors can view previous consultation notes & reports if patient revisits.",
    appointment: "#",
    price: "#"
  },
  {
    icon: Mic,
    title: "AI Voice-to-Text Medical Notes",
    desc: "Record conversation and auto-generate medical notes — no need for manual writing.",
    appointment: "#",
    price: "#"
  },
  {
    icon: ClipboardList,
    title: "Auto Prescription Generation",
    desc: "AI drafts prescriptions based on conversation. Doctor simply reviews & confirms.",
    appointment: "#",
    price: "#"
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant for Doctors",
    desc: "Ask AI medical questions, get instant support during consultation.",
    appointment: "#",
    price: "#"
  },
  {
    icon: Send,
    title: "WhatsApp/SMS Prescription Delivery",
    desc: "Patients instantly receive prescription post-consultation.",
    appointment: "#",
    price: "#"
  },
  {
    icon: QrCode,
    title: "Queue & Token Management",
    desc: "Seamless patient flow — doctors manage current & upcoming patients easily.",
    appointment: "#",
    price: "#"
  }
];

const AnimatedBlobs = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#blur1)">
      <ellipse cx="120" cy="120" rx="80" ry="60" fill="#2563eb" fillOpacity="0.35">
        <animate attributeName="cx" values="120;180;120" dur="6s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="280" cy="180" rx="60" ry="40" fill="#1e40af" fillOpacity="0.25">
        <animate attributeName="cy" values="180;120;180" dur="7s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="200" cy="100" rx="40" ry="30" fill="#60a5fa" fillOpacity="0.18">
        <animate attributeName="cx" values="200;250;200" dur="5s" repeatCount="indefinite" />
      </ellipse>
    </g>
    <defs>
      <filter id="blur1" x="-50" y="-50" width="500" height="400" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="30" />
      </filter>
    </defs>
  </svg>
);

const Features = () => {
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
      // 8px up and down, 4s period
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
      id="features" 
      className="py-24 relative bg-gradient-to-b from-[#f6faff] to-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#f0f0f0_25%,#f0f0f0_50%,transparent_50%,transparent_75%,#f0f0f0_75%)] [background-size:64px_64px] opacity-10"></div>
      
      {/* Interactive Gradient */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Practice with<br />
              <span className="text-blue-600">AI-Powered Healthcare Tools</span>
            </h2>
            <p className="text-gray-500 max-w-xl">Experience the future of healthcare with intelligent features that streamline workflows and enhance patient care.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative group rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 px-7 py-8 flex flex-col justify-between min-h-[280px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:z-20 hover:bg-gradient-to-br hover:from-blue-700/80 hover:to-blue-500/90 hover:border-blue-400"
              style={{
                transform: isHovering 
                  ? `perspective(900px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px) translateY(${floatY}px)`
                  : `perspective(900px) rotateX(${deviceOrientation.y}deg) rotateY(${deviceOrientation.x}deg) translateZ(10px) translateY(${floatY}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {/* Listed Number (watermark style, behind content) */}
              <span className="absolute top-4 left-4 text-8xl font-extrabold text-blue-900/10 select-none pointer-events-none z-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-60 blur transition-all duration-500 group-hover:blur-xl" />
              {/* Glowing border on hover */}
              <div className="absolute -inset-1 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-80 group-hover:blur-md transition-all duration-500 pointer-events-none" />
              {/* Card content */}
              <div className="relative z-10 flex flex-col gap-3 pt-8 pl-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-none">{service.title}</h3>
                </div>
                <p className="text-gray-600 group-hover:text-white text-sm transition-none">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;