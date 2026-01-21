import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { mediaSectionProps } from "@/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { textColourVariants } from "../layout/section-header";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
  media: mediaSectionProps["media"][0];
};

export function MediaCardSmall({ media }: Props) {
  const { title, slug, mainImage, author, categories, publishedAt, readTime } =
    media;

  const categoryTitle =
    categories && categories.length > 0 ? categories[0].title : null;
  return (
    // 1. CHANGE: flex-col (mobile) -> sm:flex-row (tablet/desktop)
    <Card className="pl-0 py-0 flex flex-col sm:flex-row gap-0">
      <CardContent className="p-0 w-full sm:w-2/5 shrink-0">
        <Image
          src={urlFor(mainImage).width(624).height(416).url()}
          alt={title}
          className="aspect-3/2 h-full w-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover"
          width={624}
          height={416}
        />
      </CardContent>

      {/* 3. CHANGE: w-full (mobile) -> sm:w-3/5 (desktop) */}
      <div className="w-full sm:w-3/5 py-6 flex flex-col justify-between gap-y-8">
        <CardHeader>
          {categoryTitle && (
            <div className="mb-4">
              <span className="inline-block bg-dark-blue text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {categoryTitle}
              </span>
            </div>
          )}
          <h3
            className={cn(
              textColourVariants({ backgroundColor: "white" }),
              "text-lg md:text-xl font-bold line-clamp-2",
            )}
          >
            {title}
          </h3>
        </CardHeader>
        <CardFooter className="flex-col items-baseline gap-y-4">
          <div className="flex">
            <Avatar className="w-10 h-10">
              <AvatarImage src={urlFor(author.image).url()} alt={author.name} />
              <AvatarFallback>
                {author.name
                  .trim()
                  .split(/\s+/)
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 flex flex-col justify-center">
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatDate(publishedAt)} . {readTime} min read
              </p>
            </div>
          </div>
          <Link
            href={`/media/${slug}`}
            className="text-dark-blue flex flex-row items-center gap-x-2 text-sm font-medium hover:underline"
          >
            Read More <ChevronRight />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}

export default MediaCardSmall;

const formatDate = (dateString: string) => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null; // Return original string if parsing fails
  }
};
