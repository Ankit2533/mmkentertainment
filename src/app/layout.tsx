import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Foot from "./components/Foot";
import { Navbar } from "./components/Nav";
import Whatsapp from "./components/Whatsapp";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMKEntertainment",
  description: "One stop solution for all your event management work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <Whatsapp />
        <Navbar />
        {children}
        <Foot />
      </body>
      <GoogleAnalytics gaId="GTM-MJV8VD24" /> 
    </html>
  );
}
