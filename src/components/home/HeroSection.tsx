import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "iconsax-react";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-[945px] w-full mx-auto flex items-center flex-col">
          <h1 className="text-4xl poppins-bold pb-4 text-center">
            Bridging the Education Gap in Nigeria.
          </h1>
          <p className="pb-8 lg:text-[22px] text-xl text-center">
            Access free learning materials, find volunteers, and get support for
            your education journey.
          </p>

          <div className="flex items-center justify-center gap-8 flex-col md:flex-row w-full">
            <Link to={"/resources"}>
              <Button size={"lg"} className="cursor-pointer w-full md:w-fit">
                Find Resources
              </Button>
            </Link>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="cursor-pointer w-full md:w-fit"
            >
              Request Help <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
