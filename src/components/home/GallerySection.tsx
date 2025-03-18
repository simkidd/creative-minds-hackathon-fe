import Image2 from "@/assets/images/people/african-kid-learning-class_23-2148892534.png";
import Image5 from "@/assets/images/people/african-kids-paying-attention-class_23-2148892527.png";
import Image1 from "@/assets/images/people/smiling-pupil-sitting-her-desk_13339-140893.png";
import Image3 from "@/assets/images/people/closeup-shot-black-male-child-writing-notebook_181624-46286.png";
import Image4 from "@/assets/images/people/white-background-arms-corporate-absence-isolation_1134-958.png";

const GallerySection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-10 py-[150px]">
        <div className="grid grid-cols-5 grid-rows-7 gap-4 max-w-5xl mx-auto h-[450px]">
          <img
            src={Image1}
            alt="Child 1"
            className="h-full w-full object-cover rounded-lg row-start-2 row-end-8"
          />
          <img
            src={Image2}
            alt="Child 2"
            className="h-full w-full object-cover rounded-lg row-start-1 row-end-7"
          />
          <img
            src={Image3}
            alt="Child 3"
            className="h-full w-full object-cover rounded-lg row-start-2 row-end-8"
          />

          <img
            src={Image4}
            alt="Child 4"
            className="h-full w-full object-cover object-left rounded-lg row-start-1 row-end-7"
          />
          <img
            src={Image5}
            alt="Child 5"
            className="h-full w-full object-cover object-right rounded-lg row-start-2 row-end-8"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
