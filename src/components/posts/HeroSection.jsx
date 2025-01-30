import Hero2 from '../../assets/Hero2.jpg';

export const HeroSection = () => (
  <div className="max-h-[308px] relative h-96 bg-gray-800 text-white py-16 flex items-center justify-center">
    <div className="absolute inset-0">
      <img 
        src={Hero2}
        alt="Construction" 
        className="w-full h-full object-cover opacity-50 transition-opacity duration-500 ease-in-out"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 text-center px-10 py-8 bg-black opacity-[.67]  from-black/50 to-transparent">
      <h1 className="text-4xl font-semibold">
        Post your projects with specifications and details explaining the depth of the project, 
        materials needed, time limit to be taken, and budget
      </h1>
    </div>
  </div>
);
