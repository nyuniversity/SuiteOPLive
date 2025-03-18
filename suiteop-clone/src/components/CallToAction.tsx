import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  centered?: boolean; // Added option for centered or left-aligned
}

export default function CallToAction({
  title,
  description,
  buttonText = "Book Demo",
  buttonHref = "/demo",
  centered = true // Default to centered as most instances use this
}: CallToActionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/987919243/3914339977.svg+xml')] bg-repeat opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>

          {description && (
            <p className={`text-lg text-foreground/80 mb-8 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>{description}</p>
          )}

          <div className={centered ? 'text-center' : ''}>
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
