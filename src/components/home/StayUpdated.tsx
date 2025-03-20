import { Button } from "../ui/button";
import { motion } from "framer-motion";

const StayUpdated = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 pb-[150px]">
        <motion.div
          className="bg-[#333] p-8 md:p-12 rounded-lg grid lg:grid-cols-5 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-span-3">
            <motion.h3
              className="text-[28px] pb-3.5 text-white poppins-semibold text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stay Updated
            </motion.h3>
            <motion.p
              className="text-lg text-white text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Subscribe to our newsletter to receive updates on new resources,
              success stories, and opportunities to get involved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-12 px-10 cursor-pointer w-full md:w-fit"
              >
                Subscribe
              </Button>
            </motion.div>
          </div>

          <motion.h2
            className="text-[130px] text-primary poppins-extrabold absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            edufree<span className="text-secondary">4all.</span>
          </motion.h2>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StayUpdated;