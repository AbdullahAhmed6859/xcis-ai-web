"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";
import { MEDIUM_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { RelatedMedia } from "./related-media";
import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Media(props: NonNullable<MEDIUM_QUERYResult>) {
  const {
    title,
    author,
    mainImage,
    body,
    publishedAt,
    categories,
    relatedMedia,
  } = props;

  return (
    <article className="min-h-screen bg-white">
      {/* HERO SECTION
       */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-dark-blue overflow-hidden">
        {/* Background Image */}
        {mainImage?.asset && (
          <div className="absolute inset-0">
            <Image
              src={urlFor(mainImage).url()}
              alt={mainImage.alt || title}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/70 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-8 left-0 w-full z-20 ml-6">
          <Link href="/media" className="inline-block">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white backdrop-blur-sm text-dark-blue font-medium shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Media
            </Button>
          </Link>
        </div>

        {/* Hero Content - Positioned Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 pt-24">
          <Container>
            {/* Grid Layout to match Body Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 lg:col-start-3">
                {/* Category Tags */}
                {categories && categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-600/90 hover:bg-blue-600 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-md"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                  {title}
                </h1>

                {/* Meta Data */}
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                  {author && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 opacity-80" />
                      {author.name}
                    </div>
                  )}

                  {publishedAt && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 opacity-80" />
                      {new Date(publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  )}

                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 opacity-80" />
                    Media
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* BODY CONTENT
       */}
      <div className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Text Column */}
            <div className="lg:col-span-8 lg:col-start-3">
              {body && (
                <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600">
                  <PortableText value={body} components={components} />
                </div>
              )}

              {/* Related Media */}
              {relatedMedia && relatedMedia.length > 0 && (
                <div className="mt-20 pt-10 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-dark-blue mb-8">
                    Related Media
                  </h3>
                  <RelatedMedia relatedMedia={relatedMedia} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
