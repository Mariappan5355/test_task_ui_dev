// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPostPage from './pages/ProjectPostPage';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostsPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostPage/> } />
          <Route path="/post-project" element={<ProjectPostPage />} />
          <Route path="/how-it-works" element={<div>How it Works Page</div>} />
          <Route path="/project" element={<div>Projects Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
          <Route path="/diy-worktops" element={<div>DIY Worktops Page</div>} />
          {/* <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/signup" element={<div>Sign Up Page</div>} /> */}

          <Route path="*" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;