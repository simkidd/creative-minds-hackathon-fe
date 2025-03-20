import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "iconsax-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-[945px] w-full mx-auto flex items-center flex-col">
          <motion.h1
            className="text-4xl poppins-bold pb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bridging the Education Gap in Nigeria.
          </motion.h1>
          <motion.p
            className="pb-8 lg:text-[22px] text-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Access free learning materials, find volunteers, and get support for
            your education journey.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-8 flex-col md:flex-row w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to={"/resources"} className="w-full md:w-fit">
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;