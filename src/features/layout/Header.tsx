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
import { Menu, X } from "lucide-react"; // Import X for the close icon
import { cn } from "@/lib/utils"; // Ensure you have this utility
import Link from "next/link"; // Assuming NavItem uses Link, need it for mobile items

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-16 sm:h-20 w-full grid place-items-center sticky top-0 bg-white shadow-md z-50">
      <Container className="flex justify-between items-center relative">
        <MainLogo />

        {/* Desktop Menu */}
        <NavigationMenu viewport={isMobile} className="hidden xl:block">
          <NavigationMenuList className="flex-wrap">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} label={item.label} href={item.href} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <SpeakWithOurTeamButton />

          {/* Mobile Toggle Button */}
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

      {/* Mobile Navigation Dropdown (Slides from top) */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 overflow-hidden transition-all duration-300 ease-in-out",
          // When open: visible and expanded. When closed: height 0 and invisible.
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-gray-800 hover:text-dark-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* Optional: Add a mobile-specific CTA inside the menu if you want */}
        </nav>
      </div>
    </header>
  );
}
