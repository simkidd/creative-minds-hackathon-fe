import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 py-16 gap-10">
          <div className="col-span-1 lg:col-span-2">
            <h4 className="lg:text-3xl text-2xl text-white poppins-extrabold">
              edufree<span className="text-secondary">4all.</span>
            </h4>
            <p className="py-3.5">
              edufree4all is a community-driven platform bridging the education
              gap in Nigeria by providing free resources, volunteer support, and
              digital literacy programs.
            </p>

            <Link
              to=""
              className="text-secondary flex items-center italic hover:underline hover:underline-offset-2 transition-all duration-300 w-fit gap-1 hover:gap-2"
            >
              Learn more <ArrowRight />
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-4 grid grid-cols-4 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <h5 className="text-xl poppins-semibold mb-3.5">Quick Links</h5>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Find resources
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Request Help
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h5 className="text-xl poppins-semibold mb-3.5">Legal Links</h5>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <h5 className="text-xl poppins-semibold mb-3.5">Contact Us</h5>
              <ul className="flex flex-col gap-3">
                <li>
                  Email:{" "}
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    info@edufree4all.ng
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    +234 123 456 7890
                  </a>
                </li>
                <li>
                  Address:{" "}
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-2 transition-all duration-300"
                  >
                    123 Education Street, Lagos, Nigeria
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 border-t border-gray-400/70">
          <p className="text-center">
            &copy; {getYear()} EduShare. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
