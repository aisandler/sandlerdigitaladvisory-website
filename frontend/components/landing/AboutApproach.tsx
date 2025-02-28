import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardDocumentCheckIcon, RocketLaunchIcon, SparklesIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const AboutApproach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const methodologySteps = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Assessment",
      description: "[Placeholder] Comprehensive evaluation of your current digital marketing landscape",
    },
    {
      icon: RocketLaunchIcon,
      title: "Roadmapping",
      description: "[Placeholder] Strategic planning and prioritization of initiatives",
    },
    {
      icon: SparklesIcon,
      title: "AI Solutions",
      description: "[Placeholder] Implementation of cutting-edge AI-driven marketing solutions",
    },
    {
      icon: ChartBarIcon,
      title: "Optimization",
      description: "[Placeholder] Continuous improvement and performance optimization",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* About Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  [Placeholder] Professional background and expertise description
                </p>
                <p className="text-lg text-gray-600">
                  [Placeholder] Personal approach and value proposition
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="bg-gray-200 w-full h-full rounded-lg">
                  {/* Placeholder for professional headshot */}
                  <div className="flex items-center justify-center h-full text-gray-400">
                    Professional Headshot Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutApproach; 