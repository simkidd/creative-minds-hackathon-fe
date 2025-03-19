import { IResource } from "@/interfaces/resource.interface";
import ResourceCard from "./ResourceCard";

const resources: IResource[] = [
  {
    id: "1",
    title: "Algebra Basics",
    subject: "Mathematics",
    language: "English",
    gradeLevel: "JSS 2",
    format: "PDF",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    id: "2",
    title: "Introduction to Biology",
    subject: "Biology",
    language: "English",
    gradeLevel: "SSS 1",
    format: "PDF",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Chemistry Reactions",
    subject: "Chemistry",
    language: "English",
    gradeLevel: "SSS 2",
    format: "PDF",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Physics Mechanics",
    subject: "Physics",
    language: "English",
    gradeLevel: "SSS 3",
    format: "PDF",
    image: "https://via.placeholder.com/150",
  },
];

const ResourcesContent = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesContent;
