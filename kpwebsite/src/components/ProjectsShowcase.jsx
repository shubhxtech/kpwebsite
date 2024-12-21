import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectShowcase = () => {
  const [projects, setprojectsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/projectsData.json');
      const data = await response.json();
      setprojectsData(data);
      const uniqueCategories = ['All', ...new Set(data.map(project => project.category))];
      setCategories(uniqueCategories);
    };
    fetchData();
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  };

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-5xl pt-8 font-bold mb-4 text-white">Our Projects</h1>
        <p className="text-gray-400 text-xl mb-8">Showcasing innovation and creativity through technology</p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${selectedCategory === category
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/30 hover:border-white'
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
          <Link key={index} to={`/projects/${generateSlug(project.title)}`}>
            <div
              key={project.title}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <span className="inline-block px-3 py-1 bg-white text-black text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-gray-400">{project.year}</span>
                  </div>

                  <p className={`text-gray-300 mb-4 transition-all duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {project.description}
                  </p>

                  <div className={`transition-all duration-300 ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.team.map((member, i) => (
                        <span
                          key={member}
                          className="text-sm text-gray-400"
                        >
                          {member}{i < project.team.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;