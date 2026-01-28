import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

type NavItemProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

export function NavItem({ label, href, onClick }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href} onClick={onClick}>
          <span className="text-dark-blue font-semibold">{label}</span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
