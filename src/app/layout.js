import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunMart – Shop the Summer Vibes",
  description: "SunMart is a modern summer eCommerce platform designed for exploring and purchasing seasonal products. Users can browse summer essentials such as sunglasses, outfits, skincare items, beach accessories, and more. After authentication, users can view product details and place orders easily through a smooth and user-friendly shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
