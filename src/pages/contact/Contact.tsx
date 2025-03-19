import ContactForm from "@/components/contact/ContactForm";
import HelmetComp from "@/components/shared/HelmetComp";
import PageHeadings from "@/components/shared/PageHeadings";

const Contact = () => {
  return (
    <div>
      <HelmetComp
        title="Contact Us"
        description="Get in touch with EduConnect for any inquiries or support."
      />

      <PageHeadings
        heading="We’d Love to Hear from You!"
        subHeading="Have questions, feedback, or suggestions? Reach out to us using the form below, and we’ll get back to you as soon as possible.."
      />

      <div className="container px-4 mx-auto">
        <h3 className="text-center pb-3.5 text-[28px] poppins-semibold">
          We Value Your Feedback
        </h3>
        <p className="text-center text-lg leading-[32px] poppins-regular">
          Let us know how we can serve you better.
        </p>
        <div className="mt-[60px] w-full max-w-[1000px] mx-auto pb-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
