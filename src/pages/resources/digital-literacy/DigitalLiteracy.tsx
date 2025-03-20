import DigitalLiteracyResources from "@/components/resources/DigitalLiteracyResources";
import HelmetComp from "@/components/shared/HelmetComp";
import PageHeadings from "@/components/shared/PageHeadings";
import SearchInput from "@/components/shared/SearchInput";
import { digitalLiteracyData } from "@/data/resource.data";
import {
  setDigitalLiteracyResources,
  setSearchQuery,
} from "@/store/features/resource/resource.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const DigitalLiteracy = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((state) => state.resource);

  useEffect(() => {
    dispatch(setDigitalLiteracyResources(digitalLiteracyData));
  }, [dispatch]);

  const handleSearchChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div>
      <HelmetComp
        title="Digital Literacy"
        keywords="education, Nigeria, learning, skills"
      />
      <PageHeadings
        heading="Digital Literacy Resources"
        subHeading="Learn essential digital skills to thrive in today’s world. Explore beginner-friendly tutorials, videos, and guides on using computers, the internet, and productivity tools."
        className="pb-10 pt-32"
      >
        <div className="mt-10 w-full">
          <SearchInput
            placeholder="Search for specific topics"
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
      </PageHeadings>

      <div className="mb-16">
        <DigitalLiteracyResources searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default DigitalLiteracy;
