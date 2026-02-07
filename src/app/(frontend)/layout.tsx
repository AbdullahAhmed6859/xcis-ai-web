import { Footer } from "@/features/layout/footer";
import "../globals.css";
import { Header } from "@/features/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://xcis.ai"),
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full" id="root">
        {children}
      </main>
      <Footer />
    </div>
  );
}
