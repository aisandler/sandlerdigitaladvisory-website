import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTrendingUpIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const ClientSuccess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      icon: CurrencyDollarIcon,
      title: "[Placeholder] E-commerce Revenue Growth",
      industry: "E-commerce & Retail",
      problem: "[Placeholder] Challenge description for e-commerce case study",
      approach: "[Placeholder] Strategic approach taken for the client",
      results: [
        "50% increase in e-commerce revenue",
        "30% improvement in ROAS",
        "25% reduction in customer acquisition cost",
      ],
    },
    {
      icon: ChartBarIcon,
      title: "[Placeholder] Analytics Implementation",
      industry: "Technology & SaaS",
      problem: "[Placeholder] Challenge description for analytics case study",
      approach: "[Placeholder] Strategic approach taken for the client",
      results: [
        "Complete GA4 migration and setup",
        "Cross-channel attribution model implemented",
        "Real-time performance dashboard created",
      ],
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "[Placeholder] Marketing Optimization",
      industry: "Professional Services",
      problem: "[Placeholder] Challenge description for marketing case study",
      approach: "[Placeholder] Strategic approach taken for the client",
      results: [
        "300K+ identified in ad spend savings",
        "45% increase in qualified leads",
        "60% improvement in conversion rate",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results achieved for real businesses through strategic digital marketing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-lg">
                    <study.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-white font-medium">{study.industry}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Approach:</h4>
                    <p className="text-gray-600">{study.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess; 