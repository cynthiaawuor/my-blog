"use client";
import Link from "next/link";
import { Home, PenLine, BookOpen, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto px-4 h-14">
      <Link href="/" className="left text-xl font-bold tracking-tight">
        <span className="text-(--primary-red)">My</span>
        <span>Blog</span>
      </Link>

      <ul className="right flex items-center gap-1">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${
              pathName === "/"
                ? "bg-(--primary-red) text-primary-foreground"
                : "hover:bg-(--primary-red)/10"
            }`}
          >
            <Home className="w-4 h-4" />{" "}
            <span className="hidden sm:inline-block">Feed</span>
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${
              pathName === "/blogs"
                ? "bg-(--primary-red) text-primary-foreground"
                : "hover:bg-(--primary-red)/10"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline-block">My Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/editor"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${
              pathName === "/editor"
                ? "bg-(--primary-red) text-primary-foreground"
                : "hover:bg-(--primary-red)/10"
            }`}
          >
            <PenLine className="w-4 h-4" />
            <span className="hidden sm:inline-block">write</span>
          </Link>
        </li>
        <li>
          <Link
            href="/signin"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${
              pathName === "/signin"
                ? "bg-(--primary-red) text-primary-foreground"
                : "hover:bg-(--primary-red)/10"
            }`}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline-block">logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
