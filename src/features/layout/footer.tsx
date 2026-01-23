import { Separator } from "@/components/ui/separator";
import Container from "./Container";
import { FOOTER_COMPANY_ITEMS, FOOTER_HELP_ITEMS } from "./nav-items";
import Link from "next/link";
import FooterLogo from "./FooterLogo";
import { CurrentYear } from "./current-year";

export function Footer() {
  return (
    <footer className="bg-dark-blue rounded-t-xl">
      <Container className="py-6 flex flex-col">
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-white text-xl font-bold">Company</h2>
            {FOOTER_COMPANY_ITEMS.map(({ href, label }) => (
              <div className="" key={href}>
                <Link href={href} className=" text-white">
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-white text-xl font-bold">Help</h2>
            {FOOTER_HELP_ITEMS.map(({ href, label }) => (
              <div className="" key={href}>
                <Link href={href} className=" text-white">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-y-1">
          <div className="mx-auto w-full max-w-58">
            <FooterLogo className="w-full max-w-58" />
          </div>
          <div className="text-center text-white max-w-58 mx-auto">
            AI & data consulting for nuclear, energy & critical infrastructure.
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-white text-center">
          <p>
            &copy; <CurrentYear /> XCIS AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
