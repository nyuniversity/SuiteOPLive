"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
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
    <section ref={sectionRef} className="pt-16 md:pt-24 pb-12 md:pb-24 bg-gradient-to-br from-[#f8f5ff] to-[#f0ebfa] overflow-hidden">
      {/* Banner - This remains centered as per original site */}
      <div className="absolute top-0 left-0 w-full bg-primary/10 py-1.5 px-4 text-center text-sm md:text-base">
        <Link href="/suitekeeper" className="text-foreground hover:text-primary transition flex items-center justify-center gap-1">
          <span className="font-semibold text-primary text-xs px-2 py-0.5 rounded bg-primary/10">NEW</span>
          <span className="ml-2">Discover SuiteKeeper, a next-generation staff management for hospitality</span>
        </Link>
      </div>

      <div className="container-custom relative">
        <div className="text-left mb-16 mt-10">
          <h4 className="text-primary font-medium mb-2 animate-on-scroll opacity-0">SuitePortal</h4>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll opacity-0" style={{ transitionDelay: "100ms" }}>
            <span className="text-foreground">Next-Gen</span>{" "}
            <span className="text-primary">Guest Portal</span>
          </h1>

          <div
            className="flex mb-8 animate-on-scroll opacity-0"
            style={{ transitionDelay: "200ms" }}
          >
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/demo">Book Demo</Link>
            </Button>
          </div>

          <div
            className="relative w-full max-w-5xl animate-on-scroll opacity-0"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/30">
              <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio container */}
                <Image
                  src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f86f987a42611aa2c01117_Frame%20237-min.avif"
                  alt="SuitePortal Guest Portal Interface"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  quality={100}
                />

                {/* Interactive hover elements */}
                <div className="absolute top-[20%] left-[15%] group cursor-pointer">
                  <div className="bg-white rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-primary/10 rounded-full h-9 w-9 md:h-12 md:w-12 flex items-center justify-center">
                      <Image
                        src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8720585ea8e9388091fab_location.avif"
                        alt="Location Icon"
                        width={24}
                        height={24}
                        className="w-4 h-4 md:w-6 md:h-6"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 pointer-events-none z-10">
                    <p className="text-sm font-medium">Location and directions included in guest portal</p>
                  </div>
                </div>

                <div className="absolute bottom-[30%] right-[30%] group cursor-pointer">
                  <div className="bg-white rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-primary/10 rounded-full h-9 w-9 md:h-12 md:w-12 flex items-center justify-center">
                      <Image
                        src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f87203a43f4e9f5a403e2d_Frame%20249.avif"
                        alt="Key Icon"
                        width={24}
                        height={24}
                        className="w-4 h-4 md:w-6 md:h-6"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 pointer-events-none z-10">
                    <p className="text-sm font-medium">Digital key access for seamless entry</p>
                  </div>
                </div>

                <div className="absolute bottom-[20%] right-[15%] group cursor-pointer">
                  <div className="bg-white rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-primary/10 rounded-full h-9 w-9 md:h-12 md:w-12 flex items-center justify-center">
                      <Image
                        src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f8720379544ab44c8e3d76_Frame%20247.avif"
                        alt="WiFi Icon"
                        width={24}
                        height={24}
                        className="w-4 h-4 md:w-6 md:h-6"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 pointer-events-none z-10">
                    <p className="text-sm font-medium">Instant WiFi details at your guests' fingertips</p>
                  </div>
                </div>

                {/* Pop-out upsell card */}
                <div className="absolute top-[5%] right-[5%] transform transition-all duration-500 hover:scale-105 hover:translate-y-2 cursor-pointer">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg p-2 w-32 md:w-44">
                    <div className="relative h-20 md:h-24 rounded-lg overflow-hidden">
                      <Image
                        src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64f870a5beeac44517dd6cbe_Frame%20238.avif"
                        alt="Philadelphia skyline"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-semibold text-sm md:text-base">Philadelphia</p>
                      <p className="text-xs text-gray-600">Building sight-seeing</p>
                      <p className="text-xs text-primary font-medium mt-1">BOOK TICKET</p>
                    </div>
                  </div>
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
