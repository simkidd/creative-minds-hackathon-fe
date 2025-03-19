import StayUpdated from "@/components/home/StayUpdated";
import ResourcesContent from "@/components/resources/ResourcesContent";
import PageHeadings from "@/components/shared/PageHeadings";
import SearchInput from "@/components/shared/SearchInput";

const Resources = () => {
  return (
    <div>
      <PageHeadings
        heading="Resources for Learning."
        subHeading="Access digital learning materials or request physical resources like uniforms and books."
      >
        <div className="mt-20 w-full">
          <SearchInput />
        </div>
      </PageHeadings>

      <ResourcesContent />
      <StayUpdated />
    </div>
  );
};

export default Resources;
