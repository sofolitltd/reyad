"use client";

import {
  ChevronRight,
  Folder,
  File,
  Code,
  Briefcase,
  Rss,
  Mail,
  FolderOpen,
  FolderKanban,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  isExpanded,
  isOpen,
  onToggle,
}: {
  node: FileOrFolder;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
  isExpanded: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  if (node.type === "folder") {
    return (
      <div>
        <div
          className="flex items-center cursor-pointer p-1 rounded-md hover:bg-muted"
          onClick={onToggle}
        >
          {isExpanded && (
            <ChevronRight
              className={cn("w-4 h-4 mr-1 transition-transform", isOpen && "rotate-90")}
            />
          )}
          {isOpen ? <FolderOpen className="w-4 h-4 mr-2 text-primary" /> : <Folder className="w-4 h-4 mr-2 text-primary" />}
          {isExpanded && <span>{node.name}</span>}
        </div>
        {isOpen && isExpanded && (
          <div className="pl-4">
            {node.children?.map((child) => (
              <ExplorerNode
                key={child.name}
                node={child}
                onSelectFile={onSelectFile}
                activeFile={activeFile}
                isExpanded={isExpanded}
                isOpen={true} // Child nodes are always "open" in this context
                onToggle={() => {}} // Children don't toggle folders
              />
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
      {isExpanded && <span>{node.name}</span>}
    </div>
  );
};

export function ProjectExplorer({
  onSelectFile,
  activeFile,
  isExpanded,
  onToggleExpand,
}: {
  onSelectFile: (fileId: string) => void;
  activeFile: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between p-1 mb-2",
          !isExpanded && "justify-center"
        )}
      >
        {isExpanded && (
          <h3 className="text-sm font-bold uppercase text-muted-foreground">
            Explorer
          </h3>
        )}
      </div>
      {isExpanded ? (
         <ExplorerNode
          node={structure}
          onSelectFile={onSelectFile}
          activeFile={activeFile}
          isExpanded={isExpanded}
          isOpen={true}
          onToggle={() => {}}
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
             <Button variant="ghost" size="icon" onClick={onToggleExpand}>
                <FolderKanban className="w-6 h-6 text-primary" />
             </Button>
        </div>
      )}
    </div>
  );
}
