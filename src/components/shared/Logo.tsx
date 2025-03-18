import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <h4 className="lg:text-3xl text-2xl text-primary poppins-extrabold">
          edufree<span className="text-secondary">4all.</span>
        </h4>
      </Link>
    </div>
  );
};

export default Logo;
