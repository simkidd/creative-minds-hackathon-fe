import StayUpdated from "@/components/home/StayUpdated";
import ResourcesContent from "@/components/resources/ResourcesContent";
import PageHeadings from "@/components/shared/PageHeadings";
import SearchInput from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div>
      <PageHeadings
        heading="Resources for Learning."
        subHeading="Access digital learning materials or request physical resources like uniforms and books."
      >
        <div className="mt-10 w-full">
          <SearchInput />
          
          {/* tabs */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Button size={"lg"} variant={'default'} className="px-10 cursor-pointer">
              Digital Resources
            </Button>
            <Button size={"lg"} variant={'ghost'} className="px-10 cursor-pointer">
              Physical Resources
            </Button>
          </div>
        </div>
      </PageHeadings>

      <ResourcesContent />
      <StayUpdated />
    </div>
  );
};

export default Resources;
