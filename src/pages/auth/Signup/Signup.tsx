import AuthHeadings from "@/components/auth/AuthHeadings";
import ChooseAccountType from "@/components/auth/ChooseAccountType";
import SignUpForm from "@/components/auth/SignUpForm";
import HelmetComp from "@/components/shared/HelmetComp";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

const Signup = () => {
  const { accountType } = useAppSelector((state) => state.auth);
  const [step, setStep] = useState<"choose-account" | "signup-form">(
    "choose-account"
  );

  return (
    <div>
      <HelmetComp
        title="Signup"
        description="Create a new account to get started."
      />

      {step === "signup-form" && (
        <AuthHeadings
          heading={
            accountType === "teacher"
              ? "Sign Up to Teach / Mentor"
              : "Sign Up as a Student"
          }
          subHeading={
            accountType === "teacher"
              ? "Sign up to start teaching / mentoring on edufree4all"
              : "Join edufree4all as a student and start learning"
          }
        />
      )}

      {step === "choose-account" ? (
        <ChooseAccountType setStep={setStep} />
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default Signup;
