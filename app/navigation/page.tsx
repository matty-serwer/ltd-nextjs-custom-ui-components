"use client";

import { useState } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ListItem component for navigation menu
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-100 hover:text-surface-900 focus:bg-surface-100 focus:text-surface-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-surface-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default function NavigationPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="page-wrapper bg-gradient-to-br from-surface-50 via-accent-50/20 to-surface-100">
      {/* Page Header */}
      <header className="mb-16">
        <span className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-700">
          Page 2 of 4
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-surface-950 md:text-5xl">
          Navigation & Menus
        </h1>
        <p className="max-w-2xl text-lg text-surface-600">
          Wayfinding components for site structure. See how navigation menus, dropdowns,
          and tabs create hierarchy and organize content access.
        </p>
      </header>

      {/* Navigation Menu Section */}
      <section className="showcase-section">
        <h2 className="section-title">Navigation Menu</h2>
        <p className="mb-8 text-surface-600">
          Full-featured navigation with mega-menu style dropdowns. Hover over items to see content panels.
        </p>

        <div className="flex justify-center rounded-lg border border-surface-200 bg-white p-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-500/50 to-brand-600 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-white/80">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists, and more.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Alert Dialog", href: "/", description: "A modal dialog that interrupts the user." },
                      { title: "Hover Card", href: "/", description: "Preview content available behind a link." },
                      { title: "Progress", href: "/", description: "Displays progress of a task to the user." },
                      { title: "Scroll Area", href: "/", description: "Visually or semantically separates content." },
                      { title: "Tabs", href: "/", description: "Organize content in multiple tabbed views." },
                      { title: "Tooltip", href: "/", description: "Display additional info on hover." },
                    ].map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>

      {/* Dropdown Menu Section */}
      <section className="showcase-section">
        <h2 className="section-title">Dropdown Menus</h2>
        <p className="mb-8 text-surface-600">
          Context menus and action dropdowns with nested submenus, separators, and keyboard shortcuts.
        </p>

        <div className="flex flex-wrap gap-6">
          {/* Basic Dropdown */}
          <div>
            <p className="variant-label">Basic Menu</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* With Groups */}
          <div>
            <p className="variant-label">Grouped Items</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Edit</DropdownMenuLabel>
                  <DropdownMenuItem>Cut</DropdownMenuItem>
                  <DropdownMenuItem>Copy</DropdownMenuItem>
                  <DropdownMenuItem>Paste</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>View</DropdownMenuLabel>
                  <DropdownMenuItem>Zoom In</DropdownMenuItem>
                  <DropdownMenuItem>Zoom Out</DropdownMenuItem>
                  <DropdownMenuItem>Reset</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* With Submenus */}
          <div>
            <p className="variant-label">Nested Submenus</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">More Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>New File</DropdownMenuItem>
                <DropdownMenuItem>New Window</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Messages</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Social</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Twitter</DropdownMenuItem>
                            <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                            <DropdownMenuItem>Facebook</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Print</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Icon Button Dropdown */}
          <div>
            <p className="variant-label">Icon Trigger</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="showcase-section">
        <h2 className="section-title">Tabs</h2>
        <p className="mb-8 text-surface-600">
          Organize content into switchable panels. Multiple styling approaches for different contexts.
        </p>

        <div className="space-y-12">
          {/* Default Tabs */}
          <div>
            <p className="variant-label">Default Style</p>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 rounded-lg border border-surface-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold">Overview</h3>
                <p className="text-surface-600">
                  Welcome to your dashboard. Here you&apos;ll find a summary of your account activity,
                  recent updates, and quick actions to manage your workspace.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-6 rounded-lg border border-surface-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold">Analytics</h3>
                <p className="text-surface-600">
                  Track your performance metrics, user engagement, and growth trends over time.
                  Export reports or set up automated alerts.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="mt-6 rounded-lg border border-surface-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold">Reports</h3>
                <p className="text-surface-600">
                  Generate and download detailed reports. Schedule recurring reports to be sent
                  to your email or shared with team members.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="mt-6 rounded-lg border border-surface-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold">Notifications</h3>
                <p className="text-surface-600">
                  Manage your notification preferences. Choose what updates you want to receive
                  and how you want to be notified.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Underline Tabs */}
          <div>
            <p className="variant-label">Underline Style (Custom)</p>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="h-auto w-full justify-start gap-6 rounded-none border-b border-surface-200 bg-transparent p-0">
                {["overview", "features", "pricing", "faq"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="relative rounded-none border-b-2 border-transparent bg-transparent px-0 pb-3 pt-2 font-medium text-surface-500 shadow-none transition-none data-[state=active]:border-brand-600 data-[state=active]:text-brand-600 data-[state=active]:shadow-none"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <p className="text-surface-600">Overview content with underline tab style.</p>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <p className="text-surface-600">Features content with underline tab style.</p>
              </TabsContent>
              <TabsContent value="pricing" className="mt-6">
                <p className="text-surface-600">Pricing content with underline tab style.</p>
              </TabsContent>
              <TabsContent value="faq" className="mt-6">
                <p className="text-surface-600">FAQ content with underline tab style.</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Pill Tabs */}
          <div>
            <p className="variant-label">Pill Style (Custom)</p>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="h-auto gap-2 bg-transparent p-0">
                {["all", "active", "draft", "archived"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-full border border-surface-200 bg-white px-4 py-2 text-surface-600 shadow-none data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <p className="text-surface-600">Showing all items with pill tab style.</p>
              </TabsContent>
              <TabsContent value="active" className="mt-6">
                <p className="text-surface-600">Showing active items only.</p>
              </TabsContent>
              <TabsContent value="draft" className="mt-6">
                <p className="text-surface-600">Showing draft items only.</p>
              </TabsContent>
              <TabsContent value="archived" className="mt-6">
                <p className="text-surface-600">Showing archived items only.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Combined Example */}
      <section className="showcase-section border-accent-200 bg-gradient-to-br from-accent-50/50 to-surface-50">
        <h2 className="section-title">Combined Navigation Pattern</h2>
        <p className="mb-8 text-surface-600">
          A realistic header showing navigation menu, dropdown, and tabs working together.
        </p>

        <div className="overflow-hidden rounded-xl border border-surface-200 bg-white shadow-lg">
          {/* Simulated Header */}
          <header className="flex items-center justify-between border-b border-surface-200 px-6 py-4">
            <div className="flex items-center gap-8">
              <span className="text-xl font-bold text-brand-600">Logo</span>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-4">
                        <ListItem href="/" title="Analytics">Track and measure.</ListItem>
                        <ListItem href="/" title="Automation">Streamline workflows.</ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-100" />
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          {/* Simulated Page Content with Tabs */}
          <div className="p-6">
            <Tabs defaultValue="dashboard">
              <TabsList>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-4">
                <div className="rounded-lg bg-surface-50 p-8 text-center text-surface-500">
                  Dashboard content area
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-4">
                <div className="rounded-lg bg-surface-50 p-8 text-center text-surface-500">
                  Projects content area
                </div>
              </TabsContent>
              <TabsContent value="team" className="mt-4">
                <div className="rounded-lg bg-surface-50 p-8 text-center text-surface-500">
                  Team content area
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="mt-16 flex items-center justify-between rounded-xl border border-surface-200 bg-surface-50 p-6">
        <a
          href="/forms"
          className="inline-flex items-center gap-2 text-sm text-surface-600 transition-colors hover:text-surface-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous: Forms & Inputs
        </a>
        <a
          href="/data-display"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Next: Data Display
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </footer>
    </main>
  );
}
