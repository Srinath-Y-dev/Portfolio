import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';

const educationData = [
  {
    title: 'BE Computer Science (AIML)',
    institution: 'Chennai Institute of Technology',
    period: '2024 - 2028',
    description: 'Specializing in Artificial Intelligence and Machine Learning with focus on practical applications and system integration.',
    gpa: '8.2/10',
    icon: GraduationCap,
    current: true,
  },
  {
    title: 'Higher Secondary Education',
    institution: 'PSBB Mat. Hr. Sec. School',
    period: '2023 - 2024',
    description: 'Strong foundation in mathematics, physics, and computer science, preparing for advanced engineering studies.',
    icon: School,
    current: false,
  },
  {
    title: 'Full-Stack Bootcamp',
    institution: 'Udemy Certification',
    period: '61.5 Hours Completed',
    description: 'Comprehensive full-stack development training covering modern web technologies, databases, and deployment strategies.',
    icon: Award,
    current: false,
  },
];

const TimelineDot = ({ index, total, scrollProgress }: { index: number, total: number, scrollProgress: MotionValue<number> }) => {
  const targetPoint = index / (total - 1);
  
  // FIXED: Adjusted the first range point so index 0 doesn't glow at scroll position 0.
  // We offset the first dot so it only hits peak glow when the line actually reaches it.
  const startGlow = index === 0 ? 0.05 : targetPoint - 0.1;
  const peakGlow = index === 0 ? 0.12 : targetPoint;
  
  const glow = useTransform(
    scrollProgress,
    [startGlow, peakGlow, targetPoint + 0.1],
    ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 25px rgba(212, 175, 55, 0.8)", "0px 0px 10px rgba(212, 175, 55, 0.3)"]
  );

  const dotColor = useTransform(
    scrollProgress,
    [startGlow, peakGlow],
    ["#1A1A1A", "#D4AF37"]
  );

  return (
    <motion.div
      className="absolute left-8 md:left-1/2 w-6 h-6 -translate-x-1/2 z-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center"
      style={{ 
        boxShadow: glow,
        backgroundColor: dotColor,
        x: "-50%" 
      }}
    >
        <div className="w-2 h-2 rounded-full bg-white/20" />
    </motion.div>
  );
};

const EducationSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    // Adjusted offset to "start 30%" so the animation feels more intentional 
    // and doesn't trigger as soon as the line hits the middle of the screen.
    offset: ["start 30%", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-32 px-6 relative bg-[#050505]" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl text-[#D4AF37] font-serif mb-4">
            Academic Journey
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37]/30 mx-auto rounded-full" />
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/10 -translate-x-1/2" />
          
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-px bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {educationData.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex items-center mb-32 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <TimelineDot 
                index={index} 
                total={educationData.length} 
                scrollProgress={scrollYProgress} 
              />

              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
              }`}>
                <motion.div 
                  className="p-8 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.03] backdrop-blur-md hover:border-[#D4AF37]/40 transition-all duration-500"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl text-[#D4AF37] font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-1">{item.institution}</p>
                  <p className="text-[#D4AF37]/50 text-xs font-mono mb-4 uppercase tracking-widest">{item.period}</p>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {item.gpa && (
                    <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      <span className="text-[#D4AF37] text-xs font-bold">GPA: {item.gpa} </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;