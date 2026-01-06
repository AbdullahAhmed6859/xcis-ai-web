// import Image, { ImageProps } from "next/image";

export function WhiteImage({
  className,
  alt,
  ...props
}: React.ComponentProps<"img">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      className={`brightness-0 invert-100 ${className}`}
    />
  );
}
