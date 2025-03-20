import Image3 from "@/assets/images/15000-students.png";
import { motion } from "framer-motion";

const OurImpact = () => {
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
          Our Impact
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
          <motion.div
            className="flex flex-col justify-center lg:px-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[20px] poppins-semibold mb-6 poppins-semibold">
              Edufree4all’s Impact On Nigerian Education
            </h4>
            <p className="text-[16px] poppins-regular leading-[32px] open-sans text-[#333]">
              Since our launch, we’ve helped{" "}
              <span className="text-primary">10000+</span> children gain access
              to learning materials, trained{" "}
              <span className="text-primary">5000+</span> students in digital
              literacy, and connected <span className="text-primary">1500</span>{" "}
              mentors with aspiring learners. Together, we’re making a
              difference—one child at a time. We provide access to learning
              materials, digital literacy programs, mentorship, reducing
              out-of-school crisis.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-[350px] lg:h-[509px] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Image3}
              alt={"15000-students"}
              className="w-full h-full object-contain object-top"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurImpact;