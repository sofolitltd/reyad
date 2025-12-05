import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import MainNav from "@/components/main-nav";
import { SiteHeader } from "@/components/site-header";
import {
  Briefcase,
  Github,
  Home,
  Linkedin,
  Mail,
  Rss,
  Twitter,
  User,
  Wrench,
} from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FlutterFlow Portfolio",
  description: "A modern portfolio for a Flutter App Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Toaster />
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar
              className="border-r hidden md:flex flex-col"
              collapsible="icon"
            >
              <SidebarHeader className="p-2 justify-center">
                <Link href="/" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-8 w-8 text-primary"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M32,200l80-80,48,48,80-80"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    />
                    <polyline
                      points="192 72 240 72 240 120"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    />
                  </svg>
                  <span className="font-bold text-lg group-data-[collapsible=icon]:hidden transition-all duration-300">
                    FlutterFlow
                  </span>
                </Link>
              </SidebarHeader>
              <SidebarContent className="p-2">
                <MainNav />
              </SidebarContent>
              <SidebarFooter className="p-2">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="justify-center"
                      tooltip="GitHub"
                    >
                      <Link href="#">
                        <Github />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="justify-center"
                      tooltip="LinkedIn"
                    >
                      <Link href="#">
                        <Linkedin />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="justify-center"
                      tooltip="Twitter"
                    >
                      <Link href="#">
                        <Twitter />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset className="flex-1">
              <SiteHeader />
              <main>{children}</main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
