"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Toaster } from "@/components/ui/sonner";

// Form schema for the complete form example
const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    role: z.string().min(1, "Please select a role"),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormsInputsPage() {
    const [inputValue, setInputValue] = useState("");

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            role: "",
        },
    });

    function onSubmit(values: FormValues) {
        toast.success("Form submitted successfully!", {
            description: `Welcome, ${values.username}!`,
        });
        console.log(values);
    }

    return (
        <main className="page-wrapper bg-background from-surface-50 via-brand-50/30 to-surface-100">
            <Toaster richColors position="top-right" />

            {/* Page Header */}
            <header className="mb-16">
                <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
                    Page 1 of 4
                </span>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-surface-950 md:text-5xl">
                    Forms & Inputs
                </h1>
                <p className="max-w-2xl text-lg text-surface-600">
                    Core data entry components working together. See how buttons
                    align with inputs, selects integrate with form fields, and
                    toast notifications provide feedback.
                </p>
            </header>

            {/* Button Variants Section */}
            <section className="showcase-section">
                <h2 className="section-title">Button Variants</h2>
                <p className="mb-8 text-surface-600">
                    Buttons in different states and sizes. Click any button to
                    trigger a toast notification.
                </p>

                <div className="space-y-8">
                    {/* Primary variants */}
                    <div>
                        <p className="variant-label">Primary Actions</p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() =>
                                    toast.success("Primary action triggered!")
                                }
                            >
                                Primary
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => toast("Secondary clicked")}
                            >
                                Secondary
                            </Button>
                            <Button
                                variant="accent"
                                onClick={() => toast("Accent clicked")}
                            >
                                Accent
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() =>
                                    toast.error("Destructive action!")
                                }
                            >
                                Destructive
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => toast.info("Outline button")}
                            >
                                Outline
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => toast("Ghost button")}
                            >
                                Ghost
                            </Button>
                            <Button
                                variant="link"
                                onClick={() => toast("Link style")}
                            >
                                Link
                            </Button>
                            <Button
                                variant="linkPrimary"
                                onClick={() => toast("Link style")}
                            >
                                Link Primary
                            </Button>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <p className="variant-label">Sizes</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon" aria-label="Icon button">
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
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    {/* States */}
                    <div>
                        <p className="variant-label">States</p>
                        <div className="flex flex-wrap gap-4">
                            <Button disabled>Disabled</Button>
                            <Button className="pointer-events-none opacity-70">
                                <svg
                                    className="mr-2 h-4 w-4 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                                Loading...
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Input Variants Section */}
            <section className="showcase-section">
                <h2 className="section-title">Input Variants</h2>
                <p className="mb-8 text-surface-600">
                    Text inputs with various states and configurations.
                </p>

                <div className="demo-grid">
                    <div>
                        <p className="variant-label">Default</p>
                        <Input
                            placeholder="Enter your name..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>

                    <div>
                        <p className="variant-label">With Label</p>
                        <label className="mb-2 block text-sm font-medium text-surface-700">
                            Email Address
                        </label>
                        <Input type="email" placeholder="you@example.com" />
                    </div>

                    <div>
                        <p className="variant-label">Disabled</p>
                        <Input
                            disabled
                            placeholder="Disabled input"
                            value="Cannot edit"
                        />
                    </div>

                    <div>
                        <p className="variant-label">With Icon</p>
                        <div className="relative">
                            <svg
                                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <Input className="pl-10" placeholder="Search..." />
                        </div>
                    </div>

                    <div>
                        <p className="variant-label">Password</p>
                        <Input type="password" placeholder="Enter password" />
                    </div>

                    <div>
                        <p className="variant-label">File Input</p>
                        <Input type="file" />
                    </div>
                </div>
            </section>

            {/* Select Component Section */}
            <section className="showcase-section">
                <h2 className="section-title">Select Dropdowns</h2>
                <p className="mb-8 text-surface-600">
                    Select components for choosing from predefined options.
                </p>

                <div className="demo-grid">
                    <div>
                        <p className="variant-label">Basic Select</p>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                                <SelectItem value="grape">Grape</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <p className="variant-label">With Label</p>
                        <label className="mb-2 block text-sm font-medium text-surface-700">
                            Country
                        </label>
                        <Select variant="primary">
                            <SelectTrigger>
                                <SelectValue placeholder="Choose country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">
                                    United States
                                </SelectItem>
                                <SelectItem value="uk">
                                    United Kingdom
                                </SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <p className="variant-label">Disabled</p>
                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Disabled select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="option">Option</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Complete Form Section */}
            <section className="showcase-section border-brand-200 bg-gradient-to-br from-brand-50/50 to-surface-50">
                <h2 className="section-title">Complete Form Example</h2>
                <p className="mb-8 text-surface-600">
                    All form components working together with validation and
                    toast feedback.
                </p>

                <div className="mx-auto max-w-md">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="johndoe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            We&apos;ll never share your email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="developer">
                                                    Developer
                                                </SelectItem>
                                                <SelectItem value="designer">
                                                    Designer
                                                </SelectItem>
                                                <SelectItem value="manager">
                                                    Manager
                                                </SelectItem>
                                                <SelectItem value="other">
                                                    Other
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Select the role that best describes
                                            you.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-4 pt-4">
                                <Button type="submit" className="flex-1">
                                    Submit Form
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        form.reset();
                                        toast.info("Form reset");
                                    }}
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>

            {/* Toast Examples Section */}
            <section className="showcase-section">
                <h2 className="section-title">Toast Notifications (Sonner)</h2>
                <p className="mb-8 text-surface-600">
                    Different toast styles for various feedback scenarios.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Default notification", {
                                description: "This is a default toast message.",
                            })
                        }
                    >
                        Default Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.success("Success!", {
                                description: "Your changes have been saved.",
                            })
                        }
                    >
                        Success Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.error("Error occurred", {
                                description:
                                    "Something went wrong. Please try again.",
                            })
                        }
                    >
                        Error Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.warning("Warning", {
                                description: "Please review before continuing.",
                            })
                        }
                    >
                        Warning Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.info("Information", {
                                description:
                                    "Here's something you should know.",
                            })
                        }
                    >
                        Info Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            const promise = new Promise((resolve) =>
                                setTimeout(resolve, 2000),
                            );
                            toast.promise(promise, {
                                loading: "Loading...",
                                success: "Operation complete!",
                                error: "Something failed",
                            });
                        }}
                    >
                        Promise Toast
                    </Button>
                </div>
            </section>

            {/* Navigation Footer */}
            <footer className="mt-16 flex items-center justify-between rounded-xl border border-surface-200 bg-surface-50 p-6">
                <span className="text-sm text-surface-500">Forms & Inputs</span>
                <a
                    href="/navigation"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                >
                    Next: Navigation & Menus
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
