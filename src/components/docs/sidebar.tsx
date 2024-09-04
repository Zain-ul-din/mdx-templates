import Link from "next/link";

export function Sidebar() {
  return (
    <div className="hidden min-h-screen border-r lg:block  z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="lg:text-sm lg:leading-6 relative">
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-zinc-900 dark:text-zinc-200">
              Getting Started
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-zinc-100 dark:border-zinc-800">
              <li>
                <Link
                  className="block border-l pl-4 -ml-px text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                  href="/docs/installation"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  className="block border-l pl-4 -ml-px text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                  href="/docs/quickstart"
                >
                  Quickstart
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-zinc-900 dark:text-zinc-200">
              Core Concepts
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-zinc-100 dark:border-zinc-800">
              <li>
                <Link
                  className="block border-l pl-4 -ml-px text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                  href="/docs/routing"
                >
                  Routing
                </Link>
              </li>
              <li>
                <Link
                  className="block border-l pl-4 -ml-px text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                  href="/docs/data-fetching"
                >
                  Data Fetching
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
