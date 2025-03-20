import Image2 from "@/assets/images/people/african-kid-learning-class_23-2148892534.png";
import Image5 from "@/assets/images/people/african-kids-paying-attention-class_23-2148892527.png";
import Image1 from "@/assets/images/people/smiling-pupil-sitting-her-desk_13339-140893.png";
import Image3 from "@/assets/images/people/closeup-shot-black-male-child-writing-notebook_181624-46286.png";
import Image4 from "@/assets/images/people/white-background-arms-corporate-absence-isolation_1134-958.png";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = [
    { src: Image1, alt: "Child 1", className: "row-start-2 row-end-6 md:row-start-2 md:row-end-8" },
    { src: Image2, alt: "Child 2", className: "row-start-1 row-end-5 md:row-start-1 md:row-end-7" },
    { src: Image3, alt: "Child 3", className: "row-start-2 row-end-6 md:row-start-2 md:row-end-8" },
    { src: Image4, alt: "Child 4", className: "row-start-1 row-end-5 md:row-start-1 md:row-end-7" },
    { src: Image5, alt: "Child 5", className: "row-start-2 row-end-6 md:row-start-2 md:row-end-8" },
  ];

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 pt-10 py-[150px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-5 md:grid-rows-7 gap-4 h-[455px]">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`h-full w-full object-cover ${image.className}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;