"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function HomeNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full suiteop-bg-gradient py-4 font-manrope">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3103850400/2380582926.png"
              alt="SuiteOp Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-sm font-medium text-[#4A5568] hover:text-[#664DFF] transition-colors"
            >
              About us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-[#4A5568] hover:text-[#664DFF] transition-colors flex items-center gap-1.5">
                  Solutions
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/suiteportal" className="cursor-pointer">SuitePortal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/suiteverify" className="cursor-pointer">SuiteVerify</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/suiteconnect" className="cursor-pointer">SuiteConnect</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/suitemonitor" className="cursor-pointer">SuiteMonitor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/suitekeeper" className="cursor-pointer">SuiteKeeper</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/integrations"
              className="text-sm font-medium text-[#4A5568] hover:text-[#664DFF] transition-colors"
            >
              Integrations
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium text-[#4A5568] hover:text-[#664DFF] transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-[#664DFF] hover:text-[#664DFF]/80 transition-colors flex items-center gap-1.5">
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#664DFF]">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    EN
                  </span>
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/login"
              className="text-sm font-medium text-[#4A5568] hover:text-[#664DFF] transition-colors hidden md:inline-block"
            >
              Log in
            </Link>

            <button className="suiteop-button-gradient text-white font-medium rounded-full px-6 py-2 text-sm">
              Free Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
