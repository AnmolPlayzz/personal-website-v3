import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/navigation/navbar";

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
          {children}
      </body>
    </html>
  );
}