export const BlogCard = ({ data }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-[#e7ecf2] ">
        <p className="text-sm text-gray-600">{data.title}</p>
      </div>
    </div>
  );