import { Button } from "../ui/button";

const ResourceCard = () => {
  return (
    <div className="px-5 py-3.5">
      <div className="aspect-square">
        <img src="" alt="" />
      </div>
      <h3 className="text-sm font-medium leading-5 text-gray-900">
        Resource Title
      </h3>

      <div>
        <p>Subject: Mathematics</p>
        <p>Language: English</p>
        <p>Grade Lvl: JSS 2</p>
        <p>Format: PDF</p>
      </div>

      <div>
        <Button variant={"outline"}>view</Button>
      </div>
    </div>
  );
};

export default ResourceCard;
