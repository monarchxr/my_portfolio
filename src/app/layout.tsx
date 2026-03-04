import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const ibmplexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Raunak's Dev Portfolio",
  description: "Created with sheer creativity woohoo",
  icons: "/club-card.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmplexMono.variable} antialiased`}
      >
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
