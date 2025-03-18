import HelmetComp from "@/components/shared/HelmetComp";

interface CourseData {
  id: string;
  title: string;
  description: string;
  keywords?: string;
}

const CourseDetail = () => {
  const course: CourseData = {
    id: "1",
    title: "React Fundamentals",
    description:
      "Learn the basics of React, including components, props, state, and hooks. Build interactive web applications with React.",
    keywords: "react, javascript, components, props, state, hooks",
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HelmetComp
        title={`${course.title}`}
        description={course.description}
        keywords={course.keywords}
      />

      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
