import StayUpdated from "@/components/home/StayUpdated";
import DigitalResource from "@/components/resources/DigitalResource";
import PhysicalResource from "@/components/resources/PhysicalResource";
import HelmetComp from "@/components/shared/HelmetComp";
import PageHeadings from "@/components/shared/PageHeadings";
import SearchInput from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/button";
import {
  setResources,
  setResourceType,
  setSearchQuery,
} from "@/store/features/resource/resource.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { resources as resourcesData } from "@/data/resource.data";

const Resources = () => {
  const dispatch = useAppDispatch();
  const { resourceType, searchQuery } = useAppSelector(
    (state) => state.resource
  );

  const handleTabChange = (type: "digital" | "physical") => {
    dispatch(setResourceType(type));
    window.location.hash = type;
  };

  useEffect(() => {
    dispatch(setResources(resourcesData));
  }, [dispatch]);

  useEffect(() => {
    // Read the hash from the URL when the component mounts
    const hash = window.location.hash.replace("#", "");
    if (hash === "digital" || hash === "physical") {
      dispatch(setResourceType(hash));
    }
  }, [dispatch]);

  const handleSearchChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div>
      <HelmetComp
        title="Find Resources"
        keywords="education, Nigeria, learning, skills"
      />
      <PageHeadings
        heading="Resources for Learning."
        subHeading="Access digital learning materials or request physical resources like uniforms and books."
        className="pb-10 pt-32"
      >
        <div className="mt-10 w-full">
          <SearchInput
            placeholder="Search book name, subject, workbook..."
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          {/* tabs */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              size={"lg"}
              variant={resourceType === "digital" ? "default" : "ghost"}
              className="px-10 cursor-pointer"
              onClick={() => handleTabChange("digital")}
            >
              Digital Resources
            </Button>
            <Button
              size={"lg"}
              variant={resourceType === "physical" ? "default" : "ghost"}
              className="px-10 cursor-pointer"
              onClick={() => handleTabChange("physical")}
            >
              Physical Resources
            </Button>
          </div>
        </div>
      </PageHeadings>

      <div className="mb-10">
        {resourceType === "digital" ? (
          <DigitalResource searchQuery={searchQuery} />
        ) : (
          <PhysicalResource searchQuery={searchQuery} />
        )}
      </div>

      <div className="mt-10">
        <StayUpdated />
      </div>
    </div>
  );
};

export default Resources;
