import AuthHeadings from "@/components/auth/AuthHeadings";
import SignUpForm from "@/components/auth/SignUpForm";
import HelmetComp from "@/components/shared/HelmetComp";

const Signup = () => {
  return (
    <div>
      <HelmetComp
        title="Signup"
        description="Create a new EduConnect account to get started."
      />

      <AuthHeadings
        heading="Sign Up to Teach / Mentor"
        subHeading="Sign up to start teaching / mentoring on edufree4all"
      />

      <SignUpForm />
    </div>
  );
};

export default Signup;
