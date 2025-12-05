"use client";

import {
  Briefcase,
  Code,
  Mail,
  Rss,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "#about", icon: User, label: "About", tooltip: "About Me" },
  { href: "#skills", icon: Code, label: "Skills", tooltip: "My Skills" },
  {
    href: "#portfolio",
    icon: Briefcase,
    label: "Portfolio",
    tooltip: "My Work",
  },
  { href: "#blog", icon: Rss, label: "Blog", tooltip: "My Blog" },
  { href: "#contact", icon: Mail, label: "Contact", tooltip: "Get in Touch" },
];

export default function MainNav() {
  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild tooltip={item.tooltip}>
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
