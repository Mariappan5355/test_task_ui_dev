import { MapPin } from "lucide-react";

export const LiveProjectCard = ({ data }) => (
  <div className="relative group rounded-lg overflow-hidden">
    <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
    <div className="absolute top-4 left-4 flex items-center bg-white rounded px-2 py-1">
      <MapPin size={14} className="text-blue-600 mr-1" />
      <span className="text-sm">{data.location}</span>
    </div>
    <div className="p-3 bg-white">
       <p className="mb-1 text-xs text-blue-600 text-right">{data.status}</p> 
      <h3 className="font-medium">{data.title}</h3>
    </div>
  </div>
);