import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavLinkText({ href, children }: Props) {
  return (
    <Link href={href} className="text-dark-blue">
      {children}
    </Link>
  );
}

export default NavLinkText;
