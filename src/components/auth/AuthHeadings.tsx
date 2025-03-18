const AuthHeadings = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="mb-[52px]">
      <h2 className="poppins-bold text-[28px] pb-2">{heading}</h2>
      <p className="poppins-regular text-lg text-gray-400">{subHeading}</p>
    </div>
  );
};

export default AuthHeadings;
