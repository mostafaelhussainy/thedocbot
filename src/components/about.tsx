import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Intelligence with Impact",
    description: "We design automation to solve real clinic challenges and improve patient engagement.",
  },
  {
    title: "Partnership-Led Approach",
    description: "We work alongside healthcare teams to build solutions that fit your exact needs.",
  },
  {
    title: "Clarity & Integrity",
    description: "No jargon or surprises — just clear communication and dependable results.",
  },
  {
    title: "Precision in Every Process",
    description: "We fine-tune every detail to ensure smooth, reliable clinic automation.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">About Us</h2>
          </ScrollView>
          <ScrollView>
            <p>
              At Thedoctbot, we partner with doctors and small to mid-sized clinics to implement AI-driven systems that
              handle routine tasks such as answering phone calls, managing bookings, and sending timely follow-ups. Our
              solutions are designed to improve patient engagement, reduce administrative overhead, and elevate your
              practice’s service standards — all while ensuring reliability, privacy, and compliance.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
