"use client";
import React, { useState, useEffect } from "react";
import { ProjectExplorer } from "./project-explorer";
import { IdeFooter } from "./ide-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

interface IdeLayoutProps {
  children: React.ReactNode;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
}

export function IdeLayout({ children, onSelectFile, activeFile }: IdeLayoutProps) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 768) {
        setIsExplorerOpen(false);
      } else {
        setIsExplorerOpen(true);
      }
    };
    window.addEventListener("resize", checkSize);
    checkSize(); // Initial check
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#2a2d3d]">
      <SiteHeader />
      <div className="flex-grow pt-12 relative">
        <aside
          className={cn(
            "bg-[#2a2d3d] text-white p-2 border-r border-border transition-all duration-300 ease-in-out h-full z-10",
            "md:relative md:flex-shrink-0",
            "absolute", // Mobile: absolute positioning
            isExplorerOpen ? "w-64" : "w-16"
          )}
        >
          <ProjectExplorer
            onSelectFile={onSelectFile}
            activeFile={activeFile}
            isExpanded={isExplorerOpen}
            onToggleExpand={() => setIsExplorerOpen(!isExplorerOpen)}
          />
        </aside>
        <main
          className={cn(
            "flex-1 flex flex-col bg-background h-full transition-all duration-300 ease-in-out",
             "md:ml-0", // Desktop: no margin when sidebar state changes
             isExplorerOpen ? 'ml-16 md:ml-0' : 'ml-16' // Mobile: always have margin for the collapsed sidebar
          )}
        >
          {children}
        </main>
      </div>
      <IdeFooter />
    </div>
  );
}
