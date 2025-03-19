import Image3 from "@/assets/images/people/closeup-shot-black-male-child-writing-notebook_181624-46286.png";

const VisionSection = () => {
  return (
    <section className="w-full mb-[60px]">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-[28px] poppins-semibold py-[60px]">
          Our Mission
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 bg-white">
          <div className="flex flex-col justify-center lg:px-12">
            <h4 className="text-[20px] poppins-semibold mb-6 poppins-semibold">
              Edufree4all's Vission
            </h4>
            <p className="text-[16px] poppins-regular leading-[32px] open-sans text-[#333]">
              We envision a Nigeria where every child, regardless of their
              background, has the opportunity to learn, grow, and thrive. By
              empowering children with education and skills, we aim to create a
              future where they can contribute meaningfully to their communities
              and the world.
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={Image3}
              alt={"cute-pupils-computer-class"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
