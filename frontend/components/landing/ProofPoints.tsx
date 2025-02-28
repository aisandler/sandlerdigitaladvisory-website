import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartBarIcon, BanknotesIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const ProofPoints = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const proofPoints = [
    {
      icon: BanknotesIcon,
      title: "$300K+ in Savings",
      description: "Identified significant savings from wasted advertising spend for a multi-brand enterprise client",
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "50%+ Revenue Increase",
      description: "Uncovered opportunities to increase e-commerce revenue through targeted channel optimization",
    },
    {
      icon: ChartBarIcon,
      title: "Data-Driven Results",
      description: "[Placeholder] Additional proof point highlighting quantifiable business impact",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <point.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProofPoints; 