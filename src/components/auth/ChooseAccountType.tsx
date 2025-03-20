import { setAccountType } from "@/store/features/auth/auth.slice";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "../ui/button";

const ChooseAccountType = ({
  setStep,
}: {
  setStep: (step: "choose-account" | "signup-form") => void;
}) => {
  const dispatch = useAppDispatch();

  const handleAccountTypeSelect = (type: "user" | "teacher") => {
    dispatch(setAccountType(type));
    setStep("signup-form");
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center ">
      <div className="w-sm mx-auto flex flex-col">
        <h2 className="poppins-bold text-2xl mb-[52px] text-center">
          Sign up as:
        </h2>
        <div>
          <Button
            variant={"default"}
            size={"lg"}
            className="w-full cursor-pointer"
            onClick={() => handleAccountTypeSelect("teacher")}
          >
            Teacher / Mentor
          </Button>

          {/* "Or" Divider */}
          <div className="relative flex items-center justify-center my-8">
            <hr className="w-1/2 border-t border-gray-300" />
            <span className="absolute bg-white px-4 text-gray-500">or</span>
          </div>

          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full cursor-pointer"
            onClick={() => handleAccountTypeSelect("user")}
          >
            Student
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseAccountType;
