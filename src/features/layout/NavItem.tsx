import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

type NavItemProps = {
  label: string;
  href: string;
};

export function NavItem({ label, href }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href}>
        <span className="text-dark-blue font-semibold">{label}</span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
