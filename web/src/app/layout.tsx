import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Reel | 1960s Cinematic Storyboard",
  description:
    "A three-part visual treatment that drifts from nostalgic suburbia to the optimism of the Space Age.",
  openGraph: {
    title: "Agentic Reel | 1960s Cinematic Storyboard",
    description:
      "A three-part visual treatment that drifts from nostalgic suburbia to the optimism of the Space Age.",
    url: "https://agentic-b19fa5e2.vercel.app",
    siteName: "Agentic Reel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Reel | 1960s Cinematic Storyboard",
    description:
      "A three-part visual treatment that drifts from nostalgic suburbia to the optimism of the Space Age.",
  },
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
        {children}
      </body>
    </html>
  );
}
