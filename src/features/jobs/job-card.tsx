import Link from "next/link";
import { ChevronRight } from "lucide-react";

// You can move this type to a shared types file if preferred
export type JobItem = {
  title: string;
  slug: string;
  department: string;
  postedAt: string;
  location: string;
};

interface JobCardProps {
  job: JobItem;
}

export function JobCard({ job }: JobCardProps) {
  // Helper to format date
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <Link href={`/careers/${job.slug}`} className="group block">
      <div className="w-full bg-white border border-gray-300 rounded-xl p-6 sm:px-8 sm:py-7 flex justify-between items-center hover:shadow-md transition-all duration-300 cursor-pointer group-hover:bg-dark-blue group-hover:border-dark-blue">
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-dark-blue group-hover:text-white transition-colors duration-300">
            {job.title}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base text-dark-blue group-hover:text-white font-light transition-colors duration-300">
            <span>Posted Date {formatDate(job.postedAt)}</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <span>{job.location}</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <span>{job.department}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="text-dark-blue group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
          <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
