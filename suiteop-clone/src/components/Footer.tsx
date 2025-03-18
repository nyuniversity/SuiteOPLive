import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "SuitePortal", href: "/suiteportal" },
  { name: "SuiteVerify", href: "/suiteverify" },
  { name: "SuiteConnect", href: "/suiteconnect" },
  { name: "SuiteAnalytics", href: "#" },
  { name: "SuiteKeeper", href: "/suitekeeper" },
  { name: "SuiteMonitor", href: "/suitemonitor" },
];

const company = [
  { name: "Integration", href: "/integrations" },
  { name: "Connected Devices", href: "/smart-devices" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
  { name: "Demo", href: "/demo" },
];

const community = [
  { name: "Help Center", href: "https://suiteop.com/help/en/" },
  { name: "News", href: "https://suiteop.com/news" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms-of-use" },
  { name: "DMCA", href: "/dmca" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/suite-op/" },
  { icon: Instagram, href: "https://www.instagram.com/get.suiteop/" },
  { icon: Facebook, href: "https://www.facebook.com/get.suiteop" },
  { icon: Twitter, href: "https://twitter.com/get_suiteop" },
  { icon: MapPin, href: "https://maps.app.goo.gl/mm2eBU98Xt1TRCCK7" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCAZ_SOutDwE99IqfLOq157Q" },
];

export function Footer() {
  return (
    <footer className="bg-[#271C36] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <svg width="140" height="24" viewBox="0 0 140 24" className="w-32">
                <path d="M16.9 1.2H3.9C2.3 1.2 1 2.5 1 4.1v13.1c0 1.6 1.3 2.9 2.9 2.9h13c1.6 0 2.9-1.3 2.9-2.9V4.1c0-1.6-1.3-2.9-2.9-2.9z" fill="#846CDF"/>
                <path d="M42.5 17.8h-2.3v-4.2c0-1.1-.6-1.8-1.7-1.8-1 0-1.9.6-1.9 2v4h-2.3V8.8h2.2v1.1c.6-.8 1.5-1.3 2.6-1.3 1.9 0 3.3 1.2 3.3 3.5v5.7zm8 0h-2.1v-.8c-.6.6-1.4 1-2.4 1-1.7 0-3-1-3-2.8 0-1.7 1.3-2.8 3.3-2.8.8 0 1.5.2 2.1.5v-.4c0-.8-.6-1.2-1.8-1.2-1 0-1.7.2-2.3.5l-.8-1.7c.9-.5 2-.8 3.5-.8 2.5 0 3.6 1.1 3.6 3v5.5zm-2.1-2.7v-.7c-.4-.3-1-.4-1.6-.4-.8 0-1.4.4-1.4 1.1 0 .8.6 1.1 1.3 1.1.7 0 1.3-.3 1.7-.9v-.2zm8.2-6.5h-2.4v9.2h-2.3V8.6h-1.1V6.7h1.1V6c0-1.8 1.1-2.9 2.9-2.9.8 0 1.5.2 2 .5l-.6 1.8c-.3-.2-.6-.3-1-.3-.6 0-.9.3-.9 1v.6h2.4v1.9zm8.6 6.5v-.8c-.5.6-1.4 1-2.5 1-2.2 0-3.9-1.6-3.9-4.3 0-2.6 1.7-4.3 3.9-4.3 1.1 0 1.9.3 2.5 1V5.4H67v12.4h-1.8zm0-4c0-1.6-1-2.5-2.1-2.5S61 9.4 61 11c0 1.6 1 2.5 2.1 2.5s2.1-.9 2.1-2.5zm9.4-3.3c-.3-.1-.7-.2-1.1-.2-1.1 0-1.7.5-1.7 1.7v4.4h-2.3V8.8H72v1.2c.4-.9 1.2-1.4 2.3-1.4.5 0 .9.1 1.1.2l-.8 2.1zm10 5.9H82v-.8c-.5.6-1.4 1-2.5 1-2.2 0-3.9-1.6-3.9-4.3 0-2.6 1.7-4.3 3.9-4.3 1.1 0 1.9.3 2.5 1V6.7h2.3v11.1zm-2.2-4c0-1.6-1-2.5-2.1-2.5s-2.1.9-2.1 2.5 1 2.5 2.1 2.5 2.1-.9 2.1-2.5zm8.7 4.2c-2.6 0-4.5-1.8-4.5-4.3 0-2.6 1.9-4.3 4.5-4.3s4.5 1.8 4.5 4.3c0 2.6-1.9 4.3-4.5 4.3zm0-6.9c-1.3 0-2.2 1-2.2 2.5s.9 2.5 2.2 2.5 2.2-1 2.2-2.5-.9-2.5-2.2-2.5zm10.5 6.7h-2.2v-7.4h-1.3V8.8h1.3v-.3c0-2.1 1.2-3.4 3.2-3.4.9 0 1.7.2 2.3.5l-.7 1.7c-.4-.2-.7-.3-1.2-.3-.8 0-1.3.4-1.3 1.3v.4h2.1v1.9h-2.1v7.2zm11.5.2c-2.6 0-4.5-1.8-4.5-4.3 0-2.6 1.9-4.3 4.5-4.3s4.5 1.8 4.5 4.3c0 2.6-1.9 4.3-4.5 4.3zm0-6.9c-1.3 0-2.2 1-2.2 2.5s.9 2.5 2.2 2.5 2.2-1 2.2-2.5-.9-2.5-2.2-2.5zm12.1 6.7h-2.2v-1c-.6.7-1.4 1.2-2.5 1.2-1.9 0-3.3-1.2-3.3-3.5V8.8h2.3v4.2c0 1.1.6 1.8 1.7 1.8 1 0 1.8-.6 1.8-2v-4h2.3v9z" fill="white"/>
              </svg>
            </Link>

            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <link.icon size={16} />
                </Link>
              ))}
            </div>

            <div>
              <p className="text-sm mb-2">Find us on the app stores</p>
              <div className="flex gap-2">
                <Link href="https://apps.apple.com/us/app/suiteop/id1671043702">
                  <Image
                    src="https://ext.same-assets.com/3552458023/2322010048.svg+xml"
                    alt="App Store"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.suiteop.suiteop&pli=1">
                  <Image
                    src="https://ext.same-assets.com/1904261226/191286673.svg+xml"
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">SuiteOp</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              {community.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-sm text-gray-400">
              Ready to take a leap into the future of hospitality technology?
            </p>
            <div className="flex justify-end">
              <Button asChild size="sm" className="rounded-full">
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-400 text-center">
          © All rights reserved {new Date().getFullYear()} - SuiteOp Inc.
        </div>
      </div>
    </footer>
  );
}
