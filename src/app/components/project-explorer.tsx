
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
  PanelLeftClose,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const structure = {
  name: "portfolio",
  type: "folder",
  children: [
    {
      name: "lib",
      type: "folder",
      children: [
        { name: "about.dart", type: "file", id: "about", icon: File, color: "text-blue-400" },
        { name: "skills.dart", type: "file", id: "skills", icon: Code, color: "text-green-400" },
        { name: "projects.dart", type: "file", id: "portfolio", icon: Briefcase, color: "text-orange-400" },
        { name: "blog.dart", type: "file", id: "blog", icon: Rss, color: "text-red-400" },
        { name: "contact.dart", type: "file", id: "contact", icon: Mail, color: "text-teal-400" },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        { name: "cv.pdf", type: "file", id: "download-cv", icon: Download, color: "text-purple-400" },
      ],
    },
  ],
};

type FileOrFolder = {
  name: string;
  type: "folder" | "file";
  id?: string;
  icon?: React.ElementType;
  color?: string;
  children?: FileOrFolder[];
};

const ExplorerNode = ({
  node,
  onSelectFile,
  activeFile,
  isExpanded,
}: {
  node: FileOrFolder;
  onSelectFile: (fileId: string) => void;
  activeFile: string;
  isExpanded: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleNodeClick = () => {
    if (node.id === 'download-cv') {
      // This is a special case to trigger a download.
      // We create a temporary link and click it.
      const link = document.createElement('a');
      link.href = '/Md%20Asifuzzaman%20Reyad%20-%20dev%2012-25.pdf';
      link.download = 'Md Asifuzzaman Reyad - dev 12-25.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (node.id) {
      onSelectFile(node.id);
    } else if (node.type === "folder") {
       setIsOpen(!isOpen);
    }
  };


  if (node.type === "folder") {
    return (
      <div>
        <div
          className="flex items-center cursor-pointer p-1 rounded-md hover:bg-accent/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isExpanded && (
            <ChevronRight
              className={cn("w-4 h-4 mr-1 transition-transform", isOpen && "rotate-90")}
            />
          )}
          {isOpen ? <FolderOpen className="w-4 h-4 mr-2 text-foreground" /> : <Folder className="w-4 h-4 mr-2 text-foreground" />}
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
        "flex items-center cursor-pointer p-1 rounded-md mb-1 hover:bg-accent/20",
        activeFile === node.id && "bg-accent/20"
      )}
      onClick={handleNodeClick}
    >
      <Icon className={cn("w-4 h-4 mx-2", node.color || "text-muted-foreground")} />
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

  const handleFileSelect = (fileId: string) => {
    if (fileId === 'download-cv') {
       const link = document.createElement('a');
      link.href = '/Md%20Asifuzzaman%20Reyad%20-%20dev%2012-25.pdf';
      link.download = 'Md Asifuzzaman Reyad - dev 12-25.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    onSelectFile(fileId);
  }

  const libFiles = structure.children.find(c => c.name === 'lib')?.children || [];
  const publicFiles = structure.children.find(c => c.name === 'public')?.children || [];
  const allFiles = [...libFiles, ...publicFiles];

  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between p-1 mb-2",
          !isExpanded && "justify-center"
        )}
      >
        {isExpanded && (
          <h3 className="text-sm font-medium uppercase text-muted-foreground flex-grow">
            Explorer
          </h3>
        )}
         <Button variant="ghost" size="icon" onClick={onToggleExpand}>
            {isExpanded ? (
                <PanelLeftClose className="w-5 h-5" />
            ) : (
                <FolderKanban className="w-6 h-6 text-primary" />
            )}
        </Button>
      </div>
       {isExpanded && <Separator className="mb-2" />}
      {isExpanded ? (
         <ExplorerNode
          node={structure}
          onSelectFile={onSelectFile}
          activeFile={activeFile}
          isExpanded={isExpanded}
        />
      ) : (
        <div className="flex flex-col items-center gap-4 mt-4">
             {allFiles.map((file) => (
                 <Button 
                    variant={activeFile === file.id ? "secondary" : "ghost"} 
                    size="icon" 
                    key={file.id} 
                    onClick={() => file.id && handleFileSelect(file.id)}
                    aria-label={file.name}
                    >
                    <file.icon className={cn("w-6 h-6", file.color)} />
                 </Button>
             ))}
        </div>
      )}
    </div>
  );
}
