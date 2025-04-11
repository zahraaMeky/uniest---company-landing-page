import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNIEST",
  description: "UNIEST is a cutting-edge technology company that is based in Oman with multinational culture and global resources. UNIEST is a promising fintech venture targeting a growing market of SMEs by offering alternative funding solutions. UNIEST is an innovative financial marketplace that provides faster, more accessible, and flexible financing options for SMEs to scale their operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNavbar/>
        <main className="relative overflow-hidden">
         {children}
        </main>
       <Footer/>
       <Toaster />
      </body>
    </html>
  );
}
