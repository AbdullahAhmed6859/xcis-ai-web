"use client";
import { SidebarCloseIcon, X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
];

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const pathName = usePathname();

  return (
    <Sidebar variant="floating">
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel className="flex my-2 items-center">
            <div className="flex-1 text-lg text-center">Menu Options</div>
            <Button
              onClick={() => setOpenMobile(false)}
              size="icon"
              className="bg-dark-blue"
            >
              <X />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathName === item.href}
                    className="flex justify-center text-lg text-dark-blue"
                    onClick={() => setOpenMobile(false)}
                  >
                    <Link href={item.href}>
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={() => setOpenMobile(false)}>
                  <Button className="bg-dark-blue">
                    <X /> close
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
