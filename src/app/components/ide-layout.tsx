
"use client";
import React, { useState, useEffect } from "react";
import { ProjectExplorer } from "./project-explorer";
import { IdeFooter } from "./ide-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface IdeLayoutProps {
  children: React.ReactNode;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
}

export function IdeLayout({ children, onSelectFile, activeFile }: IdeLayoutProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  useEffect(() => {
    setIsExplorerOpen(isDesktop);
  }, [isDesktop]);

  const handleToggleExpand = () => {
    if (isDesktop) {
      setIsExplorerOpen(!isExplorerOpen);
    }
    // On mobile, do nothing to prevent expansion.
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <SiteHeader />
      <div className="flex flex-1 pt-12 overflow-hidden">
        <aside
          className={cn(
            "bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex-shrink-0 transition-all duration-300 ease-in-out",
            isExplorerOpen ? "w-56" : "w-16"
          )}
        >
          <ProjectExplorer
            onSelectFile={onSelectFile}
            activeFile={activeFile}
            isExpanded={isExplorerOpen}
            onToggleExpand={handleToggleExpand}
          />
        </aside>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>

          <IdeFooter  />
        </div>
      </div>
    </div>
  );
}
