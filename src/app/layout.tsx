import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/NavBar";

export const metadata: Metadata = {
  title: "Cynthia's Blog",
  description: "A blog about my thoughts and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
          <Navigation />
        </header>
        <main className="w-[80%] max-w-5xl mx-auto ">{children}</main>
      </body>
    </html>
  );
}
