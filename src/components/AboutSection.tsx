import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl gold-shimmer mb-4">
            About Me
          </h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder with glow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card gold-border-gradient p-8 gold-glow aspect-square flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-gold/60 font-display text-2xl">SY</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-xl -z-10" />
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gold/80 text-lg leading-relaxed">
              I'm a passionate computer science student specializing in AI and Machine Learning, 
              with a keen eye for integrating backend systems with elegant frontend experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my BE in Computer Science (AIML) at Chennai Institute of Technology, 
              I combine theoretical knowledge with practical application to build innovative solutions 
              that bridge the gap between complex systems and user-friendly interfaces.
            </p>

            {/* Stats/Info cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-card p-4 gold-border-gradient">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm font-medium">Education</span>
                </div>
                <p className="text-muted-foreground text-sm">BE Computer Science (AIML)</p>
                <p className="text-gold/60 text-xs mt-1">GPA: 8.2</p>
              </div>
              
              <div className="glass-card p-4 gold-border-gradient">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm font-medium">Location</span>
                </div>
                <p className="text-muted-foreground text-sm">Chennai, India</p>
                <p className="text-gold/60 text-xs mt-1">Chennai Institute of Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
