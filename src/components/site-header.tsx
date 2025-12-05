import Link from "next/link";
import { Feather } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="flex-shrink-0 flex h-12 items-center px-4 md:px-6 bg-[#2a2d3d] border-b border-border">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Reyad's Portfolio</span>
        </Link>
      </div>
    </header>
  );
}
