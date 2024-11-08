import React, { useState } from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: "Building the Next Generation of AI Systems",
      category: "Artificial Intelligence",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "8 min read",
      excerpt: "Exploring the latest advancements in artificial intelligence and how they're shaping the future of technology.",
      image: "https://s3-alpha.figma.com/hub/file/5400354372/19903ceb-4641-4892-9242-4e6e3094e446-cover.png",
      tags: ["AI", "Machine Learning", "Technology"],
      featured: true,
    },
    {
      title: "The Evolution of Web Development",
      category: "Web Development",
      author: "James Wilson",
      date: "March 12, 2024",
      readTime: "6 min read",
      excerpt: "A deep dive into modern web development practices and the technologies driving innovation.",
      image: "/api/placeholder/800/400",
      tags: ["Web Dev", "JavaScript", "React"],
      featured: false,
    },
    {
      title: "Cybersecurity in the Digital Age",
      category: "Security",
      author: "Alex Thompson",
      date: "March 10, 2024",
      readTime: "5 min read",
      excerpt: "Understanding the importance of cybersecurity and how to protect digital assets in today's connected world.",
      image: "/api/placeholder/800/400",
      tags: ["Security", "Cyber", "Technology"],
      featured: false,
    },
    {
      title: "The Future of Cloud Computing",
      category: "Cloud",
      author: "Lisa Chen",
      date: "March 8, 2024",
      readTime: "7 min read",
      excerpt: "Examining the latest trends in cloud computing and their impact on modern software architecture.",
      image: "/api/placeholder/800/400",
      tags: ["Cloud", "AWS", "DevOps"],
      featured: false,
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs
    .filter(blog => selectedCategory === 'All' || blog.category === selectedCategory)
    .filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 pt-24">
        <h1 className="text-5xl font-bold mb-4 text-center">Club Blog</h1>
        <p className="text-gray-400 text-center mb-8">Insights, Updates, and Tech Discoveries</p>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white/50 outline-none transition-all duration-300"
            />
            <svg 
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blog */}
        {filteredBlogs.find(blog => blog.featured) && (
          <div className="mb-12">
            <div 
              className="relative group rounded-xl overflow-hidden"
              onMouseEnter={() => setHoveredBlog('featured')}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <img
                src={filteredBlogs.find(blog => blog.featured).image}
                alt="Featured blog"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="absolute bottom-0 p-8 w-full">
                  <span className="inline-block px-4 py-1 bg-white text-black text-sm font-semibold rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold mb-4">
                    {filteredBlogs.find(blog => blog.featured).title}
                  </h2>
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    {filteredBlogs.find(blog => blog.featured).excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{filteredBlogs.find(blog => blog.featured).author}</span>
                    <span>•</span>
                    <span>{filteredBlogs.find(blog => blog.featured).date}</span>
                    <span>•</span>
                    <span>{filteredBlogs.find(blog => blog.featured).readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.filter(blog => !blog.featured).map((blog, index) => (
            <div
              key={blog.title}
              className="group bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredBlog(index)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-gray-800 text-sm rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-400 text-sm">{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;