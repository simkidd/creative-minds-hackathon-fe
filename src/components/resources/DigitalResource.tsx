import { useAppSelector } from "@/store/hooks";
import { BookSquare, EmojiSad, Play } from "iconsax-react";
import { useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import { Button } from "../ui/button";
import ResourceCard from "./ResourceCard";

interface DigitalResourceProps {
  searchQuery: string;
}

const ITEMS_PER_PAGE = 4;

const DigitalResource = ({ searchQuery }: DigitalResourceProps) => {
  const { resources } = useAppSelector((state) => state.resource);
  const [currentPage, setCurrentPage] = useState(1);
  const [digitalFileType, setDigitalFileType] = useState<
    "Book" | "Video" | "Offline Download"
  >("Book");

  // Filter resources for the digital tab
  const filteredResources = resources.filter((resource) => {
    const isDigitalResource = resource.type === "digital";
    const matchesSearchQuery =
      resource.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.gradeLevel?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFileType = resource.digitalFileType === digitalFileType;

    return isDigitalResource && matchesSearchQuery && matchesFileType;
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

  // Handle digitalFileType filter change
  const handleFileTypeChange = (
    type: "Book" | "Video" | "Offline Download"
  ) => {
    setDigitalFileType(type);
    setCurrentPage(1);
  };

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex items-center gap-4 lg:gap-6 justify-center flex-wrap my-8">
          <Button
            variant={digitalFileType === "Book" ? "default" : "outline"}
            size={"lg"}
            className="py-5.5 !px-8 cursor-pointer"
            onClick={() => handleFileTypeChange("Book")}
          >
            <BookSquare className="mr-2" />
            Books
          </Button>
          <Button
            variant={digitalFileType === "Video" ? "default" : "outline"}
            size={"lg"}
            className="py-5.5 !px-8 cursor-pointer"
            onClick={() => handleFileTypeChange("Video")}
          >
            <Play className="mr-2" />
            Videos
          </Button>
          <Button
            variant={
              digitalFileType === "Offline Download" ? "default" : "outline"
            }
            size={"lg"}
            className="py-5.5 !px-8 cursor-pointer"
            onClick={() => handleFileTypeChange("Offline Download")}
          >
            <Play className="mr-2" />
            Offline Downloads
          </Button>
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.length > 0 ? (
            currentResources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} />
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

export default DigitalResource;
