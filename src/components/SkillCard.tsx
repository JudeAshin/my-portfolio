import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  isDarkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-750 shadow-xl'
    : 'bg-white/80 backdrop-blur-sm border-blue-200/50 hover:bg-blue-50/50 shadow-xl shadow-blue-100/50';

  return (
    <div className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cardClasses}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-500 p-2 rounded-xl bg-blue-100/20">
          {icon}
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">{title}</h3>
      </div>
      
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 text-base font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex-shrink-0 shadow-sm" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;