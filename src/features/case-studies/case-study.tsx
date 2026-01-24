"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Briefcase } from "lucide-react";

import { components } from "@/sanity/portableTextComponents";
import { CASE_STUDY_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { RelatedCaseStudies } from "./related-case-studies";
import { cn } from "@/lib/utils";
import Container, { containerVariants } from "../layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PortableText } from "next-sanity";

export function CaseStudy(props: NonNullable<CASE_STUDY_QUERYResult>) {
  const {
    title,
    author,
    mainImage,
    body,
    publishedAt,
    services,
    relatedCaseStudies,
  } = props;

  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-gray-900 to-blue-900 w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={urlFor(mainImage).url()}
            alt={mainImage.alt || title}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/case-studies">
            <Button
              variant="secondary"
              className="bg-white/90 hover:bg-white backdrop-blur-sm text-black"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className={cn(containerVariants(), "px-0")}>
            <div>
              {/* Service Tags */}
              {services && services.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {services.map((service) => (
                    <Badge
                      key={service._id}
                      className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-3 py-1 text-sm font-medium"
                    >
                      {service.title}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                {title}
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg font-medium">
                {/* Author */}
                {author && (
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    {author.name}
                  </div>
                )}

                {/* Date */}
                {publishedAt && (
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {new Date(publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )}

                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Case Study
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {body ? (
          <div className="">
            <div className="prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl text-dark-blue dark:prose-invert mx-auto">
              <PortableText value={body} components={components} />
            </div>
          </div>
        ) : null}

        {/* Footer / Related (Full Width of Grid) */}
        {relatedCaseStudies && relatedCaseStudies.length > 0 && (
          <div className="lg:col-span-12 mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold mb-8">Related Case Studies</h3>
            <RelatedCaseStudies relatedCaseStudies={relatedCaseStudies} />
          </div>
        )}
      </div>
    </>
  );
}
