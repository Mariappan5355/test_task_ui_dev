export const ProfileCard = ({ data }) => (
  <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
    {/* Top Section with Navy Background */}
    <div className="bg-blue-900 h-24 relative">
      {/* Circular Profile Container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-12">
        <div className="w-24 h-24 rounded-full bg-white p-1">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    
    {/* Content Section */}
    <div className="pt-16 pb-6 px-6">
      <div className="space-y-2">
        <div className="flex items-center text-lg">
          <span className="text-blue-900">Name :</span>
          <span className="ml-2 text-blue-900 font-medium">{data.name}</span>
        </div>
        <div className="flex items-center text-lg">
          <span className="text-blue-900">Role :</span>
          <span className="ml-2 text-blue-900 font-medium">{data.role}</span>
        </div>
      </div>
      
      {/* View Profile Button */}
      <button className="w-full mt-6 bg-blue-900 text-white text-xl font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">
        View Profile
      </button>
    </div>
  </div>
);

