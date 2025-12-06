
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
  };

  if (!isDesktop) {
    return (
      <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
        <SiteHeader />
        <div className="flex-1 flex flex-col pt-12 pb-16 overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-30">
          <ProjectExplorer
            onSelectFile={onSelectFile}
            activeFile={activeFile}
            isExpanded={false}
            onToggleExpand={() => {}}
            isMobile
            isDesktop={isDesktop}
          />
        </div>
      </div>
    );
  }

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
            isDesktop={isDesktop}
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
