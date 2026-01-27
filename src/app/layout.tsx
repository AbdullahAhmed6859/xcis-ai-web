import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "XCIS AI",
  description: "XCIS AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Script
          src="https://js-na2.hsforms.net/forms/embed/244688559.js"
          async
        ></Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
