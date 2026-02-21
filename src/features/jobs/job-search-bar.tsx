"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Search } from "lucide-react";

interface JobSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  locationQuery: string;
  setLocationQuery: (query: string) => void;
  availableLocations: string[];
}

export function JobSearchBar({
  searchQuery,
  setSearchQuery,
  locationQuery,
  setLocationQuery,
  availableLocations,
}: JobSearchBarProps) {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationWrapperRef = useRef<HTMLDivElement>(null);

  // Filter the dropdown list based on what the user is typing in the location box
  const dropdownLocations = useMemo(() => {
    if (!locationQuery) return availableLocations;
    return availableLocations.filter((loc) =>
      loc.toLowerCase().includes(locationQuery.toLowerCase()),
    );
  }, [availableLocations, locationQuery]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        locationWrapperRef.current &&
        !locationWrapperRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full border border-gray-300 rounded-lg bg-white shadow-sm relative z-30">
      {/* Find Input */}
      <div className="flex-1 flex items-center px-4 py-3 md:py-4 border-b md:border-b-0 md:border-r border-gray-200">
        <div className="flex flex-col w-full">
          <span className="text-[10px] uppercase font-bold text-dark-blue tracking-wide mb-0.5">
            Find
          </span>
          <input
            type="text"
            placeholder="Job title, skill, or keywords"
            className="w-full text-sm outline-none placeholder:text-dark-blue/50 text-dark-blue bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Location Input (With Dropdown) */}
      <div
        className="flex-1 flex items-center px-4 py-3 md:py-4 relative"
        ref={locationWrapperRef}
      >
        <div className="flex flex-col w-full">
          <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-dark-blue tracking-wide mb-0.5">
            Near Location
          </span>
          <input
            type="text"
            placeholder="City, Country, State"
            className="w-full text-sm outline-none placeholder:text-dark-blue/50 text-dark-blue bg-transparent"
            value={locationQuery}
            onFocus={() => setIsLocationOpen(true)}
            onChange={(e) => {
              setLocationQuery(e.target.value);
              setIsLocationOpen(true);
            }}
          />
        </div>

        {/* Dropdown Menu */}
        {isLocationOpen && dropdownLocations.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {dropdownLocations.map((loc, idx) => (
              <button
                key={idx}
                className="w-full text-left px-4 py-3 text-sm text-dark-blue hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                onClick={() => {
                  setLocationQuery(loc);
                  setIsLocationOpen(false);
                }}
              >
                {loc}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="bg-dark-blue text-white px-8 py-4 flex items-center justify-center hover:opacity-90 transition-opacity rounded-b-lg md:rounded-b-none md:rounded-r-lg">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}
