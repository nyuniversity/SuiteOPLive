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
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";

const solutions = [
  {
    section: "GUEST EXPERIENCES",
    items: [
      {
        name: "SuitePortal",
        description: "Elevate Guest Experience & Upsell Opportunities",
        href: "/suiteportal",
      },
      {
        name: "SuiteVerify",
        description: "Secure Guest Identities & Enhance Safety",
        href: "/suiteverify",
      },
      {
        name: "SuiteBook",
        description: "Boost Revenue with Your Booking Engine",
        href: "#",
        comingSoon: true,
      },
    ],
  },
  {
    section: "OPERATIONS",
    items: [
      {
        name: "SuiteConnect",
        description: "Smart Devices & Intelligent Alerts",
        href: "/suiteconnect",
      },
      {
        name: "SuiteMonitor",
        description: "Privacy-First Noise Monitoring & Protection",
        href: "/suitemonitor",
      },
      {
        name: "SuiteKeeper",
        description: "Optimize Housekeeping & Maintenance Operations",
        href: "/suitekeeper",
      },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-foreground'}`}
          >
            About us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 group">
                Solutions
                <ChevronDown size={16} className="transition group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[500px] p-6" align="center">
              <div className="grid grid-cols-1 gap-6">
                {solutions.map((section) => (
                  <div key={section.section}>
                    <div className="mb-2 text-xs font-medium text-muted-foreground">
                      {section.section}
                    </div>
                    <div className="grid gap-3">
                      {section.items.map((item) => (
                        <DropdownMenuItem key={item.name} asChild className="p-0">
                          <Link
                            href={item.href}
                            className="flex flex-col p-3 rounded-md hover:bg-muted"
                          >
                            <div className="font-medium">
                              {item.name}
                              {item.comingSoon && (
                                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                                  Coming soon
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.description}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/integrations"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/integrations' ? 'text-primary' : 'text-foreground'}`}
          >
            Integrations
          </Link>

          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/pricing' ? 'text-primary' : 'text-foreground'}`}
          >
            Pricing
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/529883166/3544799534.png"
                      alt="English"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>English</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/fr" className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/1199412610/3181710674.png"
                      alt="French"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Français</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/es" className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/3905172286/4219509444.png"
                      alt="Spanish"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Español</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://app.suiteop.com/login">
              Log in
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/demo">
              Free Demo
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b">
              <Logo />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4 mt-6">
              <Link
                href="/about"
                className="text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                About us
              </Link>

              <div className="space-y-3">
                <div className="font-medium text-foreground">Solutions</div>
                {solutions.map((section) => (
                  <div key={section.section} className="pl-4 space-y-2">
                    <div className="text-xs text-muted-foreground">
                      {section.section}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                        {item.comingSoon && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                            Coming soon
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                href="/integrations"
                className="text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                Integrations
              </Link>

              <Link
                href="/pricing"
                className="text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>

              <div className="pt-4 mt-auto">
                <div className="flex flex-col gap-3">
                  <Button variant="outline" asChild>
                    <Link href="https://app.suiteop.com/login">
                      Log in
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/demo">
                      Free Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
