import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Anmol Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body className={`${roboto.className}`}>
        <Navbar/>
        {children}
        <div>
            <Footer/>
        </div>
        <Analytics />
        <SpeedInsights />
    </body>
    </html>
  );
}