import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingSocialDock from "@/components/FloatingSocialDock";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import BlueprintReveal from "@/components/BlueprintReveal";
import DrawOnScroll from "@/components/DrawOnScroll";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build Right Tech — Engineering Excellence",
  description: "Precision precast, structural steel, and innovative construction solutions.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#0a0618" }}>
        <BlueprintReveal />
        <CustomCursor />
        <ScrollProgress />
        <DrawOnScroll />
        <Header />
        <main style={{ flex: 1, minHeight: "100vh" }}>{children}</main>
        <Footer />
        {/* <FloatingSocialDock /> */}
        <BackToTop />
      </body>
    </html>
  );
}
