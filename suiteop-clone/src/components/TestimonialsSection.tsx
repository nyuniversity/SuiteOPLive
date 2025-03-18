import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    text: "The SuiteOp team has amazingly brought our automated system vision to life. They're incredibly receptive to feedback and even my wildest ideas. Watching everything come together at such impressive speed has been rewarding. Their responsiveness and professionalism stand out, and despite being newcomers, they're implementing cutting-edge tech that outshines competitors. I'm genuinely excited for what's next.",
    author: "Joshua Gilbert",
    role: "President of Apek Rentals",
    avatar: "https://ext.same-assets.com/3805113968/4032779517.jpeg"
  },
  {
    id: 2,
    text: "SuiteOp's platform has completely transformed how we operate our short-term rentals. The automation capabilities and smart device integration save us hours each day, and our guests love the seamless experience. What truly sets them apart is their customer service - they genuinely care about our success.",
    author: "Jessica Thompson",
    role: "Owner, Urban Stays",
    avatar: "https://ext.same-assets.com/2054321154/2859348756.jpeg"
  },
  {
    id: 3,
    text: "After trying multiple property management systems, SuiteOp is the clear winner. Their integration capabilities and focus on automation have helped us scale from 5 to 50 properties without adding headcount to our operations team. The guest verification system has virtually eliminated problem bookings.",
    author: "Michael Johnson",
    role: "CEO, Luxury Rentals Inc.",
    avatar: "https://ext.same-assets.com/369011468/3402731009.jpeg"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          SuiteOp is rated <span className="text-primary">5/5</span> by our users in all the right places
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#846CDF"
                className="w-6 h-6"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#846CDF"
                      className="w-4 h-4"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-foreground/80 mb-6 line-clamp-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button size="icon" variant="outline" className="rounded-full" aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full" aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/30"></div>

        <div className="container-custom relative z-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Transform your hospitality operations and embrace new automations with SuiteOp's consolidated platform.
              </p>
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/879759158/750622237.avif"
                  alt="Dashboard"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="https://ext.same-assets.com/3039263160/3250163036.avif"
                  alt="Mobile App"
                  width={200}
                  height={400}
                  className="absolute -right-12 -bottom-8 rounded-lg shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
