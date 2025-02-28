import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  PresentationChartLineIcon,
  CogIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: PresentationChartLineIcon,
      title: "Digital Strategy Development",
      description: "[Placeholder] Comprehensive digital strategy development with focus on ROI and growth",
      details: [
        "Market analysis and competitive positioning",
        "Channel strategy optimization",
        "Budget allocation and ROI forecasting",
      ],
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Reporting Framework",
      description: "[Placeholder] Custom GA4 implementation and cross-channel attribution modeling",
      details: [
        "Custom Google Analytics 4 setup",
        "Cross-channel attribution modeling",
        "Custom dashboard development",
      ],
    },
    {
      icon: MegaphoneIcon,
      title: "Marketing Campaign Optimization",
      description: "[Placeholder] Data-driven campaign optimization across all digital channels",
      details: [
        "Performance analysis and optimization",
        "A/B testing and experimentation",
        "Campaign ROI tracking",
      ],
    },
    {
      icon: CommandLineIcon,
      title: "AI & Automation Solutions",
      description: "[Placeholder] Implementation of AI-driven marketing solutions",
      details: [
        "Marketing automation setup",
        "AI-powered optimization",
        "Workflow automation",
      ],
    },
    {
      icon: CogIcon,
      title: "Technology Integration",
      description: "[Placeholder] Seamless integration of marketing technology stack",
      details: [
        "MarTech stack assessment",
        "Integration planning and execution",
        "System optimization",
      ],
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Digital Transformation",
      description: "[Placeholder] End-to-end digital transformation consulting",
      details: [
        "Digital maturity assessment",
        "Transformation roadmap",
        "Change management support",
      ],
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to drive your business growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 