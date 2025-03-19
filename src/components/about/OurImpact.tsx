import Image3 from "@/assets/images/15000-students.png";

const OurImpact = () => {
  return (
    <section className="w-full mb-[60px]">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-[28px] poppins-semibold py-[60px]">
          Our Impact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
          <div className="flex flex-col justify-center lg:px-12">
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
          </div>
          <div className="w-full h-[350px] lg:h-[509px] overflow-hidden">
            <img
              src={Image3}
              alt={"15000-students"}
              className="w-full h-full object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
