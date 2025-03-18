import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-12 pb-12 md:py-20 relative overflow-hidden">
      {/* Banner Alert */}
      <div className="absolute top-0 left-0 w-full bg-primary/10 py-1.5 px-4 text-center text-sm md:text-base">
        <Link href="/suitekeeper" className="text-foreground hover:text-primary transition flex items-center justify-center gap-1">
          <span className="font-semibold text-primary text-xs px-2 py-0.5 rounded bg-primary/10">NEW</span>
          <span className="ml-2">Discover SuiteKeeper, a next-generation staff management for hospitality</span>
        </Link>
      </div>

      <div className="container-custom relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Unlock the
              <span className="block">Future of Hospitality</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg">
              SuiteOp's integrated solutions brings automations to your short-term rental or
              hotel operation, deliver unparalleled guest experiences at scale and manage
              your entire operation teams in one platform.
            </p>

            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="/demo">Book Demo</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-400/20 filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://ext.same-assets.com/327569808/472236003.avif"
                  alt="SuiteOp Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -right-8 -bottom-8 md:right-12 md:-bottom-10">
                <Image
                  src="https://ext.same-assets.com/1019448429/35366134.avif"
                  alt="SuiteOp Feature"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-xl shadow-xl"
                />
              </div>

              <div className="absolute -left-8 md:left-10 md:top-10 top-5">
                <Image
                  src="https://ext.same-assets.com/3780210173/1716171799.avif"
                  alt="SuiteOp Feature"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-xl shadow-xl"
                />
              </div>

              <div className="absolute right-1/4 md:right-1/3 -top-8 md:-top-10">
                <Image
                  src="https://ext.same-assets.com/1373157751/3684769053.avif"
                  alt="SuiteOp Feature"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="container mx-auto mt-16 mb-4">
        <h2 className="text-lg text-center text-muted-foreground mb-6">
          SuiteOp Powers the Best Operators In the Industry
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Image
            src="https://ext.same-assets.com/1444264112/1458916347.png"
            alt="Brand Logo"
            width={160}
            height={60}
            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/3740351308/4126859105.png"
            alt="Brand Logo"
            width={160}
            height={60}
            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/3754038343/2648760692.png"
            alt="Brand Logo"
            width={160}
            height={60}
            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
