"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ApplyButton({ jobTitle }: { jobTitle: string }) {
  const email = "careers@xcis.ai";

  // Encode the strings so they are safe for URLs
  const subject = encodeURIComponent(`Job Application for ${jobTitle}`);
  const body = encodeURIComponent(
    `Please see my resume attached for ${jobTitle}.`,
  );

  // Direct composition links
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-dark-blue text-white hover:bg-white hover:text-dark-blue border-dark-blue border hover:border-dark-blue transition-colors duration-300 cursor-pointer",
          )}
        >
          Apply Now
        </button>
      </DropdownMenuTrigger>

      {/* align="end" keeps the dropdown aligned to the right edge of the button */}
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem asChild>
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-full"
          >
            Open in Gmail
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={outlookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-full"
          >
            Open in Outlook
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a href={mailtoLink} className="cursor-pointer w-full">
            Default Email App
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ApplyButton;
