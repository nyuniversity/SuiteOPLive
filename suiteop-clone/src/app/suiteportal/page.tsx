import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CheckInSection from "./components/CheckInSection";
import CallToAction from "@/components/CallToAction";

export default function SuitePortalPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CheckInSection />
        <FeaturesSection />
        <CallToAction
          title="Ready to transform the guest experience?"
          description="Book a demo to see how SuitePortal can elevate your guest's stay."
          centered={false} // Use left-aligned instead of centered
        />
      </main>
      <Footer />
    </>
  );
}
