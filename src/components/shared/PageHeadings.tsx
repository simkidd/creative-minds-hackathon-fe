const PageHeadings = ({
  children,
  heading,
  subHeading,
}: {
  children?: React.ReactNode;
  heading: string;
  subHeading: string;
}) => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-[945px] w-full mx-auto flex items-center flex-col">
          <h1 className="text-4xl poppins-bold pb-4 text-center">{heading}</h1>
          <p className="pb-8 lg:text-[22px] text-xl text-center">
            {subHeading}
          </p>

          <div className="flex items-center justify-center gap-8 flex-col md:flex-row w-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeadings;
