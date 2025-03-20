import { IResource } from "@/interfaces/resource.interface";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Import } from "iconsax-react";
import { X } from "lucide-react";

interface ResourceCardProps {
  resource: IResource;
}
const ResourceCard = ({ resource }: ResourceCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300">
      <div className="p-4 pb-0">
        <div
          className="aspect-square rounded-md bg-gray-100 overflow-hidden
        "
        >
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
        <div className="mt-4 flex justify-center">
          <Button
            variant={"outline"}
            size={'lg'}
            className="cursor-pointer px-10"
            onClick={() => setOpen(true)}
          >
            View
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="!max-w-4xl p-6 px-10 rounded-lg bg-white dark:bg-gray-900 !max-h-[90dvh] overflow-y-auto">
              <DialogHeader>
                <Button
                  size={"icon"}
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 rounded-full cursor-pointer size-6.5 z-[2]"
                >
                  <X className="w-5 h-5" />
                </Button>
              </DialogHeader>
              <div className="flex justify-between pt-4 gap-4">
                <div className="flex items-center gap-4 flex-col md:flex-row">
                  <div className="rounded-full overflow-hidden h-[80px] w-[80px] shrink-0">
                    <img src={resource?.image} alt="author" />
                  </div>
                  <div>
                    <span className="text-gray-600">Author</span>
                    <p className="text-primary text-lg">Johnson Fredrick</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg poppins-medium text-gray-900 lg:text-3xl">
                    {resource?.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Subject:{" "}
                    <span className="text-primary ">{resource?.subject}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-4">
                <div className="col-span-3 md:col-span-2 aspect-square rounded-lg shadow overflow-hidden">
                  <img
                    src={resource?.image}
                    alt={resource?.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-5 md:col-span-6">
                  <p className=" text-gray-700 dark:text-gray-300">
                    Trigonometry is a branch of mathematics that studies the
                    relationships between the angles and sides of triangles,
                    particularly right-angled triangles. It involves functions
                    such as sine (sin), cosine (cos), and tangent (tan)...
                  </p>
                </div>
              </div>

              <ScrollArea className="mt-4 max-h-60">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  Course Curriculum (Preview of Modules)
                </h4>
                <ul className="mt-2 space-y-2  text-gray-700 dark:text-gray-300">
                  {[
                    "Introduction to Trigonometry & Basic Concepts",
                    "Trigonometric Ratios & Functions",
                    "Solving Right Triangles",
                    "The Unit Circle & Graphs of Trigonometric Functions",
                    "Trigonometric Identities & Equations",
                    "Applications of Trigonometry in Real Life",
                  ].map((module, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-red-500">📌</span> {module}
                    </li>
                  ))}
                </ul>
              </ScrollArea>

              <div className="mt-4 flex justify-center items-center gap-4">
                <Button size={"lg"} className="cursor-pointer">
                  Download PDF <Import />
                </Button>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  File Size: 2MB
                </span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
