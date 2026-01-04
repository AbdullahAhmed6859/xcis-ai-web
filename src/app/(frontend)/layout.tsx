import "../globals.css";
import { Header } from "@/features/layout/Header";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main className="w-screen">{children}</main>
    </>
  );
}
