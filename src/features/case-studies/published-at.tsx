import { CASE_STUDY_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<CASE_STUDY_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
