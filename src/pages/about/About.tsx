import JoinUs from "@/components/about/JoinUs";
import MisionSection from "@/components/about/MisionSection";
import OurImpact from "@/components/about/OurImpact";
import VisionSection from "@/components/about/VisionSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import HelmetComp from "@/components/shared/HelmetComp";
import PageHeader from "@/components/shared/PageHeader";

const About = () => {
  return (
    <div>
      <HelmetComp
        title="About Us"
        description="Learn more about EduConnect and our mission to improve education in Nigeria."
        canonical="https://educonnect.ng/about"
      />

      <PageHeader title="About Us" />
      <MisionSection />
      <VisionSection />
      <WhatWeDo />
      <OurImpact />
      <JoinUs />
    </div>
  );
};

export default About;
