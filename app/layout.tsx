import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "UGORJI EZE VICTOR'S PORTFOLIO WEBSITE SHOWCASING HIS PROJECTS AND SKILLS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
