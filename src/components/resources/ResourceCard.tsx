import { IResource } from "@/interfaces/resource.interface";
import { Button } from "../ui/button";

interface ResourceCardProps {
  resource: IResource;
}
const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-4 pb-0">
        <div className="aspect-square rounded-md bg-gray-100">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {resource.title}
        </h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium">Subject:</span> {resource.subject}
          </p>
          <p>
            <span className="font-medium">Language:</span> {resource.language}
          </p>
          <p>
            <span className="font-medium">Grade Level:</span>{" "}
            {resource.gradeLevel}
          </p>
          <p>
            <span className="font-medium">Format:</span> {resource.format}
          </p>
        </div>
        <div className="mt-4">
          <Button variant={"outline"} className="w-full cursor-pointer">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
