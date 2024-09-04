import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">MDX Next.js Starter Kit</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Try It
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Supercharge Your Next.js Development
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Jumpstart your Next.js projects with our powerful MDX starter
                kit, packed with features to boost your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download Now
              </Link>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Features That Matter
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our MDX Next.js starter kit is designed to streamline your
                  development process and help you create stunning,
                  high-performing web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Blazing-Fast Performance</h3>
                <p className="text-muted-foreground">
                  Leverage the power of Next.js and MDX to deliver
                  lightning-fast load times and seamless user experiences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Integrated MDX Support</h3>
                <p className="text-muted-foreground">
                  Easily incorporate dynamic, content-rich pages using the
                  Markdown-based MDX format.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Tailwind CSS Integration</h3>
                <p className="text-muted-foreground">
                  Leverage the power of Tailwind CSS to create beautiful,
                  responsive designs with minimal effort.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Robust Routing</h3>
                <p className="text-muted-foreground">
                  Enjoy seamless, file-based routing with automatic code
                  splitting for optimal performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Optimized Image Handling</h3>
                <p className="text-muted-foreground">
                  Automatically optimize and serve images for the best possible
                  user experience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Comprehensive Documentation
                </h3>
                <p className="text-muted-foreground">
                  Detailed documentation and examples to help you get up and
                  running quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6 space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Download our MDX Next.js starter kit and start building
                high-performance web applications today.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 MDX Next.js Starter Kit. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
