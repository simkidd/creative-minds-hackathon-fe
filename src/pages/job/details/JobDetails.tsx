import HelmetComp from "@/components/shared/HelmetComp";
import { IJob } from "@/interfaces/job.interface";

const JobDetails = () => {
  const job: IJob = {
    id: "1",
    title: "Software Engineer",
    company: "XYZ Corp",
    location: "New York, NY",
    type: "Full-Time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris nec justo malesuada ultricies. Duis dignissim, mauris eu tincidunt vulputate, felis neque bibendum lectus, vel faucibus nisi velit sed enim.",
    applicationLink: "https://example.com/apply",
  };

  return (
    <div>
      <HelmetComp
        title={`${job.title} - EduConnect Job Board`}
        description={`Apply for ${job.title} at ${job.company} in ${job.location}.`}
      />

      <h1>{job.title}</h1>
      <h2>
        {job.company} - {job.location}
      </h2>
      <p>{job.type}</p>
      <p>{job.description}</p>
      <a href={job.applicationLink} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
};

export default JobDetails;
