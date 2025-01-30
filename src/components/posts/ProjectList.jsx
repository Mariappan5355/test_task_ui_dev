import { Filter } from "lucide-react";
import { ProjectCard } from "../ProjectCard";
import Kitchen from "../../assets/Kitchen.png";
import { SearchBarWithSort } from "../posts/SearchBarWithSort";

export const ProjectList = () => {
    const projects = [
      {
        id: 'MAIID123',
        title: 'Kitchen Worktop',
        category: 'Kitchen',
        image : Kitchen,
        subcategory: 'Splashback',
        interns: 0,
        postedDate: '07/08/24',
        location: 'Bristol - England',
        duration: 'completed',
        price: 'Fixed',
        expiryDate: 'Marble',
        description: 'Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible...',
        status: 'Active',
        lastUpdate: '2024-08-12',
        proposals: 23
      },
      {
        id: 'MAIID123',
        title: 'Kitchen Worktop',
        category: 'Kitchen',
        image : Kitchen,
        subcategory: 'Splashback',
        interns: 0,
        postedDate: '07/08/24',
        location: 'Bristol - England',
        duration: 'completed',
        price: 'Fixed',
        expiryDate: 'Marble',
        description: 'Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible...',
        status: 'Active',
        lastUpdate: '2024-08-12',
        proposals: 23
      },
      {
        id: 'MAIID123',
        title: 'Kitchen Worktop',
        category: 'Kitchen',
        image : Kitchen,
        subcategory: 'Splashback',
        interns: 0,
        postedDate: '07/08/24',
        location: 'Bristol - England',
        duration: 'completed',
        price: 'Fixed',
        expiryDate: 'Marble',
        description: 'Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible...',
        status: 'Active',
        lastUpdate: '2024-08-12',
        proposals: 23
      },
      {
        id: 'MAIID123',
        title: 'Kitchen Worktop',
        category: 'Kitchen',
        image : Kitchen,
        subcategory: 'Splashback',
        interns: 0,
        postedDate: '07/08/24',
        location: 'Bristol - England',
        duration: 'completed',
        price: 'Fixed',
        expiryDate: 'Marble',
        description: 'Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible...',
        status: 'Active',
        lastUpdate: '2024-08-12',
        proposals: 23
      },

    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex-col flex justify-between items-center mb-6">
          <div className="flex items-start space-x-4 w-100 ">
          <h2 className="text-xl font-semibold">Project List</h2>
          </div>
          <SearchBarWithSort />
          
        </div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-4 py-2 bg-[#003F6B] text-white rounded">1</button>
          <button className="px-4 py-2 text-gray-600">2</button>
        </div>
      </div>
    );
  };
  