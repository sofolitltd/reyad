"use client";

import { useState } from "react";
import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";
import { IdeFooter } from "./components/ide-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, Code, Briefcase, Rss, Mail } from "lucide-react";

const sections = [
  { id: "about", label: "about.dart", icon: File, component: <AboutSection /> },
  { id: "skills", label: "skills.dart", icon: Code, component: <SkillsSection /> },
  { id: "portfolio", label: "projects.dart", icon: Briefcase, component: <PortfolioSection /> },
  { id: "blog", label: "blog.dart", icon: Rss, component: <BlogSection /> },
  { id: "contact", label: "contact.dart", icon: Mail, component: <ContactSection /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-grow">
        <TabsList className="bg-[#2a2d3d] border-b border-border justify-start rounded-none p-0 h-10">
          {sections.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.id}
              className="h-full rounded-none px-4 text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground border-r border-transparent data-[state=active]:border-border"
              onClick={() => document.getElementById(section.id)?.scrollIntoView()}
            >
              <section.icon className="w-4 h-4 mr-2" />
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-grow overflow-auto bg-background pb-16">
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="h-full">
              <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                {section.component}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <IdeFooter />
    </div>
  );
}
