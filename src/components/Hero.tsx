import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <SocialLink href="#" icon={Github} label="GitHub" />
            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="#" icon={Mail} label="Email" />
            <SocialLink href="/resume.pdf" icon={FileText} label="Resume" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}