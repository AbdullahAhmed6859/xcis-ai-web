import { Separator } from "@/components/ui/separator";
import { Container } from "./container";
import { FOOTER_COMPANY_ITEMS, FOOTER_HELP_ITEMS } from "./nav-items";
import Link from "next/link";
import { FooterLogo } from "./footer-logo";
import { CurrentYear } from "./current-year";
import { EmailForm } from "../contact/email-form";
import LinkedInIcon from "@/icons/linkedin-icon";
import XComIcon from "@/icons/x-com-icon";

export function Footer() {
  return (
    <footer className="bg-dark-blue">
      <Container className="py-6 flex flex-col">
        <div className="lg:hidden flex justify-evenly">
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
        <Separator className="lg:hidden my-6" />
        <div className="lg:hidden px-4 pb-6 w-4/5">
          <div className="mr-auto max-w-md pb-2">
            <FooterLogo className="w-full" />
          </div>
          <div className="flex flex-start gap-3 pb-2">
            <LinkedInIcon size={20} />
            <XComIcon size={20} />
          </div>
          <p className="text-white">
            AI & data consulting for nuclear, energy & critical infrastructure.
          </p>
        </div>
        <div className="lg:hidden px-4 w-full max-w-xs sm:max-w-sm">
          <EmailForm />
          <p className="text-xs text-white pt-4">
            You&apos;ll receive occasional emails from XCIS. You always have the
            choice to unsubscribe.
          </p>
        </div>
        <div className="hidden lg:flex justify-between w-full gap-x-24 xl:gap-x-36 2xl:gap-x-48">
          <div className="w-full">
            <div className="mr-auto pb-2">
              <FooterLogo className="w-full" />
            </div>
            <div className="flex flex-start gap-3 pb-4">
              <LinkedInIcon size={20} />
              <XComIcon size={20} />
            </div>
            <p className="text-white">
              AI & data consulting for nuclear, energy & critical
              infrastructure.
            </p>
          </div>
          <div className="w-full flex justify-between">
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
          <div className="w-full space-y-4">
            <div className="space-y-2">
              <h2 className="text-white text-xl font-bold">Stay Updated</h2>
              <p className="text-white text-sm">
                You&apos;ll receive occasional emails from XCIS. You always have
                the choice to unsubscribe.
              </p>
            </div>
            <div className="w-full 2xl:w-6/7">
              <EmailForm />
            </div>
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

// https://www.linkedin.com/company/xcis-ai
