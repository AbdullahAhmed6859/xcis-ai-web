"use client";

import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MainLogo from "./MainLogo";
import SpeakWithOurTeamButton from "./SpeakWithOurTeamButton";
import { NAV_ITEMS } from "./nav-items";
import { NavItem } from "./NavItem";
import Container from "./container";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react"; // Imported ChevronRight
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-16 sm:h-20 w-full grid place-items-center sticky top-0 bg-white shadow-md z-50">
      <Container className="flex justify-between items-center relative">
        <MainLogo className="w-36 sm:w-40 2xl:w-48" />

        {/* Desktop Menu */}
        <NavigationMenu viewport={isMobile} className="hidden xl:block">
          <NavigationMenuList className="flex-wrap">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} label={item.label} href={item.href} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SpeakWithOurTeamButton />
          </div>

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
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {/* CHANGED: Layout to match the reference image */}
        <nav className="flex flex-col px-6 py-4">
          {/* Menu Items with Lines and Arrows */}
          <div className="flex flex-col">
            {NAV_ITEMS.map((item, i) => (
              <React.Fragment key={i}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center justify-between w-full py-2 border-b border-gray-100 group transition-colors",
                    pathname.startsWith(item.href)
                      ? "text-light-blue"
                      : "text-dark-blue",
                  )}
                >
                  <span className="font-semibold text-lg">{item.label}</span>
                  {/* Arrow Icon */}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-dark-blue transition-colors" />
                </Link>
                <Separator />
              </React.Fragment>
            ))}
          </div>

          {/* Log in Button */}
          <div className="mt-4 mb-2" onClick={handleLinkClick}>
            <SpeakWithOurTeamButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
