import React, { useState, useEffect } from "react";

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projectsData.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative group text-white p-8 z-3">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-5xl pt-8 font-bold mb-4 text-white">Our Projects</h1>
        <p className="text-gray-400 text-xl mb-8">
          Showcasing innovation and creativity through technology
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black border border-white/30 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>

            {/* GitHub Button (Always at Bottom) */}
            {project.Link && (
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center px-4 py-2 bg-white text-black font-semibold rounded-lg border border-white transition-all duration-300 hover:bg-gray-300"
              >
                {project.buttonText || "View on GitHub"}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
