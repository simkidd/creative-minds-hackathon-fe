import { SearchNormal1 } from "iconsax-react";

const SearchInput = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-wrap items-stretch w-full max-w-xl mx-auto group">
        <input
          type="text"
          placeholder="Search book name, subject, workbook..."
          className="pr-10 w-[1%] grow shrink border rounded-md  borber-[#eee] text-sm leading-[1.5] text-[#212529]  transition-[bordercolor_0.15s_ease-in-out]  focus:outline-0 focus:border-primary py-3 px-4"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 ">
          <div className="flex items-center rounded-sm text-[#212529] px-0 py-[0.375rem] ">
            <SearchNormal1 className="text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
