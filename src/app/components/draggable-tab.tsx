"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Section = {
  id: string;
  label: string;
  icon: React.ElementType;
  component: React.ReactNode;
};

interface DraggableTabProps {
  section: Section;
  handleCloseTab: (e: React.MouseEvent, tabId: string) => void;
}

export function DraggableTab({ section, handleCloseTab }: DraggableTabProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    position: "relative" as const,
  };

  return (
    <TabsTrigger
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
        // Prevent dnd from activating on close button click
        onPointerDownCapture={(e) => e.stopPropagation()}
      >
        <X className="w-3 h-3" />
      </Button>
    </TabsTrigger>
  );
}
