import { FolderAdd, Icon, Monitor } from "iconsax-react";
import { RiGraduationCapLine } from "react-icons/ri";

interface Item {
  icon: Icon;
  title: string;
  className: string;
}

const items: Item[] = [
  {
    icon: FolderAdd,
    title: "Resource sharing (e.g. Books, uniforms).",
    className: "text-primary",
  },
  {
    icon: Monitor,
    title: "Digital literacy (e.g., a computer or tablet).",
    className: "text-secondary",
  },
  {
    icon: RiGraduationCapLine,
    title: "Mentorship (e.g., a mentor and student).",
    className: "text-primary text-[24px]",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-0 pb-[150px]">
        <h3 className="text-center pb-3.5 text-[28px] poppins-semibold">
          What we do
        </h3>
        <p className="text-center text-lg leading-[32px] poppins-regular">
          We connect donors, volunteers, and beneficiaries to share learning
          materials, provide digital literacy training, and offer mentorship
          programs. Our platform makes it easy for anyone to contribute to
          solving Nigeria’s education crisis.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="md:px-[40px] py-[54px] bg-[#F8F8F8] rounded-md flex items-center flex-col"
            >
              <div className="bg-white size-[60px] rounded-full flex items-center justify-center mb-[25px]">
                <item.icon className={item.className} />
              </div>

              <p className="poppins-medium text-lg md:text-xl text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
