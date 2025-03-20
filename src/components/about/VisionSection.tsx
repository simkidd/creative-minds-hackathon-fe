import Image3 from "@/assets/images/people/closeup-shot-black-male-child-writing-notebook_181624-46286.png";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <motion.section
      className="w-full mb-[60px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 mx-auto">
        <motion.h3
          className="text-center text-[28px] poppins-semibold py-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Vision
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 bg-white">
          <motion.div
            className="flex flex-col justify-center lg:px-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[20px] poppins-semibold mb-6 poppins-semibold">
              Edufree4all's Vision
            </h4>
            <p className="text-[16px] poppins-regular leading-[32px] open-sans text-[#333]">
              We envision a Nigeria where every child, regardless of their
              background, has the opportunity to learn, grow, and thrive. By
              empowering children with education and skills, we aim to create a
              future where they can contribute meaningfully to their communities
              and the world.
            </p>
          </motion.div>
          <motion.div
            className="aspect-video overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Image3}
              alt={"cute-pupils-computer-class"}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VisionSection;