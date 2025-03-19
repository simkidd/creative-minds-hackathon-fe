import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

const schema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  type: z.string().min(1, { message: "Feedback type is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(">>>form submitted", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            className="w-full border border-gray-300 text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="">
          <label htmlFor="email" className="text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full border border-gray-300 text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Feedback Type Field */}
      <div className="mt-[24px]">
        <label htmlFor="type" className="text-gray-600 mb-1">
          Feedback Type
        </label>
        <select
          id="type"
          {...register("type")}
          className="w-full border border-gray-300 text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="general" className="hover:!bg-primary">
            General Inquiry
          </option>
          <option value="support" className="hover:!bg-primary">
            Support
          </option>
          <option value="feedback" className="hover:!bg-primary">
            Feedback
          </option>
        </select>
        {errors.type && (
          <p className="mt-1 text-xs text-red-600">{errors.type.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="mt-[24px]">
        <label htmlFor="message" className="text-gray-600 mb-1">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full border border-gray-300 text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center mt-[60px]">
        <Button size={"lg"} type="submit" className="px-10 w-full md:w-fit cursor-pointer">
          Submit Feedback
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
