import Image3 from "@/assets/images/people/group-african-kids-learning-together_23-2148892523.png";

const MisionSection = () => {
  return (
    <section className="w-full">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-[28px] poppins-semibold py-[60px]">
          Our Mission
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-4 bg-white">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={Image3}
              alt={"group-african-kids-learning-together"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center lg:px-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionSection;
