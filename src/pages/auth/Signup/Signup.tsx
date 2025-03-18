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

      <AuthHeadings heading="Sign In" subHeading="Sign in with your details" />

      <SignUpForm />
    </div>
  );
};

export default Signup;
