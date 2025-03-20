import { digitalLiteracyData } from "@/data/resource.data";
import { Button } from "../ui/button";
import DigitalLiteracyCard from "./DigitalLiteracyCard";
import { EmojiSad } from "iconsax-react";
import CustomPagination from "../shared/CustomPagination";

const categories = [
  "Technology Basics",
  "Internet Basics",
  "Productivity Tools",
  "Digital Communication",
  "Digital Literacy for Teachers",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DigitalLiteracyResources = ({ searchQuery }: { searchQuery: string }) => {
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
              variant={"default"}
              size={"lg"}
              className="py-5.5 !px-8 cursor-pointer rounded-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalLiteracyData.length > 0 ? (
            digitalLiteracyData.map((item, i) => (
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

        <div className="w-full py-14">
          <CustomPagination
            currentPage={1}
            totalPages={1}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalLiteracyResources;
