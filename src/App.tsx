import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Code, Database, Server, Globe } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import FloatingElements from './components/FloatingElements';
import BinaryRain from './components/BinaryRain';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Open resume in new tab
    window.open('/Jude Ashin Resume.pdf', '_blank');
  };

  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white code-pattern-dark' 
    : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 code-pattern';

  const cardClasses = isDarkMode
    ? 'bg-slate-800/80 backdrop-blur-sm border-slate-700/50 shadow-xl'
    : 'bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-xl shadow-blue-100/50';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <FloatingElements isDarkMode={isDarkMode} />
      <BinaryRain isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/90 border-slate-700/50' : 'bg-white/90 border-blue-200/50 shadow-lg shadow-blue-100/20'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Jude Ashin
          </h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 hover:text-blue-500 ${
                  activeSection === section ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-blue-100'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-6 relative overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'circuit-pattern-dark' : 'circuit-pattern'}`}></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center py-20 relative z-10">
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto mb-6">
                {!imageError ? (
                  <img
                    src="/Jude.jpg"
                    alt="Jude Ashin - Senior Backend Developer"
                    className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-emerald-500 shadow-2xl"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className={`w-full h-full rounded-full border-4 border-blue-500 flex items-center justify-center text-4xl font-bold ${cardClasses}`}>
                    JA
                  </div>
                )}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Jude Ashin
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Senior Backend Developer
            </h2>
            <p className={`text-xl md:text-2xl mb-8 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Specialized in Node.js, NestJS, Express, Angular & Database Architecture
            </p>
            <p className={`text-lg mb-8 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Passionate backend architect with 2+ years of experience building scalable, high-performance applications. 
              Expert in modern JavaScript frameworks, database optimization, and cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">3 Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-800/30' : 'bg-gradient-to-r from-blue-50/50 to-indigo-100/50'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'grid-pattern-dark' : 'grid-pattern'}`}></div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">About Jude</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I'm <strong className="text-blue-500">Jude Ashin</strong>, a dedicated Senior Backend Developer with 3 years of focused experience building scalable, 
                high-performance applications. My expertise lies in architecting robust backend systems 
                using Node.js, NestJS, and Express.js, coupled with comprehensive database management 
                across MySQL, SQL, and MongoDB.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Currently working in Dubai since February 2025, I bring valuable experience from my intensive 1.6-year journey in Chennai's dynamic tech ecosystem. This international experience has given me a global perspective on software development, exposing me to diverse business requirements and technical challenges. I'm passionate about writing efficient, maintainable code and staying current with the latest backend technologies and industry best practices.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                My journey includes an enriching experience in Chennai from <strong className="text-purple-500">July 2023 to December 2024</strong>, 
                followed by my current role in Dubai since <strong className="text-emerald-500">February 2025</strong>. 
                This diverse exposure has shaped my approach to building enterprise-grade solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>judeashin@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+971-50-639-2162</span>
                </div>
              </div>
            </div>
            <div className={`p-8 rounded-3xl border-2 ${cardClasses}`}>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Career Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Years of Experience</span>
                  <span className="font-bold text-2xl text-blue-500">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Projects Completed</span>
                  <span className="font-bold text-2xl text-emerald-500">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Technologies Mastered</span>
                  <span className="font-bold text-2xl text-purple-500">12+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Countries Worked</span>
                  <span className="font-bold text-2xl text-orange-500">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Team Leadership</span>
                  <span className="font-bold text-2xl text-pink-500">Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-800/50' : 'bg-gradient-to-br from-indigo-50 to-blue-100'}`}>
        <div className="absolute inset-0">
          <div className={`w-full h-full ${isDarkMode ? 'circuit-pattern-dark' : 'circuit-pattern'}`}></div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">Professional Journey</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Senior Backend Developer"
              company="Inox Arabia Technical Service LLC Dubai"
              period="February 2025 - October 2025"
              location="Dubai, UAE"
              description="Currently leading backend development initiatives for enterprise-scale applications. Architecting robust microservices using Node.js and ExpressJS, optimizing database performance across MongoDB and MySQL systems. Working on scalable cloud infrastructure and implementing best practices for code quality and deployment processes. Focusing on building high-performance APIs and database optimization."
              technologies={['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Docker', 'AWS (EC2, S3, RDS, Lambda, CloudWatch, CloudFormation)']}
              isDarkMode={isDarkMode}
            />
            <ExperienceCard
              title="Full Stack Developer"
              company="Ardens Business Solutions Chennai"
              period="July 2023 - December 2024"
              location="Chennai, Tamil Nadu, India"
              description="Started my career journey as a full-stack developer, initially focusing on Angular frontend development before transitioning to backend specialization with NestJS and Express.js. Built responsive, dynamic user interfaces and evolved into architecting scalable, secure API systems. Worked on various business applications, implemented JWT-based authentication systems, optimized SQL queries, and integrated real-time notification systems. Gained extensive experience in both frontend and backend development."
              technologies={['Angular', 'Node.js', 'NestJS', 'MySQL', 'MongoDB', 'TypeScript', 'Docker', 'Postman', 'Linux', 'Git', 'AWS(S3, EC2, RDS)']}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-900/50' : 'bg-gradient-to-r from-blue-50 to-indigo-100'}`}>
        <div className="absolute inset-0">
          <div className={`w-full h-full ${isDarkMode ? 'grid-pattern-dark' : 'grid-pattern'}`}></div>
          {/* Decorative code symbols */}
          <div className="absolute top-20 left-10 text-6xl font-mono opacity-5 text-blue-500 transform rotate-12">{'{ }'}</div>
          <div className="absolute top-40 right-20 text-8xl font-mono opacity-5 text-emerald-500 transform -rotate-12">{'< />'}</div>
          <div className="absolute bottom-20 left-20 text-7xl font-mono opacity-5 text-purple-500 transform rotate-45">{'[ ]'}</div>
          <div className="absolute bottom-40 right-10 text-6xl font-mono opacity-5 text-orange-500 transform -rotate-45">{'( )'}</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Server className="w-8 h-8" />}
              title="Backend Development"
              skills={['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'WebSocket', 'Microservices']}
              isDarkMode={isDarkMode}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Database Management"
              skills={['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'TypeORM', 'Sequelize', 'Mongoose']}
              isDarkMode={isDarkMode}
            />
            <SkillCard
              icon={<Globe className="w-8 h-8" />}
              title="Frontend Development"
              skills={['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']}
              isDarkMode={isDarkMode}
            />
            <SkillCard
              icon={<Code className="w-8 h-8" />}
              title="Programming Languages"
              skills={['JavaScript', 'TypeScript', 'Python', 'SQL', 'NoSQL']}
              isDarkMode={isDarkMode}
            />
            <SkillCard
              icon={<Server className="w-8 h-8" />}
              title="DevOps & Tools"
              skills={['Git', 'Docker', 'AWS', 'Linux', 'CI/CD','Redis', 'ElasticSearch']}
              isDarkMode={isDarkMode}
            />
            <SkillCard
              icon={<Globe className="w-8 h-8" />}
              title="Soft Skills"
              skills={['Team Leadership', 'Problem Solving', 'Code Review', 'Mentoring', 'Communication']}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-800/30' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
        <div className="absolute inset-0">
          <div className={`w-full h-full ${isDarkMode ? 'code-pattern-dark' : 'code-pattern'}`}></div>
          {/* Floating tech icons */}
          <div className="absolute top-10 left-1/4 text-4xl opacity-10 text-blue-500 animate-pulse">⚛️</div>
          <div className="absolute top-32 right-1/4 text-5xl opacity-10 text-emerald-500 animate-bounce">🚀</div>
          <div className="absolute bottom-20 left-1/3 text-4xl opacity-10 text-purple-500 animate-pulse">💻</div>
          <div className="absolute bottom-40 right-1/3 text-5xl opacity-10 text-orange-500 animate-bounce">⚡</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
           <ProjectCard
  title="Lead Management System"
  description="Campaign-based lead capture system built with NestJS and Angular. Automates lead intake from campaigns, stores data in MySQL, and provides tools for staff to manage follow-ups, notes, reminders, and more."
  technologies={['NestJS', 'MySQL', 'Angular', 'Docker']}
  isDarkMode={isDarkMode}
/>
<ProjectCard
  title="Roles & Permission Management"
  description="Centralized access control system allowing admins to create custom roles and assign granular permissions to users. Integrated with existing platforms to enforce permission-based feature access dynamically. Built with NestJS and Angular for scalable and secure role-based workflows."
  technologies={['NestJS', 'MySQL', 'Angular', 'Docker']}
  isDarkMode={isDarkMode}
/>
<ProjectCard
  title="Attendance Management System"
  description="Integrated with biometric attendance machines to sync real-time data into an external database. Handles shift-wise attendance tracking, including MIP/MOP, late comings (LC), early exits, leaves, and holidays. Fully configurable and operates seamlessly within the same platform using role-based access."
  technologies={['NestJS', 'MySQL', 'Angular', 'Docker']}
  isDarkMode={isDarkMode}
/>
<ProjectCard
  title="Quality Inspection & BOM Tracking"
  description="Quality check system integrated with sales, service, and disposal workflows. Automatically triggers inspections based on inward/outward records. Each check references a predefined Bill of Materials (BOM), ensuring the right tools and procedures are followed per machine. Streamlines inspection processes within the same unified platform."
  technologies={['NestJS', 'MySQL', 'Angular', 'Docker']}
  isDarkMode={isDarkMode}
/>
<ProjectCard
  title="Social Media & Content Sharing Platform"
  description="A feature-rich social networking site enabling users to watch videos, make voice/video calls, write blogs, manage friend lists, and connect with others across the country. Includes a dynamic user panel and real-time communication tools. Built using Unity Web, Express.js, and AWS services for scalable performance and seamless user experience."
  technologies={['Unity Web', 'Express.js', 'Node.js', 'MongoDB', 'AWS', 'CloudFront']}
  isDarkMode={isDarkMode}
/>
<ProjectCard
  title="Leave Management System"
  description="Enables staff to request leaves with real-time approval or rejection by authorized roles. Automatically adjusts available leave balances upon approval and triggers email notifications at each stage. Fully integrated within the existing platform for seamless HR operations."
  technologies={['NestJS', 'MySQL', 'Angular', 'Docker']}
  isDarkMode={isDarkMode}
/>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-900/50' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
        <div className="absolute inset-0">
          <div className={`w-full h-full ${isDarkMode ? 'circuit-pattern-dark' : 'circuit-pattern'}`}></div>
          {/* Academic symbols */}
          <div className="absolute top-16 left-16 text-6xl opacity-5 text-blue-500 transform rotate-12">🎓</div>
          <div className="absolute top-32 right-16 text-7xl opacity-5 text-emerald-500 transform -rotate-12">📚</div>
          <div className="absolute bottom-16 left-1/4 text-5xl opacity-5 text-purple-500 transform rotate-45">🏆</div>
          <div className="absolute bottom-32 right-1/4 text-6xl opacity-5 text-orange-500 transform -rotate-45">📜</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl border-2 ${cardClasses}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Bachelor of Engineering</h3>
                  <p className="text-lg font-semibold text-emerald-500">Computer Science & Engineering</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>University</span>
                  <span className="font-bold text-blue-500">Anna University</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Year</span>
                  <span className="font-bold text-emerald-500">2019 - 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>CGPA</span>
                  <span className="font-bold text-purple-500">8.2/10</span>
                </div>
                <div className="mt-4">
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Specialized in software engineering, data structures, algorithms, and database management systems.
                  </p>
                                  <div className="mt-4">
                                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
  Completed various academic projects focused on full-stack development and system design. Actively participated in coding contests and tech workshops during the course.
                  </p>
                                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border-2 ${cardClasses}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Professional Certifications</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-blue-50'}`}>
                  <h4 className="font-bold text-blue-500 mb-1">Node.js Certified Developer</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>OpenJS Foundation • 2024</p>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-emerald-50'}`}>
                  <h4 className="font-bold text-emerald-500 mb-1">MongoDB Certified Developer</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>MongoDB University • 2024</p>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-purple-50'}`}>
                  <h4 className="font-bold text-purple-500 mb-1">AWS Cloud Practitioner</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Amazon Web Services • 2023</p>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-orange-50'}`}>
                  <h4 className="font-bold text-orange-500 mb-1">Angular Certified Developer</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Google Developers • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 relative ${isDarkMode ? 'bg-slate-800/50' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`w-full h-full ${isDarkMode ? 'grid-pattern-dark' : 'grid-pattern'}`}></div>
          {/* Communication symbols */}
          <div className="absolute top-20 left-20 text-6xl opacity-5 text-blue-500 transform rotate-12">📧</div>
          <div className="absolute top-40 right-20 text-7xl opacity-5 text-emerald-500 transform -rotate-12">📱</div>
          <div className="absolute bottom-20 left-1/3 text-5xl opacity-5 text-purple-500 transform rotate-45">🌐</div>
          <div className="absolute bottom-40 right-1/3 text-6xl opacity-5 text-orange-500 transform -rotate-45">💬</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent relative z-10">Let's Connect</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Get In Touch</h3>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. 
                Whether you're looking for a senior backend developer or want to discuss technology solutions, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-500">Email</p>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>judeashin@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-500">Phone</p>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>+971-50-639-2162</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-500">Location</p>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Dubai, UAE</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jude-ashin-1b9603253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://github.com/JudeAshin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t relative ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'code-pattern-dark' : 'code-pattern'}`}></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Jude Ashin
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Senior Backend Developer • Node.js • NestJS • Database Architecture
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              © 2025 Jude Ashin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
