import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";
import Image from "next/image";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function FullVersionSection() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="text-balance text-5xl font-medium md:text-6xl"
          >
            Full Version Comming Soon!
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
          >
            Built with Next.js, Tailwind, and Motion Primitives — a fast,
            elegant site featuring a smooth portfolio, a powerful CMS preview,
            and thoughtful features designed to elevate creative work. Full
            experience launching soon.
          </TextEffect>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12"
          >
            <form
              action={process.env.NEXT_PUBLIC_WAIT_LIST_API}
              className="mx-auto max-w-sm"
              method="POST"
            >
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                <input
                  placeholder="Your mail address"
                  className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                  name="email"
                  required
                />

                <div className="md:pr-1.5 lg:pr-0">
                  <Button
                    aria-label="submit"
                    size="sm"
                    className="rounded-(--radius)"
                  >
                    <span className="hidden md:block">Join Now!</span>
                    <SendHorizonal
                      className="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>
            </form>

            <div
              aria-hidden
              className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
            >
              <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
              </div>
              <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                  <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
                    <div className="flex items-center gap-1.5 text-orange-400">
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <path
                            fill="#ff6723"
                            d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"
                          ></path>
                          <path
                            fill="#ffb02e"
                            d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"
                          ></path>
                        </g>
                      </svg>
                      <div className="text-sm font-medium">Pro</div>
                    </div>
                    <div className="space-y-3">
                      <Image
                        src="/images/abstract-3.png"
                        alt="pro-filler"
                        height={300}
                        width={500}
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
