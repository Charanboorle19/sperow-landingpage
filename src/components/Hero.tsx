import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Heart, Zap, Sparkles } from 'lucide-react';
import heroImage1 from '../assets/Screenshot 2025-05-14 200319.png';
import heroImage2 from '../assets/Screenshot 2025-06-06 234027.png';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTransform, setHoverTransform] = useState('');
  const [floatY, setFloatY] = useState(0);
  const [frontImage, setFrontImage] = useState<1 | 2>(1);
  const [deviceOrientation, setDeviceOrientation] = useState({ x: 0, y: 0 });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  // Floating animation using JS
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      // 12px up and down, 4s period
      const y = Math.sin((elapsed / 4000) * 2 * Math.PI) * 12;
      setFloatY(y);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Swap images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontImage((prev) => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move handler for 3D parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovering(true);
    const rect = imageRef.current?.getBoundingClientRect();
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

  // Combine floating, hover, and device orientation transforms
  const combinedTransform = isHovering 
    ? hoverTransform 
    : `perspective(900px) rotateX(${deviceOrientation.y}deg) rotateY(${deviceOrientation.x}deg) scale(1)`;
  const finalTransform = `${combinedTransform} translateY(${floatY}px)`;

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-blue-50 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left: Text Content */}
      <div className="relative z-10 flex-1 max-w-xl px-4 sm:px-6 lg:px-8 text-center md:text-left space-y-6 md:space-y-8 animate-fade-in-up mt-8 md:mt-0">
        <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm animate-fade-in group hover:shadow-md transition-all duration-300 mt-16 md:mt-0">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-2 group-hover:animate-spin" />
          <span className="text-xs md:text-sm font-medium text-blue-600">AI-Powered Healthcare Platform</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="block text-gray-900 mb-2 md:mb-3">Streamline Your</span>
          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Clinical Workflows
          </span>
          <span className="block text-gray-900 mt-2 md:mt-3">with AI</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
           <span className="font-semibold text-blue-600"> A platform that makes managing clinical workflows seamless and efficient.</span> 
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start pt-2">
          <button 
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center">
              Contact us for Demo
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-xs md:text-sm pt-4">
          {[
            { icon: CheckCircle, text: "No setup required", color: "text-green-500" }
          ].map((item, index) => (
            <div key={index} className="flex items-center group hover:scale-105 transition-transform duration-200">
              <item.icon className={`h-3 w-3 md:h-4 md:w-4 ${item.color} mr-2 group-hover:animate-pulse`} />
              <span className="text-gray-600 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Animated Images */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center w-full h-full min-w-[280px] min-h-[280px] md:min-w-[420px] md:min-h-[420px] mt-4 md:mt-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '900px' }}
      >
        {/* Floating blobs behind images */}
        <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
        {/* Images, layered and animated */}
        <img
          ref={frontImage === 1 ? imageRef : undefined}
          src={heroImage1}
          alt="AI Healthcare Hero 1"
          className={`rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border-2 md:border-4 border-white/80 object-contain max-w-[320px] md:max-w-[850px] max-h-[320px] md:max-h-[440px] w-auto h-auto transition-all duration-700 ease-out absolute ${frontImage === 1 ? 'z-20 scale-100 opacity-100' : 'z-10 scale-90 opacity-60 blur-[2px]'} select-none`}
          style={{ transform: finalTransform }}
          draggable={false}
        />
        <img
          ref={frontImage === 2 ? imageRef : undefined}
          src={heroImage2}
          alt="AI Healthcare Hero 2"
          className={`rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border-2 md:border-4 border-white/80 object-contain max-w-[320px] md:max-w-[850px] max-h-[320px] md:max-h-[440px] w-auto h-auto transition-all duration-700 ease-out absolute ${frontImage === 2 ? 'z-20 scale-100 opacity-100' : 'z-10 scale-90 opacity-60 blur-[2px]'} select-none`}
          style={{ transform: finalTransform }}
          draggable={false}
        />
        {/* Sparkle or animated overlay */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 animate-pulse">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-70" />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;