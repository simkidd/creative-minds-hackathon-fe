import Image3 from "@/assets/images/people/group-african-kids-learning-together_23-2148892523.png";
import { motion } from "framer-motion";

const MisionSection = () => {
  return (
    <motion.section
      className="w-full"
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
          Our Mission
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-4 bg-white">
          <motion.div
            className="aspect-video overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Image3}
              alt={"group-african-kids-learning-together"}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center lg:px-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[20px] poppins-semibold mb-6 poppins-semibold">
              Edufree4all's Mission
            </h4>
            <p className="text-[16px] poppins-regular leading-[32px] open-sans text-[#333]">
              At edufree4all, we believe that every child deserves access to
              quality education and the tools to succeed in a digital world. Our
              mission is to bridge the education gap in Nigeria by providing
              underserved children with learning resources, digital literacy
              programs, and mentorship opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MisionSection;