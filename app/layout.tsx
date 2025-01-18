import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { Roboto } from 'next/font/google'
import ScrollSmoothWrapper from "@/components/scroll-smooth-wrapper";

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
          <Navbar />
          <ScrollSmoothWrapper>
              {children}
          </ScrollSmoothWrapper>
      </body>
    </html>
  );
}