export function SectionHeading({ children }: React.PropsWithChildren) {
  return (
    <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}
