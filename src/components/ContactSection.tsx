import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCV = () => {
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

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srinath.y.dev@gmail.com',
      href: 'mailto:srinath.y.dev@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/srinathy',
      href: 'https://github.com/srinathy',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/srinathy',
      href: 'https://linkedin.com/in/srinathy',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl gold-shimmer mb-4">
            Let's Connect
          </h2>
          <div className="section-divider w-32 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to collaborate on your next project? Let's build something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card gold-border-gradient p-6 text-center gold-glow-hover group block"
            >
              <contact.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg text-gold mb-2">{contact.label}</h3>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                {contact.value}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <MagneticButton onClick={handleDownloadCV}>
            <button className="group relative px-10 py-5 glass-card gold-border-gradient gold-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 text-gold font-medium text-lg">
                <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-24 pt-8 border-t border-gold/10 text-center"
      >
        <p className="text-muted-foreground text-sm">
          © 2024 Srinath Y. Crafted with precision and passion.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
