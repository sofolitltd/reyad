"use client";
import React from "react";
import { ProjectExplorer } from "./project-explorer";
import { IdeFooter } from "./ide-footer";
import { SiteHeader } from "@/components/site-header";

interface IdeLayoutProps {
  children: React.ReactNode;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
}

export function IdeLayout({ children, onSelectFile, activeFile }: IdeLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-[#2a2d3d]">
      <SiteHeader />
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-64 bg-[#2a2d3d] text-white p-2 border-r border-border flex-shrink-0">
          <ProjectExplorer onSelectFile={onSelectFile} activeFile={activeFile} />
        </aside>
        <main className="flex-1 flex flex-col bg-background">
          {children}
        </main>
      </div>
      <IdeFooter />
    </div>
  );
}
