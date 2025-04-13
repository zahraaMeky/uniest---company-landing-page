import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  weight: ["400", "600", "700"],  // Customize with the desired font weights
  subsets: ["latin"],  // You can add more subsets like "latin-ext" if needed
  variable: "--font-poppins", // Optional: to apply as a CSS variable
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
        className={`${poppins.variable} antialiased`}
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
