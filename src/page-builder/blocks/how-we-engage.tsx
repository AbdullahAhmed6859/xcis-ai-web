import { Container } from "@/features/layout/container";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { HowWeEngageSectionProps } from "@/page-builder/blocks/page-builder-types";
import { cn } from "@/lib/utils";

export function HowWeEngage({
  heading,
  text,
  steps,
  backgroundColor,
}: HowWeEngageSectionProps) {
  return (
    <Container className="relative overflow-hidden lg:overflow-visible pb-16 lg:pb-24">
      <div className="mb-12 lg:mb-20">
        <SectionHeader backgroundColor={backgroundColor} textAlign="left">
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && (
            <SectionDescription className="max-w-2xl mt-4">
              {text}
            </SectionDescription>
          )}
        </SectionHeader>
      </div>

      <div className="@container flex flex-col relative gap-12 lg:gap-16">
        {steps.map((step, index) => {
          const isRightAligned = index % 2 !== 0;

          return (
            <div
              key={step._key}
              className={cn(
                "relative z-10 lg:w-1/2",
                isRightAligned ? "lg:ml-auto lg:text-right" : "lg:mr-auto",
              )}
            >
              <div className="relative inline-block">
                <h3 className="text-6xl md:text-7xl lg:text-9xl font-medium text-dark-blue tracking-tighter mb-4">
                  {step.title}
                </h3>

                {index === 0 && steps.length > 1 && (
                  <div className="hidden lg:block absolute left-[calc(100%+1rem)] top-1/2 w-[calc(75cqw-100%-1rem)] h-[70px] pointer-events-none">
                    <div className="w-full h-full border-t-[3px] border-r-[3px] border-dashed border-dark-blue/50 rounded-tr-[10px] relative">
                      <div className="absolute -bottom-[7px] -right-[8px]">
                        <ArrowTipDown />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {step.description && (
                <p
                  className={cn(
                    "text-base text-gray-600 leading-relaxed max-w-sm",
                    isRightAligned && "lg:ml-auto",
                  )}
                >
                  {step.description}
                </p>
              )}

              {index === 1 && steps.length > 2 && (
                <div className="hidden lg:block absolute top-[calc(100%+0.5rem)] left-[-5cqw] right-[25cqw] h-[70px] pointer-events-none">
                  <div className="w-full h-full border-r-[3px] border-b-[3px] border-dashed border-dark-blue/50 rounded-br-[10px] relative">
                    <div className="absolute -left-[7px] -bottom-[8px]">
                      <ArrowTipLeft />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

// --- TINY SVG ARROW TIPS ---
// These are just the tips, so they don't distort when the layout changes.

function ArrowTipDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16L0 0H16L8 16Z" fill="#1a2b4b" />
    </svg>
  );
}

function ArrowTipLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8L16 16V0L0 8Z" fill="#1a2b4b" />
    </svg>
  );
}
