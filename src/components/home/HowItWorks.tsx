import { CloudConnection, FolderAdd, Headphone, Icon } from "iconsax-react";
import { motion } from "framer-motion";

interface Item {
  icon: Icon;
  title: string;
  className: string;
}

const items: Item[] = [
  {
    icon: FolderAdd,
    title: "Find or Share Resources",
    className: "text-primary",
  },
  {
    icon: CloudConnection,
    title: "Connect with Volunteers.",
    className: "text-secondary",
  },
  {
    icon: Headphone,
    title: "Get Support for Education.",
    className: "text-primary",
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 pt-0 pb-[150px]">
        <motion.h3
          className="text-center pb-3.5 text-[28px] poppins-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h3>
        <motion.p
          className="text-center text-lg poppins-regular"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Secure, Seamless, and Instant Transactions
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="md:px-[40px] py-[54px] bg-[#F8F8F8] rounded-md flex items-center flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white size-[60px] rounded-full flex items-center justify-center mb-[25px]">
                <item.icon className={item.className} />
              </div>

              <p className="poppins-medium text-lg md:text-xl text-center">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;