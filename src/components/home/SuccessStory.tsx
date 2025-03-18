import Image1 from "@/assets/images/people/african-kid-learning-class_23-2148892534.png";
import Image3 from "@/assets/images/people/group-african-kids-learning-together_23-2148892523.png";
import Image2 from "@/assets/images/people/smiling-pupil-sitting-her-desk_13339-140893.png";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface IStory {
  name: string;
  age?: number;
  location: string;
  content: string;
  image: string;
}

const stories: IStory[] = [
  {
    name: "Chinedu",
    age: 12,
    location: "Enugu",
    content:
      "Chinedu had always been curious about technology but had no access to a computer or the internet. When he heard about EduShare’s Digital Literacy Program, he signed up immediately. Through the platform, he learned how to use a smartphone for learning, access free online courses, and even code basic programs. Chinedu’s newfound skills caught the attention of a local tech hub, which offered him an internship. Now, he’s teaching other kids in his community how to use technology.",
    image: Image1,
  },
  {
    name: "Amina",
    age: 12,
    location: "Lagos",
    content:
      "Amina had been out of school for two years because her family could no longer afford her school fees. Her mother, a single parent, struggled to make ends meet as a street vendor. Through EduShare, Amina’s mother discovered free learning resources and connected with a local volunteer tutor who offered free lessons twice a week. With the help of donated textbooks and a tablet provided by a community donor, Amina started catching up on her studies.",
    image: Image2,
  },
  {
    name: "The Okonkwo Family",
    location: "Kano",
    content:
      "The Okonkwo family had three children who were out of school due to the high cost of education and transportation. Through EduShare, they connected with a volunteer who provided free lessons at a nearby community center. The platform also helped them access donated school uniforms, books, and even a bicycle for the children to commute to school. Today, all three children are back in school, and their parents have joined a community support group to help other families in similar situations. ",
    image: Image3,
  },
];

const SuccessStory = () => {
  // Refs for custom navigation buttons
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-0 pb-[150px]">
        <h3 className="text-center pb-3.5 text-[28px] poppins-semibold">
          Success Stories
        </h3>
        <p className="text-center text-xl lg:text-[22px] poppins-regular">
          Stories of children or families who have benefited from the platform.
        </p>

        <div className="mt-12 w-full relative">
          <Swiper
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            className="w-full h-full"
          >
            {stories.map((story, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-[350px_auto] lg:grid-cols-[450px_auto] gap-8 lg:gap-2">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:px-12">
                    <h4 className="text-[20px] poppins-semibold mb-6 poppins-semibold">
                      {story.name}, {story.age && story.age + " years old,"}{" "}
                      {story.location}
                    </h4>
                    <p className="text-[16px] poppins-regular leading-[32px] open-sans text-[#333]">
                      {story.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 lg:absolute right-0 bottom-0 z-[1] mt-4 lg:mt-0">
            <button
              ref={prevButtonRef}
              className="size-[45px] flex items-center justify-center rounded-full bg-[#F8F8F8] text-primary hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
            >
              <ArrowLeft2 />
            </button>
            <button
              ref={nextButtonRef}
              className="size-[45px] flex items-center justify-center rounded-full bg-[#F8F8F8] text-primary hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
            >
              <ArrowRight2 />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
