import Link from "next/link";

const pages = [
  {
    title: "Forms & Inputs",
    href: "/forms",
    description: "Button, Input, Select, Form, Sonner (Toast)",
    color: "from-brand-500 to-brand-600",
    badge: "Page 1",
  },
  {
    title: "Navigation & Menus",
    href: "/navigation",
    description: "Navigation Menu, Dropdown Menu, Tabs",
    color: "from-accent-500 to-accent-600",
    badge: "Page 2",
  },
  {
    title: "Data Display",
    href: "/data-display",
    description: "Table, Card, Avatar, Skeleton",
    color: "from-green-500 to-green-600",
    badge: "Page 3",
  },
  {
    title: "Overlays & Modals",
    href: "/overlays",
    description: "Dialog with forms, confirmations, and rich content",
      color: "from-purple-500 to-purple-600",
      badge: "Page 4",
  },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
            {/* Hero Section */}
            <header className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Component Showcase
        </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-surface-950 md:text-6xl lg:text-7xl">
            shadcn/ui{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
            Explorer
        </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-surface-600 md:text-xl">
            A curated showcase of 13 shadcn/ui components organized into 4 themed pages.
            See how components work together to create cohesive user interfaces.
            </p>
            </header>

            {/* Component Stats */}
            <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-surface-200 bg-white/50 p-6 text-center backdrop-blur-sm">
            <p className="text-4xl font-bold text-brand-600">13</p>
            <p className="mt-1 text-sm text-surface-600">Components</p>
            </div>
            <div className="rounded-2xl border border-surface-200 bg-white/50 p-6 text-center backdrop-blur-sm">
            <p className="text-4xl font-bold text-accent-600">4</p>
            <p className="mt-1 text-sm text-surface-600">Themed Pages</p>
            </div>
            <div className="rounded-2xl border border-surface-200 bg-white/50 p-6 text-center backdrop-blur-sm">
            <p className="text-4xl font-bold text-green-600">∞</p>
            <p className="mt-1 text-sm text-surface-600">Possibilities</p>
            </div>
            </div>

            {/* Page Cards */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {pages.map((page) => (
                <Link
                key={page.href}
                href={page.href}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-300 hover:border-surface-300 hover:shadow-lg"
                    >
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${page.color}`}>
                    <div className="flex h-full items-end p-6">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {page.badge}
                </span>
                    </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                    <h2 className="mb-2 text-xl font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                    {page.title}
                </h2>
                    <p className="text-surface-600">{page.description}</p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600">
                    Explore components
                    <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                    >
                    <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                    />
                    </svg>
                    </div>
                    </div>
                    </Link>
            ))}
        </div>

            {/* Components List */}
            <div className="mx-auto mt-20 max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-semibold text-surface-900">
            All Components
        </h2>
            <div className="flex flex-wrap justify-center gap-3">
            {[
                "button",
                "input",
                "select",
                "dropdown-menu",
                "table",
                "dialog",
                "form",
                "sonner",
                "skeleton",
                "avatar",
                "card",
                "tabs",
                "navigation-menu",
            ].map((component) => (
                <span
                key={component}
                className="rounded-lg border border-surface-200 bg-white px-4 py-2 text-sm font-medium text-surface-700"
                    >
                    {component}
                </span>
            ))}
        </div>
            </div>

            {/* Footer */}
            <footer className="mx-auto mt-20 max-w-4xl text-center text-sm text-surface-500">
        <p>
          Built with{" "}
          <a href="https://ui.shadcn.com" className="text-brand-600 hover:underline">
            shadcn/ui
          </a>
          ,{" "}
          <a href="https://tailwindcss.com" className="text-brand-600 hover:underline">
            Tailwind CSS v4
          </a>
          , and{" "}
          <a href="https://nextjs.org" className="text-brand-600 hover:underline">
            Next.js 16
          </a>
        </p>
      </footer>
    </main>
  );
}
