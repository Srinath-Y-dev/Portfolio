import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Code, Terminal, Palette, Trophy } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, level: 95 },
  { name: 'Java', icon: Code, level: 85 },
  { name: 'C++', icon: Code, level: 80 },
  { name: 'JavaScript', icon: Code, level: 88 },
  { name: 'Django', icon: Terminal, level: 82 },
  { name: 'HTML5', icon: Palette, level: 95 },
  { name: 'CSS3', icon: Palette, level: 90 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-32 px-6 relative bg-obsidian-light" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl gold-shimmer mb-4">
            Skills Vault
          </h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        {/* LeetCode Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card gold-border-gradient gold-glow p-6 mb-12 max-w-md mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Trophy className="w-8 h-8 text-gold" />
            <span className="font-display text-2xl text-gold">Featured Achievement</span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <AnimatedCounter 
              value={430} 
              suffix="+" 
              className="font-display text-5xl text-gold gold-shimmer font-bold"
            />
          </div>
          <p className="text-muted-foreground mt-2">LeetCode Problems Solved</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="glass-card gold-border-gradient p-6 text-center gold-glow-hover group"
            >
              <skill.icon className="w-10 h-10 text-gold/70 group-hover:text-gold mx-auto mb-4 transition-colors" />
              <h3 className="font-display text-lg text-gold mb-2">{skill.name}</h3>
              
              {/* Skill bar */}
              <div className="w-full h-1 bg-obsidian rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
