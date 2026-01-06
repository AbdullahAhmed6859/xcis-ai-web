"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MainLogo from "./MainLogo";
import SpeakWithOurTeamButton from "./SpeakWithOurTeamButton";
import { NAV_ITEMS } from "./nav-items";
import { NavItem } from "./NavItem";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function Header() {
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  return (
    <header className="h-16 sm:h-20 w-full grid place-items-center sticky top-0 bg-white shadow-md z-50">
      <Container className="flex justify-between items-center">
        <MainLogo />
        <NavigationMenu viewport={isMobile} className="hidden xl:block">
          <NavigationMenuList className="flex-wrap">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} label={item.label} href={item.href} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <SpeakWithOurTeamButton />
          <Button
            className="xl:hidden bg-dark-blue"
            onClick={() => setOpenMobile(true)}
          >
            <Menu />
          </Button>
        </div>
      </Container>
    </header>
  );
}
