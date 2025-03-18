"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CheckInSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Changed to left-aligned by removing text-center and mx-auto */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0">
            <span className="text-primary">Elevate</span> your guests' <span className="text-primary">stays</span>
            <br />
            <span className="text-foreground">like never before</span>
          </h2>

          <p className="text-lg text-foreground/70 animate-on-scroll opacity-0" style={{ transitionDelay: "100ms" }}>
            Transform the guest journey with intuitive self-check-in, dynamic
            digital guides, tailored upsells, and brand touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: "200ms" }}>
            <div className="relative bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-5 h-5 text-primary">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                    <path d="M18 12a2 2 0 0 0 0 4h2v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">The most intuitive self-check-in experience</h3>
              </div>

              <p className="text-foreground/70 mb-8">
                Guests check-in effortlessly with dynamic step-by-step and image-powered check-in instructions,
                tailored to each property's unique layout and requirements, and integrated to your smartlocks.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group transition-all duration-300 transform hover:translate-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="w-4 h-4 text-primary">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                  </div>
                  <p className="font-medium group-hover:text-primary transition-colors">Make every stay smart</p>
                </div>

                <div className="flex items-center gap-4 group transition-all duration-300 transform hover:translate-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="w-4 h-4 text-primary">
                      <path d="M12 13V7" />
                      <path d="m15 10-3 3-3-3" />
                      <path d="M8 17h8" />
                      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <p className="font-medium group-hover:text-primary transition-colors">Less guest questions, more five-star stays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll opacity-0" style={{ transitionDelay: "300ms" }}>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full filter blur-5xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400/10 rounded-full filter blur-5xl"></div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative pb-[177%]"> {/* Mobile phone aspect ratio */}
                  <Image
                    src="https://ext.same-assets.com/2778133628/2765981029.avif"
                    alt="SuitePortal Check-in Experience"
                    fill
                    className="object-cover object-center"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-2 shadow-xl border border-gray-100 w-48 transition-all duration-500 transform hover:translate-y-2 hover:rotate-2">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground p-2 rounded-xl bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-5 h-5 text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Our guest experience team is a text away</span>
                </div>
              </div>
            </div>
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
      `}</style>
    </section>
  );
}
