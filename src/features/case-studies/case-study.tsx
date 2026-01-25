"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Briefcase } from "lucide-react";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";
import { CASE_STUDY_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { RelatedCaseStudies } from "./related-case-studies";
import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <Link href="/case-studies" className="inline-block">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white backdrop-blur-sm text-dark-blue font-medium shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>

        {/* Hero Content - Positioned Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 pt-24">
          <Container>
            {/* CHANGED: Applied the same grid layout as the body content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 lg:col-start-3">
                {/* Service Tags */}
                {services && services.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {services.map((service) => (
                      <Badge
                        key={service._id}
                        className="bg-blue-600/90 hover:bg-blue-600 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-md"
                      >
                        {service.title}
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
                    <Briefcase className="h-4 w-4 mr-2 opacity-80" />
                    Case Study
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
            {/* Main Text Column - Matches the Hero Column above */}
            <div className="lg:col-span-8 lg:col-start-3">
              {body && (
                <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600">
                  <PortableText value={body} components={components} />
                </div>
              )}

              {/* Related Case Studies */}
              {relatedCaseStudies && relatedCaseStudies.length > 0 && (
                <div className="mt-20 pt-10 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-dark-blue mb-8">
                    Related Case Studies
                  </h3>
                  <RelatedCaseStudies relatedCaseStudies={relatedCaseStudies} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
