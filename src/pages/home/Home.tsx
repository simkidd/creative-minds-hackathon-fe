import GetStarted from "@/components/home/GetStarted";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import StayUpdated from "@/components/home/StayUpdated";
import SuccessStory from "@/components/home/SuccessStory";
import HelmetComp from "@/components/shared/HelmetComp";

const Home = () => {
  return (
    <div>
      <HelmetComp
        title="Home"
        keywords="education, Nigeria, learning, skills"
      />

      <div>
        <HeroSection />
        <HowItWorks />
        <SuccessStory />
        <StayUpdated />
        <GetStarted />
      </div>
    </div>
  );
};

export default Home;
