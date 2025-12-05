import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex items-center gap-2 ml-4 md:ml-0">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6 text-primary"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M32,200l80-80,48,48,80-80"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
              <polyline
                points="192 72 240 72 240 120"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
            </svg>
            <span className="font-bold text-lg">FlutterFlow</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
