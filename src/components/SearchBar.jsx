import { FormInput } from "./forms";

export const SearchBar = () => (
    <div className="flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="flex-1 relative">
        <FormInput 
          type="text"
          placeholder="Search Your Live Project"
          className="w-full pl-10 pr-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex-1 relative">
        <FormInput
          type="text"
          placeholder="Search for your location..."
          className="w-full pl-10 pr-4 py-2 border rounded-md"
        />
      </div>
    </div>
  );