import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    tags: ['React', 'Firebase', 'Tailwind'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ExternalLink className="w-5 h-5" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}