"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">Trusted by Clinics Across MENA, Dubai, and the U.S.</h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              From small practices in Dubai to growing clinics in Cairo and New York, our automation solutions empower
              healthcare providers to save time, reduce costs, and improve patient satisfaction.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    We used to miss so many calls. Now, our AI phone agent handles patient queries and bookings even
                    after hours. It's been a game-changer for our operations.
                  </p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="/images/avatars/dubai-doctor.jpg"
                        alt="Dr. Lina Al Nahyan"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>LN</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Dr. Lina Al Nahyan</cite>
                      <span className="text-muted-foreground block text-sm">Clinic Director, Dubai</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    The follow-up automation alone cut our admin work in half. Patients feel cared for, and we’re less
                    overwhelmed.
                  </p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="/images/avatars/cairo-admin.jpg"
                        alt="Mona El Sayed"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Mona El Sayed</cite>
                      <span className="text-muted-foreground block text-sm">Operations Manager, Cairo</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Integrating with our existing EMR system was smooth. The team understood healthcare workflows really
                    well.
                  </p>
                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="/images/avatars/us-clinic.jpg"
                        alt="Dr. James Harper"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>JH</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Dr. James Harper</cite>
                      <span className="text-muted-foreground block text-sm">Physician, New York</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    We now automate 80% of our patient touchpoints — from booking to follow-ups. Patients love the speed
                    and clarity.
                  </p>
                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="/images/avatars/ksa.jpg"
                        alt="Abdulrahman Al Saud"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Abdulrahman Al Saud</p>
                      <span className="text-muted-foreground block text-sm">Clinic Manager, Riyadh</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
