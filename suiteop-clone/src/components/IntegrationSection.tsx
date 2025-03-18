import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function IntegrationSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-lg font-medium mb-4 text-primary">INTEGRATION</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              One platform, endless integrations.
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Stop juggling between a dozen different platforms and manage your entire operation all in one place, with hundreds of connections to the tools you already use today.
            </p>

            <Button asChild className="rounded-full">
              <Link href="/integrations">View All Integrations</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20">
                <Image
                  src="https://ext.same-assets.com/2278875321/3157854456.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20">
                <Image
                  src="https://ext.same-assets.com/1469117343/1567598958.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20">
                <Image
                  src="https://ext.same-assets.com/4200691/3439562896.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20">
                <Image
                  src="https://ext.same-assets.com/2575828340/3940463332.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20">
                <Image
                  src="https://ext.same-assets.com/4287070933/1211640054.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 flex items-center justify-center">
                  <p className="text-xs text-center text-foreground/70 font-medium px-2">
                    Need an integration that's not listed? Reach out to us!
                  </p>
                </div>
                <Image
                  src="https://ext.same-assets.com/2278875321/3157854456.avif"
                  alt="Integration Partner"
                  width={80}
                  height={40}
                  className="w-auto h-10 object-contain opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Devices Section */}
      <div className="mt-24 relative py-16 bg-[#281A3A] text-white overflow-hidden">
        <div className="absolute inset-0 flex">
          <svg width="100%" height="100%" className="opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">UNLEASH POWERFUL AUTOMATIONS</h3>
              </div>

              <h2 className="text-3xl font-bold mb-6">
                With a <span className="text-primary">centralized</span> operation and guest experience platform, tap into the automations you've been dreaming of.
              </h2>

              <Button asChild className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>

            <div className="relative h-80">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-3xl"></div>

              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="https://ext.same-assets.com/676804577/1183043185.png"
                  alt="Smart devices floating"
                  width={600}
                  height={400}
                  className="max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Connect to thousands of <span className="text-primary">smart devices</span>
            </h2>

            <p className="text-lg mb-8 max-w-2xl">
              Experience a transformative shift in your operations with SuiteOp's integration to a range of smart devices, including thermostats and smart locks. Unleash automation to redefine efficiency and productivity.
            </p>

            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/smart-devices">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
