import React, { useState } from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI Voice Assistant",
      category: "Artificial Intelligence",
      description: "A smart voice assistant powered by machine learning that can understand and respond to natural language commands.",
      tech: ["Python", "TensorFlow", "NLP", "Speech Recognition"],
      year: "2024",
      team: ["John Doe", "Jane Smith"],
      image: "https://cdn.dribbble.com/userupload/8536182/file/original-8c24e383d9d9818a7a6e97d468655381.jpg?resize=400x0"
    },
    {
      title: "Smart Campus App",
      category: "Mobile Development",
      description: "A comprehensive mobile application that helps students navigate campus life with features like attendance tracking and mess menu.",
      tech: ["React Native", "Firebase", "Node.js"],
      year: "2023",
      team: ["Alice Johnson", "Bob Wilson"],
      image: "https://cdn.dribbble.com/userupload/8536182/file/original-8c24e383d9d9818a7a6e97d468655381.jpg?resize=400x0"
    },
    {
      title: "Automated Attendance System",
      category: "Computer Vision",
      description: "Face recognition-based attendance system that automatically marks attendance using security camera feeds.",
      tech: ["OpenCV", "Python", "Deep Learning"],
      year: "2023",
      team: ["Charlie Brown", "Diana Prince"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Campus Radio",
      category: "Web Development",
      description: "Online radio station platform for campus announcements and student-run shows.",
      tech: ["React", "WebRTC", "AWS"],
      year: "2024",
      team: ["Eve Anderson", "Frank Miller"],
      image: "/api/placeholder/600/400"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-5xl pt-8 font-bold mb-4">Our Projects</h1>
        <p className="text-gray-400 text-xl mb-8">Showcasing innovation and creativity through technology</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/50 text-black hover:bg-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="group relative bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-white/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-white text-black text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-black">{project.year}</span>
                </div>
                
                <p className={`text-black mb-4 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  {project.description}
                </p>
                
                <div className={`transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.team.map((member, i) => (
                      <span
                        key={member}
                        className="text-sm text-black"
                      >
                        {member}{i < project.team.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;