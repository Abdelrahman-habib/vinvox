import type { Metadata } from "next";
import { Space_Mono as SpaceMono } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { constructMetadata } from "@/lib/utils";

const font = SpaceMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html suppressHydrationWarning={true} lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="vinvox-theme"
          >
            <BackgroundGradientAnimation
              size="60%"
              animate={true}
              colorsClassName="opacity-40"
            >
              {children}
            </BackgroundGradientAnimation>
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
