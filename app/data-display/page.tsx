"use client";

import { useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

// Sample data for table
const invoices = [
    {
        id: "INV001",
        status: "Paid",
        method: "Credit Card",
        amount: "$250.00",
        date: "2024-01-15",
    },
    {
        id: "INV002",
        status: "Pending",
        method: "PayPal",
        amount: "$150.00",
        date: "2024-01-18",
    },
    {
        id: "INV003",
        status: "Unpaid",
        method: "Bank Transfer",
        amount: "$350.00",
        date: "2024-01-20",
    },
    {
        id: "INV004",
        status: "Paid",
        method: "Credit Card",
        amount: "$450.00",
        date: "2024-01-22",
    },
    {
        id: "INV005",
        status: "Paid",
        method: "PayPal",
        amount: "$550.00",
        date: "2024-01-25",
    },
    {
        id: "INV006",
        status: "Pending",
        method: "Credit Card",
        amount: "$200.00",
        date: "2024-01-28",
    },
];

// Sample team data
const teamMembers = [
    {
        name: "Olivia Martin",
        email: "olivia@example.com",
        role: "Lead Designer",
        avatar: "OM",
    },
    {
        name: "Jackson Lee",
        email: "jackson@example.com",
        role: "Software Engineer",
        avatar: "JL",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella@example.com",
        role: "Product Manager",
        avatar: "IN",
    },
    {
        name: "William Kim",
        email: "william@example.com",
        role: "Frontend Developer",
        avatar: "WK",
    },
];

// Status badge component
function StatusBadge({ status }: { status: string }) {
    const styles = {
        Paid: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Unpaid: "bg-red-100 text-red-700",
    };

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status as keyof typeof styles]}`}
        >
            {status}
        </span>
    );
}

export default function DataDisplayPage() {
    const [isLoading, setIsLoading] = useState(false);

    const simulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="page-wrapper bg-gradient-to-br from-surface-50 via-surface-100 to-brand-50/20">
            {/* Page Header */}
            <header className="mb-16">
                <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                    Page 3 of 4
                </span>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-surface-950 md:text-5xl">
                    Data Display
                </h1>
                <p className="max-w-2xl text-lg text-surface-600">
                    Content presentation components for showing structured data.
                    See how tables, cards, avatars, and loading skeletons create
                    cohesive data-driven interfaces.
                </p>
            </header>

            {/* Table Section */}
            <section className="showcase-section">
                <h2 className="section-title">Table</h2>
                <p className="mb-8 text-surface-600">
                    Structured data display with sortable columns, status
                    indicators, and responsive design.
                </p>

                <div className="overflow-hidden rounded-lg border border-surface-200 bg-white">
                    <Table>
                        <TableCaption className="pb-4">
                            A list of your recent invoices.
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="bg-surface-50 hover:bg-surface-50">
                                <TableHead className="font-semibold">
                                    Invoice
                                </TableHead>
                                <TableHead className="font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="font-semibold">
                                    Method
                                </TableHead>
                                <TableHead className="font-semibold">
                                    Date
                                </TableHead>
                                <TableHead className="font-semibold">
                                    Amount
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow
                                    key={invoice.id}
                                    className="cursor-pointer transition-colors hover:bg-surface-50"
                                >
                                    <TableCell className="font-medium">
                                        {invoice.id}
                                    </TableCell>
                                    <TableCell>
                                        <StatusBadge status={invoice.status} />
                                    </TableCell>
                                    <TableCell className="text-surface-600">
                                        {invoice.method}
                                    </TableCell>
                                    <TableCell className="text-surface-600">
                                        {invoice.date}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {invoice.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>

            {/* Card Section */}
            <section className="showcase-section">
                <h2 className="section-title">Cards</h2>
                <p className="mb-8 text-surface-600">
                    Flexible containers for grouping related content with
                    headers, body, and footer sections.
                </p>

                <div className="demo-grid">
                    {/* Basic Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Card</CardTitle>
                            <CardDescription>
                                A simple card with header and content.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-surface-600">
                                Cards are surfaces that display content and
                                actions on a single topic. They should be easy
                                to scan for relevant and actionable information.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card with Footer */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Card with Actions</CardTitle>
                            <CardDescription>
                                Includes footer with action buttons.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-surface-600">
                                This card demonstrates the full anatomy with
                                header, content area, and footer for actions.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>

                    {/* Stats Card */}
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Total Revenue</CardDescription>
                            <CardTitle className="text-3xl font-bold">
                                $45,231.89
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-green-600">
                                <span className="font-medium">+20.1%</span> from
                                last month
                            </p>
                        </CardContent>
                    </Card>

                    {/* Image Card */}
                    <Card className="overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-brand-400 to-brand-600" />
                        <CardHeader>
                            <CardTitle>Featured Content</CardTitle>
                            <CardDescription>
                                Card with image header area.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-surface-600">
                                Perfect for showcasing products, articles, or
                                featured content.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Team Member</CardTitle>
                            <CardDescription>
                                Card with avatar integration.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-brand-100 text-brand-700">
                                    OM
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Olivia Martin</p>
                                <p className="text-sm text-surface-500">
                                    Lead Designer
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notification Card */}
                    <Card className="border-accent-200 bg-accent-50/50">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-accent-500" />
                                <CardTitle className="text-base">
                                    New Update Available
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-surface-600">
                                Version 2.0 is now available with new features
                                and improvements.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button size="sm" className="w-full">
                                Update Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* Avatar Section */}
            <section className="showcase-section">
                <h2 className="section-title">Avatars</h2>
                <p className="mb-8 text-surface-600">
                    User representations with images, fallbacks, and various
                    sizes.
                </p>

                <div className="space-y-8">
                    {/* Sizes */}
                    <div>
                        <p className="variant-label">Sizes</p>
                        <div className="flex items-end gap-4">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="text-xs">
                                    XS
                                </AvatarFallback>
                            </Avatar>
                            <Avatar className="h-10 w-10">
                                <AvatarFallback className="text-sm">
                                    SM
                                </AvatarFallback>
                            </Avatar>
                            <Avatar className="h-12 w-12">
                                <AvatarFallback>MD</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-16 w-16">
                                <AvatarFallback className="text-lg">
                                    LG
                                </AvatarFallback>
                            </Avatar>
                            <Avatar className="h-20 w-20">
                                <AvatarFallback className="text-xl">
                                    XL
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* With Images */}
                    <div>
                        <p className="variant-label">With Fallbacks</p>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="User"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="bg-brand-100">
                                <AvatarFallback className="text-brand-700">
                                    JD
                                </AvatarFallback>
                            </Avatar>
                            <Avatar className="bg-accent-100">
                                <AvatarFallback className="text-accent-700">
                                    AB
                                </AvatarFallback>
                            </Avatar>
                            <Avatar className="bg-green-100">
                                <AvatarFallback className="text-green-700">
                                    MK
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Avatar Group */}
                    <div>
                        <p className="variant-label">Avatar Group</p>
                        <div className="flex -space-x-3">
                            {teamMembers.map((member, i) => (
                                <Avatar
                                    key={i}
                                    className="border-2 border-white"
                                >
                                    <AvatarFallback className="bg-brand-100 text-brand-700">
                                        {member.avatar}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                            <Avatar className="border-2 border-white">
                                <AvatarFallback className="bg-surface-100 text-surface-600 text-xs">
                                    +5
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* With Status Indicator */}
                    <div>
                        <p className="variant-label">With Status</p>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <Avatar>
                                    <AvatarFallback className="bg-brand-100 text-brand-700">
                                        ON
                                    </AvatarFallback>
                                </Avatar>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                            </div>
                            <div className="relative">
                                <Avatar>
                                    <AvatarFallback className="bg-accent-100 text-accent-700">
                                        AW
                                    </AvatarFallback>
                                </Avatar>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-yellow-500" />
                            </div>
                            <div className="relative">
                                <Avatar>
                                    <AvatarFallback className="bg-surface-100 text-surface-600">
                                        OF
                                    </AvatarFallback>
                                </Avatar>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-surface-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skeleton Section */}
            <section className="showcase-section">
                <h2 className="section-title">Skeletons</h2>
                <p className="mb-8 text-surface-600">
                    Loading placeholders that maintain layout structure while
                    content loads.
                </p>

                <div className="mb-6">
                    <Button onClick={simulateLoading} variant="outline">
                        {isLoading ? "Loading..." : "Simulate Loading State"}
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Card Skeleton */}
                    <div>
                        <p className="variant-label">Card Loading</p>
                        <Card>
                            <CardHeader>
                                {isLoading ? (
                                    <div className="space-y-2">
                                        <Skeleton className="h-5 w-1/3" />
                                        <Skeleton className="h-4 w-2/3" />
                                    </div>
                                ) : (
                                    <>
                                        <CardTitle>Loaded Card</CardTitle>
                                        <CardDescription>
                                            Content has finished loading.
                                        </CardDescription>
                                    </>
                                )}
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                ) : (
                                    <p className="text-surface-600">
                                        This content appears after the loading
                                        state completes. Click the button above
                                        to see the skeleton animation.
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Profile Skeleton */}
                    <div>
                        <p className="variant-label">Profile Loading</p>
                        <Card>
                            <CardContent className="pt-6">
                                {isLoading ? (
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-16 w-16 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-5 w-32" />
                                            <Skeleton className="h-4 w-24" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarFallback className="bg-brand-100 text-lg text-brand-700">
                                                OM
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-lg font-medium">
                                                Olivia Martin
                                            </p>
                                            <p className="text-surface-500">
                                                Lead Designer
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Table Skeleton */}
                    <div className="lg:col-span-2">
                        <p className="variant-label">Table Loading</p>
                        <div className="overflow-hidden rounded-lg border border-surface-200 bg-white">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-surface-50">
                                        <TableHead>Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {isLoading
                                        ? Array.from({ length: 3 }).map(
                                              (_, i) => (
                                                  <TableRow key={i}>
                                                      <TableCell>
                                                          <Skeleton className="h-4 w-20 rounded" />
                                                      </TableCell>
                                                      <TableCell>
                                                          <Skeleton className="h-5 w-16 rounded-md" />
                                                      </TableCell>
                                                      <TableCell>
                                                          <Skeleton className="h-4 w-16 rounded" />
                                                      </TableCell>
                                                  </TableRow>
                                              ),
                                          )
                                        : invoices
                                              .slice(0, 3)
                                              .map((invoice) => (
                                                  <TableRow key={invoice.id}>
                                                      <TableCell className="font-medium">
                                                          {invoice.id}
                                                      </TableCell>
                                                      <TableCell>
                                                          <StatusBadge
                                                              status={
                                                                  invoice.status
                                                              }
                                                          />
                                                      </TableCell>
                                                      <TableCell>
                                                          {invoice.amount}
                                                      </TableCell>
                                                  </TableRow>
                                              ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/* Skeleton Shapes */}
                <div className="mt-8">
                    <p className="variant-label">Skeleton Shapes</p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <Skeleton className="h-12 w-12 rounded-md" />
                        <Skeleton className="h-6 w-32 rounded-md" />
                        <Skeleton className="h-4 w-48 rounded" />
                        <Skeleton className="h-10 w-24 rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Combined Example */}
            <section className="showcase-section border-green-200 bg-gradient-to-br from-green-50/50 to-surface-50">
                <h2 className="section-title">Team Directory Example</h2>
                <p className="mb-8 text-surface-600">
                    A realistic example combining cards, avatars, tables, and
                    skeletons in a team directory.
                </p>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Team Stats Cards */}
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Total Members</CardDescription>
                            <CardTitle className="text-2xl">
                                {teamMembers.length}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Active Now</CardDescription>
                            <CardTitle className="text-2xl text-green-600">
                                3
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Away</CardDescription>
                            <CardTitle className="text-2xl text-yellow-600">
                                1
                            </CardTitle>
                        </CardHeader>
                    </Card>

                    {/* Team Table */}
                    <Card className="lg:col-span-3">
                        <CardHeader>
                            <CardTitle>Team Members</CardTitle>
                            <CardDescription>
                                Manage your team and their account permissions.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Member</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teamMembers.map((member) => (
                                        <TableRow key={member.email}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback className="bg-brand-100 text-brand-700">
                                                            {member.avatar}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-medium">
                                                        {member.name}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-surface-600">
                                                {member.role}
                                            </TableCell>
                                            <TableCell className="text-surface-600">
                                                {member.email}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Navigation Footer */}
            <footer className="mt-16 flex items-center justify-between rounded-xl border border-surface-200 bg-surface-50 p-6">
                <a
                    href="/navigation"
                    className="inline-flex items-center gap-2 text-sm text-surface-600 transition-colors hover:text-surface-900"
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Previous: Navigation & Menus
                </a>
                <a
                    href="/overlays"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                >
                    Next: Overlays & Modals
                    <svg
                        className="h-4 w-4"
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
                </a>
            </footer>
        </main>
    );
}
