import { CloudConnection, FolderAdd, Headphone, Icon } from "iconsax-react";

interface Item {
  icon: Icon;
  title: string;
  className: string;
}

const items: Item[] = [
  {
    icon: FolderAdd,
    title: "Find or Share Resources",
    className: "text-primary"
  },
  {
    icon: CloudConnection,
    title: "Connect with Volunteers.",
    className: "text-secondary"

  },
  {
    icon: Headphone,
    title: "Get Support for Education.",
    className: "text-primary"
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-0 pb-[150px]">
        <h3 className="text-center pb-3.5 text-[28px] poppins-semibold">
          How it works
        </h3>
        <p className="text-center text-lg poppins-regular">
          Secure, Seamless, and Instant Transactions
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

              <p className="poppins-medium text-lg md:text-xl text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
