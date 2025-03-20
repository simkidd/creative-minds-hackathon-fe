import { useAppSelector } from "@/store/hooks";
import { EmojiSad } from "iconsax-react";
import { useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import ResourceCard from "./ResourceCard";

const ITEMS_PER_PAGE = 4;

const PhysicalResource = ({ searchQuery }: { searchQuery: string }) => {
  const { resources } = useAppSelector((state) => state.resource);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemTypeFilter, setItemTypeFilter] = useState<string>("");
  const [conditionFilter, setConditionFilter] = useState<string>("");
  const [sizeFilter, setSizeFilter] = useState<string>("");

  // Filter resources for the physical tab
  const filteredResources = resources.filter((resource) => {
    const isPhysicalResource = resource.type === "physical";
    const matchesSearchQuery =
      resource.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.gradeLevel?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesItemType = itemTypeFilter
      ? resource.format === itemTypeFilter
      : true;
    const matchesCondition = conditionFilter
      ? resource.condition === conditionFilter
      : true;
    const matchesSize = sizeFilter ? resource.size === sizeFilter : true;

    return (
      isPhysicalResource &&
      matchesSearchQuery &&
      matchesItemType &&
      matchesCondition &&
      matchesSize
    );
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);

  // Get the resources for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResources = filteredResources.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {/* filter section */}
        <div className="flex flex-wrap items-center justify-center gap-4 my-8">
          <div className="flex items-center flex-col md:flex-row gap-2 w-full md:w-fit">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Filter by:
            </label>
            <select
              value={itemTypeFilter}
              onChange={(e) => setItemTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full bg-gray-100 cursor-pointer"
            >
              <option value="" hidden>
                Item Type
              </option>
              <option value="Uniforms">Uniforms</option>
              <option value="Stationery">Stationery</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full md:w-fit">
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              className="px-4 py-2 border border-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full bg-gray-100 cursor-pointer"
            >
              <option value="" hidden>
                Condition
              </option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full md:w-fit">
            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full bg-gray-100 cursor-pointer"
            >
              <option value="" hidden>
                Size (Uniform)
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>

        {/* resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredResources.length > 0 ? (
            currentResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="col-span-full text-center pb-24">
              <div className="flex flex-col items-center justify-center gap-2">
                <EmojiSad className="text-gray-400 w-12 h-12" /> {/* Icon */}
                <p className="text-gray-500 text-lg">No resources found.</p>
              </div>
            </div>
          )}
        </div>

        {filteredResources.length > ITEMS_PER_PAGE && (
          <div className="w-full py-14">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhysicalResource;
