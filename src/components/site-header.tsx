import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex-shrink-0 flex h-12 items-center justify-between px-4 md:px-6 bg-[#2a2d3d] border-b border-border fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg">Portfolio</span>
        </Link>
      </div>

      <div className="hidden md:block text-sm text-muted-foreground">
        project: Reyad
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
