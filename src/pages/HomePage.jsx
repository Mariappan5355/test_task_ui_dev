import { BlogCard } from "../components/BlogCard";
import { EnquiryForm } from "../components/EnquiryForm";
import { HeroSection } from "../components/HeroSection";
import { LiveProjectCard } from "../components/LiveProjectCard";
import { ProfileCard } from "../components/ProfileCard";
import { ProjectListCard } from "../components/ProjectListCard";
import { RecentProjectCard } from "../components/RecentProjectCard";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../layout/Footer";
import Interior from "../assets/Interior.png";
import Stone from "../assets/Stone.png";
import Electricals from "../assets/Electricals.png";
import Gardening from "../assets/Gardening.png";
import GardeningSet from "../assets/Gardening Set.png";
import Bedroom from "../assets/Bedroom.png";
import Author from "../assets/Author.png";
import Intern1 from "../assets/Intern1.png";
import Intern2 from "../assets/Intern2.png";
import Intern3 from "../assets/Intern3.png";
import Intern4 from "../assets/Intern4.png";
import Intern5 from "../assets/Intern5.png";
import Home from "../assets/Home.png";
import Home2 from "../assets/Home2.png";
import Living from "../assets/Living.png";
import Living2 from "../assets/Living2.png";
import Blog from "../assets/Blog.png";
import Enquiry from "../assets/Enquiry.png";

const HomePage = () => {
    const liveProjectsData = [
      {
        id: 1,
        title: "Interior Works",
        image:Interior,
        status: 'Progress',
        location: "England",
        category: "Interior"
      },
      {
        id: 2,
        title: "Stone Fixing",
        image: Stone,
        status: 'Progress',
        location: "England",
        category: "Construction"
      },
      {
        id: 3,
        title: "Electricals works",
        image: Electricals,
        status: 'Progress',
        location: "England",
        category: "Electrical"
      },
      {
        id: 4,
        title: "Gardening setup",
        status: 'Progress',
        image: Gardening,
        location: "England",
        category: "Gardening"
      },
      {
        id: 5,
        title: "Gardening set",
        image: GardeningSet,
        status: 'Progress',
        location: "England",
        category: "Gardening"
      }
    ];
  
    const recentProjectsData = [
      {
        id: 1,
        title: "Kitchen Worktop",
        location: "Bristol, England",
        image: Bedroom,
        status: "Duration: completed",
        skill: "Marble",
        likes: {
          count: '9+',
          avatar: Author
        }
      },
      {
        id: 2,
        title: "Kitchen Worktop",
        location: "Bristol, England",
        image: Bedroom,
        status: "Duration: completed",
        skill: "Marble",
        likes: {
            count: '9+',
            avatar: Author
          }
      },
      {
        id: 3,
        title: "Kitchen Worktop",
        location: "Bristol, England",
        image: Bedroom,
        status: "Duration: completed",
        skill: "Marble",
        likes: {
            count: '9+',
            avatar: Author
          }
      },
      {
        id: 4,
        title: "Kitchen Worktop",
        location: "Bristol, England",
        image:Bedroom,
        status: "Duration: completed",
        skill: "Marble",
        likes: {
            count: '9+',
            avatar: Author
          }
      }
    ];
  
    const internsData = [
      {
        id: 1,
        name: "Jery Macson",
        role: "Intern",
        image: Intern1
      },
      {
        id: 2,
        name: "Jery Macson",
        role: "Intern",
        image: Intern2
      },
      {
        id: 3,
        name: "Jery Macson",
        role: "Intern",
        image: Intern3
      },
      {
        id: 4,
        name: "Jery Macson",
        role: "Intern",
        image: Intern4
      },
      {
        id: 5,
        name: "Jery Macson",
        role: "Intern",
        image: Intern5
      }
    ];
  
    const projectsData = [
      {
        id: 1,
        title: "Home Renovation",
        image: Home,
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, planning the project path and creating a budget...",
        budget: "£100"
      },
      {
        id: 2,
        title: "Living room",
        image: Living,
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, planning the project path and creating a budget...",
        budget: "£100"
      },
      {
        id: 3,
        title: "Living Room Gardening",
        image: Living2,
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, planning the project path and creating a budget...",
        budget: "£100"
      },
      {
        id: 4,
        title: "Home Exterior",
        image: Home2,
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, planning the project path and creating a budget...",
        budget: "£100"
      }
    ];
  
    const blogData = [
      {
        id: 1,
        title: "Safe measures can refer to a wide range of precautions",
        image: Blog
      },
      {
        id: 2,
        title: "Safe measures can refer to a wide range of precautions",
        image: Blog
      },
      {
        id: 3,
        title: "Safe measures can refer to a wide range of precautions", 
        image: Blog
      },
      {
        id: 4,
        title: "Safe measures can refer to a wide range of precautions",
        image: Blog
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        
        <section >

        <HeroSection/>
        </section>
        <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8">

        <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">LIVE PROJECT</h2>
            <SearchBar /> 
            <button className="text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {liveProjectsData.map(project => (
            <LiveProjectCard key={project.id} data={project} />
            ))}
        </div>
        </section>

  
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Project Post</h2>
              <button className="text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {recentProjectsData.map(project => (
                <RecentProjectCard key={project.id} data={project} />
              ))}
            </div>
          </section>
  
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6">AVAILABLE INTERN</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {internsData.map(intern => (
                <ProfileCard key={intern.id} data={intern} />
              ))}
            </div>
          </section>
  
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {projectsData.map(project => (
                <ProjectListCard key={project.id} data={project} />
              ))}
            </div>
          </section>
  
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Blog</h2>
              <button className="text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {blogData.map(post => (
                <BlogCard key={post.id} data={post} />
              ))}
            </div>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={Enquiry}
              alt="Workers with clipboard"
              className="rounded-lg object-cover h-full"
            />
            <EnquiryForm />
          </section>
        </main>
        
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  