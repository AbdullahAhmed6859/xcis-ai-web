import Footer from "@/features/layout/Footer";
import "../globals.css";
import { Header } from "@/features/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/layout/AppSidebar";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full h-full">
        {/* <Header /> */}
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
