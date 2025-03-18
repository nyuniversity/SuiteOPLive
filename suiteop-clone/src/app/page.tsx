import { HomeNavigation } from "@/components/HomeNavigation";
import { HomepageHero } from "@/components/HomepageHero";
import { PlatformSection } from "@/components/PlatformSection";
import { IntegrationSection } from "@/components/IntegrationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen suiteop-bg-gradient">
        <HomeNavigation />
        <main>
          <HomepageHero />
          <PlatformSection />
          <IntegrationSection />
          <TestimonialsSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
