import { Filter, Search } from "lucide-react";

export const SearchBarWithSort = () => (
  <div className="w-100 flex justify-between left-0 mt-4 mb-8">
    <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="w-fit min-w-[700px] pl-4 pr-10 py-2 border rounded-md"
    />
    <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
    </div>
    <div className="flex items-center space-x-4">
      <button className="flex items-center text-gray-600">
        <Filter className="h-5 w-5 mr-2" />
        Sort by
      </button>
    </div>
  </div>
);
