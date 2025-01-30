import { HeroSection } from "../components/posts/HeroSection";
import { ProjectList } from "../components/posts/ProjectList";
import { Footer } from "../layout/Footer";

export const PostPage = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <ProjectList />
        <Footer />
      </div>
    );
  };
  
  export default PostPage;