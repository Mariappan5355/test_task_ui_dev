export const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-sm border mb-4">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="w-2/3 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <div className="text-sm text-gray-500 mt-1">
                {project.category} | {project.subcategory}
              </div>
            </div>
            <div className="text-right">
              <div className="inline-block bg-yellow-100 px-2 py-1 rounded text-sm">
                Interns: {project.interns}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Posted {project.postedDate}
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <div>Project ID: {project.id}</div>
              <div>Location: {project.location}</div>
              <div>Duration: {project.duration}</div>
            </div>
            <div>
              <div>Price: {project.price}</div>
              <div>Expiry Date: {project.expiryDate}</div>
            </div>
          </div>
  
          <div className="mt-4">
            <h3 className="font-semibold">Description</h3>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          </div>
  
          <div className="grid grid-cols-3 gap-4 mt-6">
            <button className="w-full px-6 py-2 bg-[#003F6B] text-white rounded text-sm font-medium">View</button>
            <button className="w-full px-6 py-2 bg-[#003F6B] text-white rounded text-sm font-medium">Send a Proposal</button>
            <button className="w-full px-6 py-2 bg-[#003F6B] text-white rounded text-sm font-medium">Apply Internship</button>
          </div>
        </div>
      </div>
    </div>
  );