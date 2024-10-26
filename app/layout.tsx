import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Code made easy by hussein",
  description: "Created by Hussein Popoola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-slate-800"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
