"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  {
    id: "branded",
    title: "Fully branded guest portal",
    description:
      "Create a seamless brand experience with your custom colors, logo, and messaging throughout the guest journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 text-primary">
        <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v6h6" />
        <path d="M2 15h10" />
        <path d="m9 18 3-3-3-3" />
      </svg>
    ),
    image: "https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8a7ac1e1de80d271ca4f5_branded%20portal-min.avif"
  },
  {
    id: "upsell",
    title: "Powerful upsell opportunities",
    description:
      "Increase revenue with targeted upsell options strategically presented to guests at optimal moments during their stay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 text-primary">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    image: "https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8a83e96cdc1c4e89a3bd0_upsell%20opportunities.avif"
  },
  {
    id: "digital",
    title: "Complete digital guidebook",
    description:
      "Provide guests with all the information they need about your property, local attractions, and recommendations in an intuitive digital format.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 text-primary">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    image: "https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8a83f5bcad5bd6b127e01_digital%20guidebook-min.avif"
  },
  {
    id: "deviceControl",
    title: "Smart device control",
    description:
      "Allow guests to control connected smart devices like thermostats, locks, and lights directly from the portal for a modern, convenient stay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 text-primary">
        <path d="M9.5 14.5 3 21" />
        <path d="M9.5 9.5 3 3" />
        <path d="M14.5 9.5 21 3" />
        <path d="M14.5 14.5 21 21" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    image: "https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8a83fa43f4e9f5a43f1a8_smart%20device-min.avif"
  }
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState("branded");
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");

    if (animatedElements) {
      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (animatedElements) {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  // Automatically cycle through features
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      const currentIndex = features.findIndex(f => f.id === activeFeature);
      const nextIndex = (currentIndex + 1) % features.length;
      setActiveFeature(features[nextIndex].id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeFeature, isClient]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f8f5ff] overflow-hidden">
      <div className="container-custom">
        {/* Changed from text-center to text-left and removed mx-auto */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0">
            Everything your guests need in one portal
          </h2>

          <p className="text-lg text-foreground/70 animate-on-scroll opacity-0" style={{ transitionDelay: "100ms" }}>
            SuitePortal brings all the information and tools your guests need together in one beautiful,
            branded interface that enhances their stay and saves you time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 animate-on-scroll opacity-0" style={{ transitionDelay: "200ms" }}>
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id
                      ? "shadow-xl border-primary/20 transform scale-[1.03]"
                      : "shadow-md border-transparent hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {activeFeature === feature.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-lg flex-shrink-0 ${
                      activeFeature === feature.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    } flex items-center justify-center transition-colors duration-300`}>
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 text-sm">{feature.description}</p>

                      {activeFeature === feature.id && (
                        <div className="flex gap-2 items-center mt-4 text-primary font-medium animate-fade-in">
                          <Check size={16} />
                          <span>Included in all plans</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 animate-on-scroll opacity-0" style={{ transitionDelay: "300ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-[0.98] -z-10"></div>

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3]">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      activeFeature === feature.id
                        ? "opacity-100 transform scale-100"
                        : "opacity-0 transform scale-95 pointer-events-none"
                    }`}
                    style={{
                      transitionProperty: "opacity, transform",
                      willChange: "opacity, transform"
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={activeFeature === feature.id}
                    />
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verified check-in</p>
                    <p className="text-xs text-gray-500">Guest completed all steps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll opacity-0" style={{ transitionDelay: "400ms" }}>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-shadow-lift">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="w-6 h-6 text-primary">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero guest app downloads</h3>
            <p className="text-foreground/70">
              Guests access everything via a web link - no app downloads required,
              ensuring maximum engagement and minimal friction.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-shadow-lift">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="w-6 h-6 text-primary">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Enhanced security features</h3>
            <p className="text-foreground/70">
              Verify guest identity, collect deposits, and ensure secure access with built-in
              authentication and verification tools.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-shadow-lift">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="w-6 h-6 text-primary">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Proactive support system</h3>
            <p className="text-foreground/70">
              Reduce guest questions with automatic alerts, clear instructions, and
              easy access to support when needed.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .hover-shadow-lift {
          transition: all 0.3s ease;
        }

        .hover-shadow-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
}
