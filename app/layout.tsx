import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata = constructMetadata({
  title: "SCHOLA",
  description:
    "Schola empowers teachers and students by providing tools to organize and optimize their learning experiences. Our platform enhances educational efficiency and fosters a collaborative learning environment.",
  image: "/log.png",
  icons: "/favicon.ico",
  noIndex: false,
});
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
