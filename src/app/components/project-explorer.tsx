"use client";

import { useState } from "react";
import {
  ChevronRight,
  Folder,
  File,
  Code,
  Briefcase,
  Rss,
  Mail,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const structure = {
  name: "portfolio",
  type: "folder",
  children: [
    {
      name: "lib",
      type: "folder",
      children: [
        { name: "about.dart", type: "file", id: "about", icon: File },
        { name: "skills.dart", type: "file", id: "skills", icon: Code },
        { name: "projects.dart", type: "file", id: "portfolio", icon: Briefcase },
        { name: "blog.dart", type: "file", id: "blog", icon: Rss },
        { name: "contact.dart", type: "file", id: "contact", icon: Mail },
      ],
    },
  ],
};

type FileOrFolder = {
  name: string;
  type: "folder" | "file";
  id?: string;
  icon?: React.ElementType;
  children?: FileOrFolder[];
};

const ExplorerNode = ({
  node,
  onSelectFile,
  activeFile,
}: {
  node: FileOrFolder;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  if (node.type === "folder") {
    return (
      <div>
        <div
          className="flex items-center cursor-pointer p-1 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRight
            className={cn("w-4 h-4 mr-1 transition-transform", isOpen && "rotate-90")}
          />
          {isOpen ? <FolderOpen className="w-4 h-4 mr-2 text-primary" /> : <Folder className="w-4 h-4 mr-2 text-primary" />}
          <span>{node.name}</span>
        </div>
        {isOpen && (
          <div className="pl-4">
            {node.children?.map((child) => (
              <ExplorerNode key={child.name} node={child} onSelectFile={onSelectFile} activeFile={activeFile} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const Icon = node.icon || File;

  return (
    <div
      className={cn(
        "flex items-center cursor-pointer p-1 rounded-md hover:bg-muted",
        activeFile === node.id && "bg-muted"
      )}
      onClick={() => node.id && onSelectFile(node.id)}
    >
      <Icon className="w-4 h-4 mr-2 text-accent" />
      <span>{node.name}</span>
    </div>
  );
};

export function ProjectExplorer({ onSelectFile, activeFile }: { onSelectFile: (fileId: string) => void; activeFile: string }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase text-muted-foreground p-1 mb-2">
        Explorer
      </h3>
      <ExplorerNode node={structure} onSelectFile={onSelectFile} activeFile={activeFile} />
    </div>
  );
}
