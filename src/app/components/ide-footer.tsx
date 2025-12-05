"use client";
import { GitBranch, User, Code, Server, CheckCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function IdeFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#2a2d3d] text-sm text-muted-foreground flex items-center justify-between px-4 py-1 border-t border-border z-20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <GitBranch className="w-4 h-4 text-accent" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <Code className="w-4 h-4" />
          <span>Ln 1, Col 1</span>
        </div>
         <div className="flex items-center gap-1">
          <span>UTF-8</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Server className="w-4 h-4" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center gap-1 text-green-400">
          <CheckCircle className="w-4 h-4" />
          <span>Ready</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
      </div>
    </footer>
  );
}
