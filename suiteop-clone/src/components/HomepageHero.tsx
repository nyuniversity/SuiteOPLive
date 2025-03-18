"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomepageHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.querySelectorAll('.animate-item').forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animate-in');
          }, index * 150);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden suiteop-bg-gradient">
      {/* Banner Alert */}
      <div className="absolute top-0 left-0 w-full suiteop-banner-bg py-1.5 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-1">
          <span className="font-medium text-[#664DFF] text-xs px-2 py-0.5 rounded bg-[#664DFF]/10">NEW</span>
          <span className="ml-2">Discover SuiteKeeper, a next-generation staff management for hospitality</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-10" ref={heroRef}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-item opacity-0 translate-y-4 font-manrope">
            <div className="text-[#2D3748]">Unlock the</div>
            <div className="hero-gradient-text mt-2">Future of Hospitality</div>
          </h1>

          <p className="text-base md:text-xl mb-10 text-[#4A5568] max-w-3xl mx-auto animate-item opacity-0 translate-y-4 font-manrope leading-relaxed">
            SuiteOp's integrated solutions brings automations to your short-term rental
            or hotel operation — deliver unparalleled guest experiences at scale and
            manage your entire operation teams in one platform.
          </p>

          <div className="mb-16 animate-item opacity-0 translate-y-4">
            <button className="suiteop-button-gradient text-white font-medium rounded-full py-3 px-8 text-base font-manrope">
              Book Demo
            </button>
          </div>

          <div className="relative mx-auto animate-item opacity-0 translate-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3922865288/1764891654.avif"
                alt="SuiteOp Dashboard"
                width={1200}
                height={675}
                quality={100}
                className="w-full h-auto"
                priority
                unoptimized
              />

              {/* Floating notification 1 */}
              <div className="absolute top-[10%] right-[5%] home-fade-in delay-300 opacity-0">
                <div className="bg-white rounded-full px-3 py-1 shadow-lg flex items-center space-x-1 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#664DFF]"></div>
                  <span>Guest checked in</span>
                </div>
              </div>

              {/* Floating notification 2 */}
              <div className="absolute bottom-[10%] left-[5%] home-fade-in delay-400 opacity-0">
                <div className="bg-white rounded-full px-3 py-1 shadow-lg flex items-center space-x-1 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Front door locked</span>
                </div>
              </div>

              {/* Phone notification in bottom right */}
              <div className="absolute bottom-[-5%] right-[-5%] home-fade-in delay-500 opacity-0">
                <div className="bg-white rounded-lg p-2 shadow-xl transform rotate-3">
                  <Image
                    src="https://ext.same-assets.com/3039263160/3250163036.avif"
                    alt="Mobile notification"
                    width={150}
                    height={280}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-item {
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
