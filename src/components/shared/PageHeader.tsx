const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-primary w-full h-[180px] lg:h-[216px] relative overflow-hidden">
      <div className="container px-4 mx-auto flex items-center justify-center w-full h-full">
        <h1 className="text-white poppins-bold text-4xl">{title}</h1>
      </div>

      {/* circles */}
      <div className="absolute -top-[300px] -left-[200px] w-[400px] h-[400px] lg:top-1/2 md:left-0 md:w-[750px] md:h-[750px] bg-white opacity-5 backdrop-blur-[4px] rounded-full"></div>

      <div className="absolute top-1/2 -right-[200px] w-[400px] h-[400px] lg:top-1/2 md:-right-[375px] md:w-[750px] md:h-[750px] bg-white opacity-5 backdrop-blur-[4px] rounded-full"></div>
    </div>
  );
};

export default PageHeader;
