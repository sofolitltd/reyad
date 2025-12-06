
"use client";

import { useState, useEffect, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { File, Code, Briefcase, Rss, Mail } from "lucide-react";
import { IdeLayout } from "./components/ide-layout";
import { DraggableTab } from "./components/draggable-tab";

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
  const [isClient, setIsClient] = useState(false);
  const tabsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && tabsListRef.current) {
      const activeTabNode = tabsListRef.current.querySelector(`[data-state="active"]`);
      if (activeTabNode) {
        activeTabNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab, isClient]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleSelectFile = (fileId: string) => {
    if (!openTabs.find((tab) => tab.id === fileId)) {
      const section = allSections.find((s) => s.id === fileId);
      if (section) {
        setOpenTabs([...openTabs, section]);
      }
    }
    setActiveTab(fileId);
  };

  const handleCloseTab = (tabId: string) => {
    const tabIndex = openTabs.findIndex((tab) => tab.id === tabId);

    const newOpenTabs = openTabs.filter((tab) => tab.id !== tabId);
    setOpenTabs(newOpenTabs);

    if (activeTab === tabId) {
      if (newOpenTabs.length === 0) {
        setActiveTab("");
      } else {
        const newActiveIndex = Math.max(0, tabIndex - 1);
        setActiveTab(newOpenTabs[newActiveIndex].id);
      }
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setOpenTabs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <IdeLayout onSelectFile={handleSelectFile} activeFile={activeTab}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
        <TabsList ref={tabsListRef} className="bg-sidebar border-b border-sidebar-border justify-start rounded-none p-0 h-10 overflow-x-auto sticky top-0 z-10">
          {isClient ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={openTabs} strategy={horizontalListSortingStrategy}>
                {openTabs.map((section) => (
                  <DraggableTab
                    key={section.id}
                    section={section}
                    handleCloseTab={handleCloseTab}
                  />
                ))}
              </SortableContext>
            </DndContext>
          ) : (
            openTabs.map((section) => (
              <DraggableTab
                key={section.id}
                section={section}
                handleCloseTab={handleCloseTab}
              />
            ))
          )}
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
