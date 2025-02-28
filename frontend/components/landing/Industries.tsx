import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShoppingBagIcon,
  CubeIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      icon: ShoppingBagIcon,
      name: "E-commerce & Retail",
      description: "[Placeholder] Specialized digital marketing solutions for online and retail businesses",
    },
    {
      icon: CubeIcon,
      name: "Consumer Packaged Goods",
      description: "[Placeholder] Strategic digital presence for CPG brands",
    },
    {
      icon: ComputerDesktopIcon,
      name: "Technology & SaaS",
      description: "[Placeholder] Growth-focused digital marketing for tech companies",
    },
    {
      icon: BriefcaseIcon,
      name: "Professional Services",
      description: "[Placeholder] Digital transformation for service-based businesses",
    },
    {
      icon: BuildingOfficeIcon,
      name: "Manufacturing",
      description: "[Placeholder] Digital marketing solutions for manufacturing companies",
    },
  ];

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized digital marketing expertise across diverse industry verticals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Don't see your industry? Our digital marketing expertise can be adapted to any business sector.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            Discuss Your Industry Needs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries; 