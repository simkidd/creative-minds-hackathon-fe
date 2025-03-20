import { DocumentText1, Import, MonitorMobbile, Play } from "iconsax-react";
import { Button } from "../ui/button";
import { ILiteracy } from "@/interfaces/resource.interface";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";

const DigitalLiteracyCard = ({ item }: { item: ILiteracy }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300 bg-[#f8f8f8] p-6 flex flex-col">
      <div className="bg-white size-[60px] rounded-full flex items-center justify-center mb-[25px]">
        <MonitorMobbile />
      </div>

      <h4 className="text-lg poppins-medium mb-2">{item.title}</h4>
      <p className="open-sans leading-[24px] text-[#333] mb-6">
        {item.description}
      </p>
      <div className="flex items-center gap-2  mb-6 text-[#333]">
        <Play size={16} /> {item.videos} videos | <DocumentText1 size={16} />{" "}
        {item.pdfs} PDF guides
      </div>
      <div className="flex mt-auto">
        <Button
          variant={"outline"}
          size={"lg"}
          className="px-10 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          View Lesson
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="!max-w-6xl py-8 px-10 rounded-lg bg-white dark:bg-gray-900 !max-h-[90dvh] overflow-y-auto">
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
              <div>
                <h3 className="text-lg poppins-medium text-gray-900 lg:text-3xl">
                  {item?.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Category:{" "}
                  <span className="text-primary ">{item.category}</span>
                </p>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row">
                <div className="rounded-full overflow-hidden h-[80px] w-[80px] shrink-0">
                  <img src={item.image} alt="author" />
                </div>

                <div>
                  <span className="text-gray-600">Author</span>
                  <p className="text-primary text-lg">Johnson Fredrick</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-lg font-semibold">Brief Description:</h3>
              <p className=" text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <ScrollArea className="mt-4 max-h-60">
                  <h4 className="text-lg font-semibold">What You’ll Learn</h4>
                  <ul className="mt-2 space-y-2  text-gray-700 dark:text-gray-300">
                    {[
                      "How to turn on and off a computer.",
                      "How to use a mouse and keyboard.",
                      "How to navigate the desktop and open applications.",
                    ].map((module, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-red-500">📌</span> {module}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Resources To Get Started
                </h3>
                <p className="mt-2 inline-flex items-center">
                  <Play size={16} className="mr-1" /> <span>3 Videos</span>
                </p>
                <ul className="mt-2 space-y-2  text-gray-700 dark:text-gray-300">
                  {[
                    "How to turn on / off a computer",
                    "How to use a mouse and keyboard",
                    "Navigate desktop and open applications",
                  ].map((module, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <a href="#" target="_blank" className="text-primary">
                        {module}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-2  inline-flex items-center">
                  <DocumentText1 size={16} className="mr-1" />{" "}
                  <span>2 PDF Guides</span>
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      TechnologyBeginner_1.pdf
                    </span>
                    <Button size={"lg"} className="cursor-pointer">
                      Download PDF <Import />
                    </Button>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      TechnologyBeginner_2.pdf
                    </span>
                    <Button size={"lg"} className="cursor-pointer">
                      Download PDF <Import />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DigitalLiteracyCard;
