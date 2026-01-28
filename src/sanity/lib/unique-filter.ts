import { ReferenceFilterResolverContext } from "sanity";

export const uniqueFilter = ({ parent }: ReferenceFilterResolverContext) => {
  // Cast parent as an array of objects with a _ref property
  const existingItems = parent as Array<{ _ref?: string }> | undefined;

  // Safely extract the IDs
  const selectedIds =
    existingItems
      ?.map((item) => item._ref)
      .filter((id): id is string => !!id) || [];

  return {
    filter: "!(_id in $selectedIds)",
    params: {
      selectedIds,
    },
  };
};
