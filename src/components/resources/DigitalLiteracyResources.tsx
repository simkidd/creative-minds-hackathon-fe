import { useAppSelector } from "@/store/hooks";
import { EmojiSad } from "iconsax-react";
import { useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import { Button } from "../ui/button";
import DigitalLiteracyCard from "./DigitalLiteracyCard";

const categories = [
  "Technology Basics",
  "Internet Basics",
  "Productivity Tools",
  "Digital Communication",
  "Digital Literacy for Teachers",
];

const ITEMS_PER_PAGE = 6;

const DigitalLiteracyResources = ({ searchQuery }: { searchQuery: string }) => {
  const { digitalLiteracyResources } = useAppSelector(
    (state) => state.resource
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Technology Basics");

  const filteredResources = digitalLiteracyResources?.filter((resource) => {
    const matchesSearchQuery =
      !searchQuery ||
      resource.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      resource.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearchQuery && matchesCategory;
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

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setCurrentPage(1);
  };

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-[28px] poppins-semibold pb-10">
          Suggested Categories
        </h3>

        {/* filter tabs */}
        <div className="flex items-center flex-wrap justify-center gap-4 lg:gap-6 w-full max-w-4xl mx-auto mb-14">
          {categories.map((category, i) => (
            <Button
              key={i}
              variant={selectedCategory === category ? "default" : "outline"}
              size={"lg"}
              className="py-5.5 !px-8 cursor-pointer rounded-[100px]"
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentResources.length > 0 ? (
            currentResources.map((item, i) => (
              <DigitalLiteracyCard key={i} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <EmojiSad className="text-gray-400 w-12 h-12" /> {/* Icon */}
                <p className="text-gray-500 text-lg">No resources found.</p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
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

export default DigitalLiteracyResources;
