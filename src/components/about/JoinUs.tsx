import { Button } from "../ui/button";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 pb-[150px]">
        <motion.div
          className="bg-[#f8f8f8] p-4 md:p-12 py-16 lg:py-24 rounded-lg flex flex-col relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[940px] mx-auto">
            <motion.h3
              className="text-4xl pb-3.5 poppins-semibold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join Us at edufree4all
            </motion.h3>
            <motion.p
              className="text-xl lg:text-[22px] text-center poppins-regular mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Whether you’re a donor, volunteer, you can be part of the
              solution...
            </motion.p>

            <motion.div
              className="flex items-center gap-4 md:gap-8 justify-center flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                size={"lg"}
                className="px-10 cursor-pointer w-full md:w-fit"
              >
                Find resources
              </Button>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="px-10 cursor-pointer w-full md:w-fit"
              >
                Volunteer
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JoinUs;