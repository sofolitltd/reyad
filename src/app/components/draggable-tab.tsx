
"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";


type Section = {
  id: string;
  label: string;
  icon: React.ElementType;
  component: React.ReactNode;
};

interface DraggableTabProps {
  section: Section;
  handleCloseTab: (tabId: string) => void;
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

  const onClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent the tab from being selected
    handleCloseTab(section.id);
  };

  return (
    <TabsTrigger
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      value={section.id}
      className="h-full rounded-none px-3 pr-2 text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground border-r border-transparent data-[state=active]:border-border flex-shrink-0 group"
    >
      <section.icon className="w-4 h-4 mr-2" />
      <span className="mr-2">{section.label}</span>
      <div
        role="button"
        aria-label={`Close ${section.label} tab`}
        onClick={onClose}
        onPointerDownCapture={(e) => e.stopPropagation()} // Prevent dnd from activating on close button click
        className={cn(
          "h-5 w-5 rounded-sm flex items-center justify-center invisible group-hover:visible data-[state=active]:group-hover:visible hover:bg-muted-foreground/20"
        )}
      >
        <X className="w-3 h-3" />
      </div>
    </TabsTrigger>
  );
}
