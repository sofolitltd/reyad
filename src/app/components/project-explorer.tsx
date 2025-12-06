
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
  PanelRightClose,
  PanelLeftClose,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
        { name: "projects.dart", type: "file", id: "portfolio", icon: Briefcase, color: "text-purple-400" },
        { name: "blog.dart", type: "file", id: "blog", icon: Rss, color: "text-orange-400" },
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
      <div className="mb-2">
        <div
          className="flex items-center cursor-pointer p-1 rounded-md hover:bg-primary/20"
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
          <div className="pl-4 mt-2">
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
        "flex items-center cursor-pointer p-1 rounded-md mb-1 hover:bg-primary/20",
        activeFile === node.id && "bg-background"
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
  isMobile = false,
  isDesktop
}: {
  onSelectFile: (fileId: string) => void;
  activeFile: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isMobile?: boolean;
  isDesktop?: boolean;
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

  if (isMobile) {
    return (
        <div className="bg-sidebar border-t border-sidebar-border flex justify-around items-center h-16">
            {allFiles.map((file) => (
                <Button 
                    key={file.id} 
                    onClick={() => file.id && handleFileSelect(file.id)}
                    aria-label={file.name}
                    variant="ghost"
                    className={cn(
                        "h-full w-full flex-col gap-1 text-xs rounded-none", 
                        activeFile === file.id ? "bg-background text-primary" : "text-muted-foreground"
                    )}
                    >
                    <file.icon className={cn("w-5 h-5")} />
                    <span>{file.name.split('.')[0]}</span>
                </Button>
            ))}
        </div>
    );
  }

  return (
    <div className="p-2">
      <div
        className={cn(
          "flex items-center justify-between",
          !isExpanded && "justify-center"
        )}
      >
        {isExpanded && (
          <h3 className="text-sm font-medium uppercase text-muted-foreground flex-grow pl-2">
            Explorer
          </h3>
        )}
        {isDesktop && (
         <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onToggleExpand}>
            {isExpanded ? (
                <PanelLeftClose className="w-4 h-4 text-foreground" />
            ) : (
                <PanelRightClose className="w-5 h-5 text-foreground" />
            )}
        </Button>
        )}
      </div>
      <div className="mt-2">
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
                      key={file.id} 
                      onClick={() => file.id && handleFileSelect(file.id)}
                      aria-label={file.name}
                      className={cn("h-10 w-10 rounded-md", activeFile === file.id ? "bg-background" : "bg-transparent hover:bg-muted")}
                      >
                      <file.icon className={cn("w-6 h-6 hover:text-current", file.color)} />
                  </Button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
