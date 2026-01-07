import { CASE_STUDY_QUERYResult, POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  services: NonNullable<CASE_STUDY_QUERYResult>["services"];
};

export function ServiceTags({ services }: CategoriesProps) {
  return services.map((service) => (
    <span
      key={service._id}
      className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
    >
      {service.title}
    </span>
  ));
}
