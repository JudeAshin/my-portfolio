import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  isDarkMode: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  isDarkMode, 
  liveUrl, 
  githubUrl 
}) => {
  const cardClasses = isDarkMode
    ? 'bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-750 shadow-xl'
    : 'bg-white/80 backdrop-blur-sm border-blue-200/50 hover:bg-blue-50/50 shadow-xl shadow-blue-100/50';

  return (
    <div className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cardClasses}`}>
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">{title}</h3>
        <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          {description}
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                isDarkMode 
                  ? 'bg-slate-700 text-slate-200 border border-slate-600' 
                  : 'bg-blue-100 text-blue-800 border border-blue-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 border-2 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isDarkMode
                ? 'border-slate-600 text-slate-300 hover:bg-slate-700'
                : 'border-blue-300 text-blue-700 hover:bg-blue-100'
            }`}
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {!liveUrl && !githubUrl && (
          <div className={`px-6 py-3 text-sm font-bold rounded-xl ${
            isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
          }`}>
            Enterprise Project
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;