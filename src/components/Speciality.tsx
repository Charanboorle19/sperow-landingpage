import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const specialties = [
  {
    name: "General Medicine",
    short: "GEN",
  },
  {
    name: "Gynecology",
    short: "GYN",
  },
  {
    name: "Cardiology",
    short: "CARD",
  },
  {
    name: "Orthopedics",
    short: "ORTHO",
  },
  {
    name: "Neurology",
    short: "NEURO",
  },
  {
    name: "Dermatology",
    short: "DERMA",
  },
  {
    name: "Pediatrics",
    short: "PED",
  },
  {
    name: "ENT",
    short: "ENT",
  },
  {
    name: "Oncology",
    short: "ONCO",
  },
  {
    name: "Urology",
    short: "URO",
  },
  {
    name: "Psychiatry",
    short: "PSY",
  },
  {
    name: "Nephrology",
    short: "NEPHRO",
  },
  {
    name: "Pulmonology",
    short: "PULMO",
  },
  {
    name: "Gastroenterology",
    short: "GASTRO",
  },
  {
    name: "Endocrinology",
    short: "ENDO",
  },
];

const Speciality = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  const [floatY, setFloatY] = useState(0);

  const [deviceOrientation, setDeviceOrientation] =
    useState({
      x: 0,
      y: 0,
    });

  const scrollContainerRef =
    useRef<HTMLDivElement>(null);

  // Device Motion
  useEffect(() => {
    const handleDeviceMotion = (
      event: DeviceMotionEvent
    ) => {
      if (event.rotationRate) {
        const { beta, gamma } =
          event.rotationRate;

        if (
          beta !== null &&
          gamma !== null
        ) {
          setDeviceOrientation({
            x: Math.max(
              Math.min(gamma / 10, 10),
              -10
            ),
            y: Math.max(
              Math.min(beta / 10, 10),
              -10
            ),
          });
        }
      }
    };

    window.addEventListener(
      "devicemotion",
      handleDeviceMotion
    );

    return () => {
      window.removeEventListener(
        "devicemotion",
        handleDeviceMotion
      );
    };
  }, []);

  // Floating Animation
  useEffect(() => {
    let frame: number;
    let start: number | null = null;

    const animate = (
      timestamp: number
    ) => {
      if (!start) start = timestamp;

      const elapsed =
        timestamp - start;

      const y =
        Math.sin(
          (elapsed / 4000) *
            2 *
            Math.PI
        ) * 8;

      setFloatY(y);

      frame =
        requestAnimationFrame(
          animate
        );
    };

    frame =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    const rotateX = Math.max(
      Math.min(-y / 24, 10),
      -10
    );

    const rotateY = Math.max(
      Math.min(x / 24, 10),
      -10
    );

    setMousePosition({
      x: rotateY,
      y: rotateX,
    });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-24 relative bg-gradient-to-b from-[#f6faff] to-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setIsHovering(true)
      }
      onMouseLeave={() =>
        setIsHovering(false)
      }
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

      {/* Interactive Gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovering
            ? "opacity-100"
            : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle at ${
            (mousePosition.x + 1) * 50
          }% ${
            (mousePosition.y + 1) * 50
          }%, rgba(59,130,246,0.12) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore Medical
            <span className="text-blue-600">
              {" "}
              Specialties
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Discover expert healthcare
            specialties designed to
            provide personalized care
            and advanced medical
            treatment.
          </p>
        </div>

        {/* MOBILE */}
        <div className="sm:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          >
            {specialties.map(
              (speciality, idx) => (
                <div
                  key={speciality.name}
                  className="relative group rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 p-6 min-h-[230px] flex-shrink-0 w-72 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500"
                  style={{
                    transform:
                      isHovering
                        ? `perspective(900px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateY(${floatY}px)`
                        : `perspective(900px) rotateX(${deviceOrientation.y}deg) rotateY(${deviceOrientation.x}deg) translateY(${floatY}px)`,
                  }}
                >
                  {/* Number */}
                  <span className="absolute top-4 left-4 text-6xl font-extrabold text-blue-900/10">
                    {String(
                      idx + 1
                    ).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-all duration-300">
                        <span className="text-blue-600 group-hover:text-white text-lg font-bold">
                          {
                            speciality.short
                          }
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-none">
                        {
                          speciality.name
                        }
                      </h3>
                    </div>

                    <div className="mt-10 flex items-center gap-2 text-blue-600 group-hover:text-white">
                      <span className="text-sm font-medium">
                        Explore
                      </span>

                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map(
            (speciality, idx) => (
              <div
                key={speciality.name}
                className="relative group rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 p-7 min-h-[260px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500"
                style={{
                  transform:
                    isHovering
                      ? `perspective(900px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateY(${floatY}px)`
                      : `perspective(900px) rotateX(${deviceOrientation.y}deg) rotateY(${deviceOrientation.x}deg) translateY(${floatY}px)`,
                }}
              >
                {/* Number */}
                <span className="absolute top-4 left-4 text-8xl font-extrabold text-blue-900/10">
                  {String(
                    idx + 1
                  ).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-all duration-300">
                      <span className="text-blue-600 group-hover:text-white text-xl font-bold">
                        {
                          speciality.short
                        }
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-none">
                      {
                        speciality.name
                      }
                    </h3>
                  </div>

                  <div className="mt-10 flex items-center gap-2 text-blue-600 group-hover:text-white">
                    <span className="text-sm font-medium">
                      Explore
                      Specialty
                    </span>

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Speciality;