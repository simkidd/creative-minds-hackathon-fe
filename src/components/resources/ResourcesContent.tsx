import ResourceCard from "./ResourceCard";

const ResourcesContent = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4">
          <ResourceCard />
        </div>
      </div>
    </section>
  );
};

export default ResourcesContent;
