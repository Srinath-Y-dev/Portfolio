import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { toast } from 'sonner';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Srinath_Y_Resume.pdf';
    link.download = 'Srinath_Y_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download Started. Let's build something great!", {
      style: {
        background: 'hsl(0, 0%, 4%)',
        border: '0.5px solid hsl(45, 54%, 52%, 0.3)',
        color: 'hsl(45, 54%, 52%)',
      },
    });
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-obsidian-light" />
      
      {/* Subtle gold radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(45, 54%, 52%, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-6 tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name with mask reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold gold-shimmer mb-6">
            Srinath Y
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gold/80 text-xl md:text-2xl font-light mb-12 tracking-wide"
        >
          Backend and Frontend Integrator{' '}
          <span className="text-gold/40">|</span>{' '}
          AI & ML Specialist
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <MagneticButton onClick={handleDownloadCV}>
            <button className="group relative px-8 py-4 glass-card gold-border-gradient gold-glow-hover overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 text-gold font-medium">
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gold/50 hover:text-gold transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
