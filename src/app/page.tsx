"use client";

import { useState } from "react";
import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, Code, Briefcase, Rss, Mail, X } from "lucide-react";
import { IdeLayout } from "./components/ide-layout";
import { Button } from "@/components/ui/button";

const allSections = [
  { id: "about", label: "about.dart", icon: File, component: <AboutSection /> },
  { id: "skills", label: "skills.dart", icon: Code, component: <SkillsSection /> },
  { id: "portfolio", label: "projects.dart", icon: Briefcase, component: <PortfolioSection /> },
  { id: "blog", label: "blog.dart", icon: Rss, component: <BlogSection /> },
  { id: "contact", label: "contact.dart", icon: Mail, component: <ContactSection /> },
];

export default function Home() {
  const [openTabs, setOpenTabs] = useState(allSections);
  const [activeTab, setActiveTab] = useState("about");

  const handleSelectFile = (fileId: string) => {
    if (!openTabs.find((tab) => tab.id === fileId)) {
      const section = allSections.find((s) => s.id === fileId);
      if (section) {
        setOpenTabs([...openTabs, section]);
      }
    }
    setActiveTab(fileId);
  }

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation(); // prevent the tab from being selected
    const tabIndex = openTabs.findIndex((tab) => tab.id === tabId);
    
    // Remove the tab
    const newOpenTabs = openTabs.filter((tab) => tab.id !== tabId);
    setOpenTabs(newOpenTabs);

    // If we closed the active tab, decide on the new active tab
    if (activeTab === tabId) {
      if (newOpenTabs.length === 0) {
        setActiveTab("");
      } else {
        // Activate the previous tab, or the first one if the closed tab was the first
        const newActiveIndex = Math.max(0, tabIndex - 1);
        setActiveTab(newOpenTabs[newActiveIndex].id);
      }
    }
  };

  return (
    <IdeLayout onSelectFile={handleSelectFile} activeFile={activeTab}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
        <TabsList className="bg-[#2a2d3d] border-b border-border justify-start rounded-none p-0 h-10 overflow-x-auto sticky top-0 z-10">
          {openTabs.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.id}
              className="h-full rounded-none px-3 pr-2 text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground border-r border-transparent data-[state=active]:border-border flex-shrink-0 group"
            >
              <section.icon className="w-4 h-4 mr-2" />
              <span className="mr-2">{section.label}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 rounded-sm invisible group-hover:visible data-[state=active]:group-hover:visible"
                onClick={(e) => handleCloseTab(e, section.id)}
              >
                  <X className="w-3 h-3" />
              </Button>
            </TabsTrigger>
          ))}
        </TabsList>
          
        <div className="bg-background flex-1 overflow-y-auto">
          {openTabs.length > 0 ? (
               allSections.map((section) => (
                  <TabsContent key={section.id} value={section.id} className="mt-0 h-full">
                    <div className="container mx-auto px-4 py-8 md:py-12 h-full">
                      {section.component}
                    </div>
                  </TabsContent>
                ))
          ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                  <p>Select a file to view</p>
              </div>
          )}
        </div>
      </Tabs>
    </IdeLayout>
  );
}
