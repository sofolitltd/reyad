"use client";

import { useState } from "react";
import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, Code, Briefcase, Rss, Mail } from "lucide-react";
import { IdeLayout } from "./components/ide-layout";

const sections = [
  { id: "about", label: "about.dart", icon: File, component: <AboutSection /> },
  { id: "skills", label: "skills.dart", icon: Code, component: <SkillsSection /> },
  { id: "portfolio", label: "projects.dart", icon: Briefcase, component: <PortfolioSection /> },
  { id: "blog", label: "blog.dart", icon: Rss, component: <BlogSection /> },
  { id: "contact", label: "contact.dart", icon: Mail, component: <ContactSection /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const handleSelectFile = (fileId: string) => {
    setActiveTab(fileId);
  }

  return (
    <IdeLayout onSelectFile={handleSelectFile} activeFile={activeTab}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-grow h-full">
          <TabsList className="bg-[#2a2d3d] border-b border-border justify-start rounded-none p-0 h-10 overflow-x-auto sticky top-0 z-10">
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="h-full rounded-none px-4 text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground border-r border-transparent data-[state=active]:border-border flex-shrink-0"
              >
                <section.icon className="w-4 h-4 mr-2" />
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-grow bg-background pb-16">
            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="h-full mt-0">
                <div className="container mx-auto px-4 py-8 md:py-12">
                  {section.component}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </IdeLayout>
  );
}
