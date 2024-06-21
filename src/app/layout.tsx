import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import ToTopButton from "../components/ToTopButton";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JustIzha",
  description: "Something about this site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth transition-all duration-200">
      <body
        className={`${SpaceGrotesk.className} bg-indigo-50 dark:bg-darkMode`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="px-8 md:px-24 lg:px-40">{children}</main>
          <ToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
