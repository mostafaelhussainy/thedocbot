import { CustomCursorElement } from "@/components/custom-cursor-element";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection2() {
  return (
    <section className="py-16 md:py-32" id="services">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">Our Services</h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              We specialize in intelligent automation solutions that streamline patient communications, optimize
              appointment scheduling, and enhance operational efficiency — so your team can focus on delivering
              exceptional care.
            </p>
          </ScrollView>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="space-y-10">
            {SERVICES_LIST.map((service, index) => (
              <div key={service.name} className="group overflow-hidden border-b py-10">
                <div className="flex flex-col gap-8">
                  <div className="space-y-4">
                    <ScrollView>
                      <h3 className="text-title text-2xl font-medium">{service.name}</h3>
                    </ScrollView>

                    <ScrollView stagger delay={0.04}>
                      <div>
                        {service.tags.map((tag, index) => (
                          <div key={index} className="inline-block">
                            <ScrollViewStaggerWrapper>
                              <Badge className="mr-2 mb-2" variant="secondary">
                                {tag}
                              </Badge>
                            </ScrollViewStaggerWrapper>
                          </div>
                        ))}
                      </div>
                    </ScrollView>
                  </div>
                  <ScrollView delay={0.04}>
                    <p className="text-muted-foreground max-w-3xl">{service.description}</p>
                  </ScrollView>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
