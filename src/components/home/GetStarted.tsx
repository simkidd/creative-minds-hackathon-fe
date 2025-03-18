import { ArrowRight } from "iconsax-react";
import { Button } from "../ui/button";

const GetStarted = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pb-[150px]">
        <div className=" bg-[#f8f8f8] p-4 md:p-12 py-16 lg:py-24 rounded-lg flex flex-col relative">
          <div className="max-w-[940px] mx-auto">
            <h3 className="text-4xl pb-3.5 poppins-semibold text-center">
              Your Journey to Education Starts Here!
            </h3>
            <p className="text-xl lg:text-[22px] text-center poppins-regular mb-12">
              Whether you’re looking for free learning materials, want to
              volunteer, or need support, edufree4all is here to help. Join us
              in bridging the education gap in Nigeria.
            </p>

            <div className="flex items-center gap-4 md:gap-8 justify-center flex-col md:flex-row">
              <Button size={"lg"} className="px-10 cursor-pointer w-full md:w-fit">
                Find resources
              </Button>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="px-10 cursor-pointer w-full md:w-fit"
              >
                Volunteer
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className=" px-10 cursor-pointer w-full md:w-fit"
              >
                Request Help <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
