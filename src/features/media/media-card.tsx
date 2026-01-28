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
import { getInitilas } from "@/lib/getInitials";

type Props = {
  media: mediaSectionProps["media"][0];
};

export function MediaCard({ media }: Props) {
  const { title, slug, mainImage, author, categories, publishedAt, readTime } =
    media;

  const categoryTitle =
    categories && categories.length > 0 ? categories[0] : null;

  return (
    // 1. WRAPPER: Wrap the entire card in a Link to make it clickable
    <Link href={`/media/${slug}`} className="block group h-full">
      <Card
        className={cn(
          "pl-0 py-0 flex flex-col sm:flex-row gap-0 h-full overflow-hidden",
          // 2. HOVER STATE: Add transitions for shadow and border color
          "transition-all duration-300 ease-in-out",
          "hover:shadow-lg hover:border-dark-blue/30 border-transparent shadow-sm",
        )}
      >
        <CardContent className="p-0 w-full sm:w-2/5 shrink-0 overflow-hidden relative">
          <Image
            src={urlFor(mainImage).width(624).height(416).url()}
            alt={title}
            // 3. IMAGE HOVER: Added group-hover:scale-105 for a zoom effect
            className="aspect-3/2 h-full w-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover transition-transform duration-500 group-hover:scale-105"
            width={624}
            height={416}
          />
        </CardContent>

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
                // 4. TEXT HOVER: Added group-hover:text-dark-blue
                "text-lg md:text-xl font-bold line-clamp-2 group-hover:text-dark-blue transition-colors",
              )}
            >
              {title}
            </h3>
          </CardHeader>
          <CardFooter className="flex-col items-baseline gap-y-4">
            <div className="flex">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={urlFor(author.image).url()}
                  alt={author.name}
                />
                <AvatarFallback>{getInitilas(author.name)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 flex flex-col justify-center">
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(publishedAt)} . {readTime} min read
                </p>
              </div>
            </div>
            <span className="text-dark-blue flex flex-row items-center gap-x-2 text-sm font-medium group-hover:underline">
              Read More <ChevronRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}

const formatDate = (dateString: string) => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  } catch (error) {
    return null;
  }
};
