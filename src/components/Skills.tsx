import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'AWS', level: 70 },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div ref={ref} className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}