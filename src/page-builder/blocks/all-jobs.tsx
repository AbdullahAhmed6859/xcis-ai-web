"use client";

import { useState, useMemo, useEffect } from "react";
import { Container } from "@/features/layout/container";
import { AllJobsSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { JobCard, JobSearchBar } from "@/features/jobs";

export function AllJobs({
  backgroundColor,
  heading,
  text,
  jobs,
}: AllJobsSectionProps) {
  // --- State for Inputs ---
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  // --- State for Active Filters (Debounced) ---
  const [activeSearch, setActiveSearch] = useState("");
  const [activeLocation, setActiveLocation] = useState("");

  // --- Debounce Effect ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSearch(searchQuery);
      setActiveLocation(locationQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, locationQuery]);

  // --- Extract Unique Locations ---
  const uniqueLocations = useMemo(() => {
    if (!jobs) return [];
    const locations = jobs.map((job) => job.location);
    return Array.from(new Set(locations)).sort();
  }, [jobs]);

  // --- Filter Jobs (Uses debounced values) ---
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter((job) => {
      // 1. Check text search
      const matchesSearch =
        activeSearch === "" ||
        job.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
        job.department.toLowerCase().includes(activeSearch.toLowerCase());

      // 2. Check location search
      const matchesLocation =
        activeLocation === "" ||
        job.location.toLowerCase().includes(activeLocation.toLowerCase());

      return matchesSearch && matchesLocation;
    });
  }, [jobs, activeSearch, activeLocation]);

  return (
    <Container className="flex flex-col gap-10 min-h-[600px]">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-job-entry {
          animation: fadeSlideUp 0.4s ease-out forwards;
        }
      `}</style>

      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>
      </div>

      {/* Search Interface */}
      <div className="flex flex-col gap-6">
        <JobSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
          availableLocations={uniqueLocations}
        />
      </div>

      {/* Job Listings */}
      <div className="flex flex-col gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={job.slug + index}
              className="animate-job-entry"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <JobCard job={job} />
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 animate-job-entry">
            No jobs found matching your criteria.
          </div>
        )}
      </div>
    </Container>
  );
}
