import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BuildingOfficeIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const EnterpriseEdge = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const capabilities = [
    {
      icon: BuildingOfficeIcon,
      title: "Enterprise Experience",
      description: "[Placeholder] Leveraging years of enterprise marketing expertise",
    },
    {
      icon: ChartPieIcon,
      title: "Advanced Analytics",
      description: "[Placeholder] Enterprise-grade analytics and reporting frameworks",
    },
    {
      icon: CloudArrowUpIcon,
      title: "Enterprise Technology",
      description: "[Placeholder] Access to enterprise-level marketing technology",
    },
    {
      icon: ShieldCheckIcon,
      title: "Best Practices",
      description: "[Placeholder] Enterprise-tested methodologies and processes",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">The Enterprise Edge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As a veteran of enterprise marketing environments, I bring capabilities typically
            reserved for large organizations to small and medium businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full mb-4">
                <capability.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            Learn More About Our Enterprise Capabilities
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseEdge; 