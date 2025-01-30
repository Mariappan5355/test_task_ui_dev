import { Share2 } from "lucide-react";

export const RecentProjectCard = ({ data }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="relative">
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4">
        <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
          <Share2 size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="font-medium text-lg mb-2">{data.title}</h3>
      <div className="text-sm text-gray-600 mb-4">
        <p className="mb-1">{data.location}</p>
        <p className="mb-1">Skill: {data.skill}</p>
        <p>{data.status}</p>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="flex -space-x-3">
          <img 
            src={data.likes.avatar} 
            alt={data.likes.count} 
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img 
            src={data.likes.avatar} 
            alt={data.likes.count} 
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img 
            src={data.likes.avatar} 
            alt={data.likes.count} 
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
        <span className="ml-4 text-sm text-gray-600">{data.likes.count}</span>
      </div>
      
      <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md transition-colors">
        View Project
      </button>
    </div>
  </div>
);