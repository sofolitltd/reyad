import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { Feather } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex items-center gap-2 ml-4 md:ml-0">
          <Link href="/" className="flex items-center gap-2">
            <Feather className="h-6 w-6 text-primary"/>
            <span className="font-bold text-lg">Reyad's Portfolio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
