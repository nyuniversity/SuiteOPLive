import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PlatformSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">One Platform</span>
            <br />
            To Consolidate
            <br />
            Your Operation
          </h2>
          <p className="text-lg text-muted-foreground">
            SuiteOp: Your All-in-One Operations and Guest Experience Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative p-4">
            <div className="rounded-xl overflow-hidden shadow-xl border border-primary/10">
              <Image
                src="https://ext.same-assets.com/2115851622/1833698324.gif"
                alt="SuitePortal"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white shadow-lg rounded-lg py-2 px-4 text-sm font-medium text-primary">
              SuitePortal
            </div>
            <p className="mt-4 text-foreground/80 ml-2">
              Fully branded guest portal set up in seconds.
            </p>
          </div>

          <div className="relative p-4">
            <div className="rounded-xl overflow-hidden shadow-xl border border-primary/10">
              <Image
                src="https://ext.same-assets.com/3824826780/186839751.gif"
                alt="SuiteVerify"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white shadow-lg rounded-lg py-2 px-4 text-sm font-medium text-primary">
              SuiteVerify
            </div>
            <p className="mt-4 text-foreground/80 ml-2">
              AI-Powered Guest Verification.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="icon" variant="outline" className="rounded-full" aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full" aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scale Section */}
      <div className="mt-24 relative py-16 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 flex">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/1331919644/2557235017.svg+xml"
                alt="Building Icon"
                width={100}
                height={100}
                className="mb-8"
              />

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">From 1 to 10,000</span> rentals, SuiteOp is built for scale; because technology should simplify your portfolio growth, not hinder it.
              </h2>

              <Button asChild className="rounded-full px-8 mt-4">
                <Link href="/demo">Free Demo</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://cdn.prod.website-files.com/64a816378a50f69e0b0d898c/64affe29a960ead92e523f4f_mobile%20house%20with%20bg-min.avif"
                alt="Mobile house illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-primary/10 text-center">
            <h3 className="text-lg font-medium mb-2 uppercase text-muted-foreground">MADE BY OPERATORS</h3>
            <p className="text-xl">Limitless growth with scalable products, no matter how big you'll grow.</p>
            <Button variant="outline" className="mt-6 rounded-full">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
