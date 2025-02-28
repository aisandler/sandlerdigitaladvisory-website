import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CheckCircleIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const IdealClient = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clientCriteria = [
    {
      icon: UserGroupIcon,
      title: "Small and Medium Businesses",
      description: "[Placeholder] Businesses looking to scale their digital marketing capabilities",
    },
    {
      icon: RocketLaunchIcon,
      title: "Growth-Focused",
      description: "[Placeholder] Companies ready to invest in their digital transformation",
    },
    {
      icon: ChartBarIcon,
      title: "Data-Driven Culture",
      description: "[Placeholder] Organizations that value measurable results and ROI",
    },
    {
      icon: CheckCircleIcon,
      title: "Ready for Change",
      description: "[Placeholder] Teams prepared to implement strategic improvements",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Is This Partnership Right for You?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our most successful partnerships share these characteristics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {clientCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full mb-4">
                <criteria.icon className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{criteria.title}</h3>
              <p className="text-blue-100">{criteria.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            If this sounds like your organization, let's explore how we can accelerate your digital marketing success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdealClient; 