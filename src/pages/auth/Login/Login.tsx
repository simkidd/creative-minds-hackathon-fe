import AuthHeadings from "@/components/auth/AuthHeadings";
import LoginForm from "@/components/auth/LoginForm";
import HelmetComp from "@/components/shared/HelmetComp";

const Login = () => {
  return (
    <div>
      <HelmetComp
        title="Login"
        description="Login to your account to access your dashboard."
      />
      <AuthHeadings heading="Sign In" subHeading="Sign in with your details" />

      <LoginForm />
    </div>
  );
};

export default Login;
