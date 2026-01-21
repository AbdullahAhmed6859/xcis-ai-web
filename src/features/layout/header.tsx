"use client";

import { useState } from "react";
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
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link for mobile menu

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-16 sm:h-20 w-full grid place-items-center sticky top-0 bg-white shadow-md z-50">
      <Container className="flex justify-between items-center relative">
        <MainLogo />

        {/* Desktop Menu - Keeps using NavigationMenu for hover effects */}
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
            className="xl:hidden bg-dark-blue hover:bg-dark-blue/90"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          "absolute xl:hidden top-full left-0 w-full bg-white shadow-lg border-t z-40 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {/* CHANGED: Switched from NavigationMenu to a simple <nav> with Links */}
        <nav className="flex flex-col items-center space-y-4 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              // Apply text-dark-blue directly to the Link/Anchor tag
              className="text-lg font-semibold text-dark-blue hover:text-dark-blue/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
