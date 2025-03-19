import { Link } from "react-router-dom";
import LogoImg from "@/assets/logos/edufreelogo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to={"/"} className="h-14 md:h-20">
        <img src={LogoImg} alt="edufree4all-logo" className="w-full h-full object-contain" />
      </Link>
    </div>
  );
};

export default Logo;
