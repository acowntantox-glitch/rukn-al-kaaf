import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/data/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | General Trading Company in UAE`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "General Trading Company UAE",
    "Trading Company Dubai",
    "Import Export UAE",
    "Wholesale Trading UAE",
    "Product Supplier UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | General Trading Company in UAE`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | General Trading Company in UAE`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
