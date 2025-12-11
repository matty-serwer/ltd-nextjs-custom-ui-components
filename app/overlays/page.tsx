"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toaster } from "@/components/ui/sonner";

export default function OverlaysPage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [toggles, setToggles] = useState([true, false, true]);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleFormSubmit = () => {
    toast.success("User created successfully!", {
      description: `${formData.name} has been added to the team.`,
    });
    setFormData({ name: "", email: "", role: "" });
    setFormOpen(false);
  };

  const handleDelete = () => {
    toast.error("Item deleted", {
      description: "The item has been permanently removed.",
    });
    setConfirmOpen(false);
  };

  const toggleSetting = (index: number) => {
    setToggles((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <main className="page-wrapper bg-gradient-to-br from-surface-50 via-brand-50/10 to-accent-50/20">
      <Toaster richColors position="top-right" />

      {/* Page Header */}
      <header className="mb-16">
        <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
          Page 4 of 4
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-surface-950 md:text-5xl">
          Overlays & Modals
        </h1>
        <p className="max-w-2xl text-lg text-surface-600">
          Dialog components that overlay the main content. See how modals handle forms,
          confirmations, and detailed content while managing focus and backdrop behavior.
        </p>
      </header>

      {/* Basic Dialog Section */}
      <section className="showcase-section">
        <h2 className="section-title">Dialog Variants</h2>
        <p className="mb-8 text-surface-600">
          Different dialog patterns for various use cases: information, confirmation, and form input.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Simple Information Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Information Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>About This Feature</DialogTitle>
                <DialogDescription>
                  Dialogs are modal windows that appear in front of app content to provide
                  critical information or ask for a decision.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-surface-600">
                  They disable all app functionality when they appear, and remain on screen
                  until confirmed, dismissed, or a required action has been taken.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Got it</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Confirmation Dialog */}
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Confirmation</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2 sm:gap-0">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Form Dialog */}
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button>Create New User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create Team Member</DialogTitle>
                <DialogDescription>
                  Add a new member to your team. They&apos;ll receive an email invitation.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="role" className="text-sm font-medium">
                    Role
                  </label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleFormSubmit}>Create User</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Dialog Sizes Section */}
      <section className="showcase-section">
        <h2 className="section-title">Dialog Sizes</h2>
        <p className="mb-8 text-surface-600">
          Dialogs can be sized to fit their content, from compact alerts to full-width detail views.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Small Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Small (Alert)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Quick Alert</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-surface-600">
                This is a compact dialog for simple messages.
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="sm">OK</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Medium Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Medium (Default)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Medium Dialog</DialogTitle>
                <DialogDescription>
                  The default size works well for most use cases.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-surface-600">
                  This provides enough space for forms, confirmations, and moderate
                  amounts of content without overwhelming the viewport.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Large Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Large (Detail View)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Large Detail View</DialogTitle>
                <DialogDescription>
                  Ideal for detailed content, previews, or complex forms.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Users</CardDescription>
                      <CardTitle>2,350</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Active Now</CardDescription>
                      <CardTitle>573</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                <p className="mt-4 text-sm text-surface-600">
                  Large dialogs can contain complex layouts, tables, charts, or
                  multi-step forms while maintaining comfortable reading widths.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Full Width Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Extra Large</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Full Width Dialog</DialogTitle>
                <DialogDescription>
                  For complex interfaces like data tables or dashboards.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                      { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
                      { name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
                    ].map((user) => (
                      <TableRow key={user.email}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-surface-100 text-surface-600"
                            }`}
                          >
                            {user.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Dialog with Rich Content */}
      <section className="showcase-section">
        <h2 className="section-title">Rich Content Dialogs</h2>
        <p className="mb-8 text-surface-600">
          Dialogs containing complex components like cards, avatars, and interactive elements.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Profile Detail Dialog */}
          <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">User Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>User Profile</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-brand-100 text-lg text-brand-700">OM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Olivia Martin</h3>
                    <p className="text-sm text-surface-500">Lead Designer</p>
                    <p className="mt-1 text-sm text-surface-600">olivia@example.com</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -right-1 -top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-2xl font-bold">47</p>
                      <p className="text-sm text-surface-500">Projects</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-surface-500">Team Members</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h4 className="mb-2 text-sm font-medium">Bio</h4>
                  <p className="text-sm text-surface-600">
                    Design lead with 8+ years of experience creating beautiful, user-centered
                    digital products. Passionate about design systems and accessibility.
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDetailOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => toast.info("Message feature coming soon!")}>
                  Send Message
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Settings Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Settings Panel</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Notification Settings</DialogTitle>
                <DialogDescription>
                  Configure how and when you receive notifications.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {[
                  { label: "Email notifications", description: "Receive updates via email" },
                  { label: "Push notifications", description: "Get notified on your device" },
                  { label: "Weekly digest", description: "Summary of activity each week" },
                ].map((setting, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border border-surface-200 p-4"
                  >
                    <div>
                      <p className="font-medium">{setting.label}</p>
                      <p className="text-sm text-surface-500">{setting.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleSetting(i)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                        toggles[i] ? "bg-brand-600" : "bg-surface-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          toggles[i] ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={() => toast.success("Settings saved!")}>Save Settings</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Image Preview Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Image Preview</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Project Preview</DialogTitle>
                <DialogDescription>Dashboard Design - Final Version</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-brand-400 via-brand-500 to-accent-500">
                  <div className="flex h-full items-center justify-center text-white/80">
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button>Download</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Combined Example */}
      <section className="showcase-section border-purple-200 bg-gradient-to-br from-purple-50/50 to-surface-50">
        <h2 className="section-title">Complete Workflow Example</h2>
        <p className="mb-8 text-surface-600">
          A realistic scenario showing how dialogs integrate with other components in a workflow.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Team Management</CardTitle>
            <CardDescription>
              Manage your team members, roles, and permissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <Input placeholder="Search members..." className="max-w-xs" />
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <svg
                      className="mr-2 h-4 w-4"
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
                    Add Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite Team Member</DialogTitle>
                    <DialogDescription>
                      Send an invitation to join your team.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input placeholder="Email address" type="email" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={() => toast.success("Invitation sent!")}>
                      Send Invite
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Olivia Martin", initials: "OM", role: "Admin", status: "Active" },
                  { name: "Jackson Lee", initials: "JL", role: "Member", status: "Active" },
                  { name: "Isabella Nguyen", initials: "IN", role: "Viewer", status: "Pending" },
                ].map((member) => (
                  <TableRow key={member.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-brand-100 text-brand-700">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                          member.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {member.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Member</DialogTitle>
                            <DialogDescription>
                              Update {member.name}&apos;s role and permissions.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <Select defaultValue={member.role.toLowerCase()}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="member">Member</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button onClick={() => toast.success("Changes saved!")}>
                              Save
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Navigation Footer */}
      <footer className="mt-16 flex items-center justify-between rounded-xl border border-surface-200 bg-surface-50 p-6">
        <a
          href="/data-display"
          className="inline-flex items-center gap-2 text-sm text-surface-600 transition-colors hover:text-surface-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous: Data Display
        </a>
        <a
          href="/forms"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Back to Start
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </footer>
    </main>
  );
}
