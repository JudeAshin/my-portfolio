import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  isDarkMode: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  technologies,
  isDarkMode
}) => {
  const cardClasses = isDarkMode
    ? 'bg-slate-900/80 backdrop-blur-sm border-slate-700/50 shadow-2xl'
    : 'bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-2xl shadow-blue-100/50';

  return (
    <div className={`p-10 rounded-3xl border-2 ${cardClasses}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">{title}</h3>
          <h4 className="text-2xl font-bold mb-2 text-purple-500">{company}</h4>
        </div>
        <div className="flex flex-col gap-2 md:text-right">
          <div className="flex items-center gap-2 md:justify-end">
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {period}
            </span>
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {location}
            </span>
          </div>
        </div>
      </div>
      
      <p className={`text-lg leading-relaxed mb-8 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        {description}
      </p>
      
      <div>
        <h5 className="text-base font-bold mb-4 text-blue-500 uppercase tracking-wide">
          Technologies Used
        </h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                isDarkMode 
                  ? 'bg-slate-800 text-slate-200 border border-slate-600' 
                  : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;