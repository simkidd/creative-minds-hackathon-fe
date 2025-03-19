import { Button } from "../ui/button";

const StayUpdated = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pb-[150px]">
        <div className=" bg-[#333] p-8 md:p-12 rounded-lg grid lg:grid-cols-5 relative">
          <div className="col-span-3">
            <h3 className="text-[28px] pb-3.5 text-white poppins-semibold text-center md:text-left">
              Stay Updated
            </h3>
            <p className="text-lg text-white text-center md:text-left">
              Subscribe to our newsletter to receive updates on new resources,
              success stories, and opportunities to get involved.
            </p>

            <Button
              variant={"secondary"}
              size={"lg"}
              className="mt-12 px-10 cursor-pointer w-full md:w-fit"
            >
              Subscribe
            </Button>
          </div>

          <h2 className="text-[130px] text-primary poppins-extrabold absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-10">
            edufree<span className="text-secondary">4all.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
