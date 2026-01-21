import Footer from "@/features/layout/Footer";
import "../globals.css";
import { Header } from "@/features/layout/Header";

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
