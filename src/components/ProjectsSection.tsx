import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Bot, Gamepad2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Real-Time Internet Monitoring',
    description: 'Network anomaly detection system using Python and Scikit-learn for real-time threat identification and analysis.',
    icon: Network,
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
    featured: true,
  },
  {
    title: 'Zudora',
    description: 'An AI Agent for college recommendations built during a hackathon, leveraging natural language processing for personalized suggestions.',
    icon: Bot,
    tech: ['AI', 'NLP', 'Python'],
    featured: true,
  },
  {
    title: 'Snake Mania',
    description: 'A refined classic snake game built with Python Turtle graphics, featuring smooth animations and modern gameplay mechanics.',
    icon: Gamepad2,
    tech: ['Python', 'Turtle Graphics'],
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background architecture diagram effect */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated connection lines */}
          <motion.circle
            cx="200"
            cy="300"
            r="4"
            fill="currentColor"
            className="text-gold"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="500"
            cy="500"
            r="4"
            fill="currentColor"
            className="text-gold"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="800"
            cy="400"
            r="4"
            fill="currentColor"
            className="text-gold"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="200"
            y1="300"
            x2="500"
            y2="500"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold/30"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2 }}
          />
          <motion.line
            x1="500"
            y1="500"
            x2="800"
            y2="400"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold/30"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl gold-shimmer mb-4">
            Projects Gallery
          </h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group"
            >
              <div className="glass-card gold-border-gradient p-6 h-full relative overflow-hidden gold-glow-hover">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs bg-gold/20 text-gold rounded-full border border-gold/30">
                      Featured
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 glass-card gold-border-gradient rounded-xl flex items-center justify-center mb-4 group-hover:gold-glow transition-shadow">
                    <project.icon className="w-7 h-7 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl text-gold mb-3 group-hover:gold-shimmer transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-obsidian text-gold/70 rounded border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gold/10">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
