
"use client";
import { GitBranch, Code, Server } from "lucide-react";
import Link from "next/link";

export function IdeFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground text-sm flex items-center justify-between px-2 md:px-4 py-1 border-t border-sidebar-border z-20">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1">
          <GitBranch className="w-4 h-4 text-primary" />
          <span>main</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <Code className="w-4 h-4" />
          <span>Ln 1, Col 1</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <span>UTF-8</span>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex items-center gap-1">
          <Server className="w-4 h-4" />
          <span>Flutter</span>
        </div>
        <Link
          href="https://wa.me/+8801704340860"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-primary hover:brightness-125 transition-all"
        >
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <span className="text-xs">Online</span>
        </Link>
      </div>
    </footer>
  );
}
