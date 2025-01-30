import React from 'react';

export const ProjectListCard = ({ data }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="relative">
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-40 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 pl-3 p-1 bg-black opacity-[.67]  from-black/50 to-transparent">
        <h3 className="text-white font-medium">{data.title}</h3>
      </div>
    </div>
    
    <div className="p-3 bg-[#e7ecf2]">
      <p className="text-xs text-gray-600 rounded p-2 bg-[#eeffff] ">
        Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget....
      </p>
      
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-gray-600">Budget : </span>
          <span>£100</span>
        </div>
        <button className="bg-blue-900 text-white text-sm px-4 py-1 rounded">
          View
        </button>
      </div>
    </div>
  </div>
);

export default ProjectListCard;