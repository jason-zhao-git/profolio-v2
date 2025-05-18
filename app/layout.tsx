import {
  Inter,
  Space_Grotesk,
  Roboto_Mono,
  JetBrains_Mono,
  Work_Sans,
  Source_Code_Pro,
  Inconsolata,
  VT323,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

import { GeistMono } from "geist/font/mono";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});
export const metadata: Metadata = {
  title: "Jingqiao Zhao",
  description: "Jingqiao Zhao's personal profolio website",
  icons: {
    icon: "/initicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${GeistMono.className} ${vt323.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex flex-col p-5`}>
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center">{children}</div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}
